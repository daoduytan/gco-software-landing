import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAboutData } from "../../hooks";
import * as y from "yup";
import { TAboutListItem } from "../../lib/db";
import { useEffect } from "react";

const schema = y.object({
  title: y.string().required(),
  description: y.string().required(),
});

interface FormData {
  title: string;
  description: string;
}

interface FormProps {
  item?: TAboutListItem;
}

const Form = ({ item }: FormProps) => {
  const { handleSubmit, register, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (item) reset(item);
  }, [item]);

  const onSubmit = handleSubmit(async (data) => {
    await fetch("api/about", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item: data }),
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <input {...register("title")} />
      <input {...register("description")} />
      <button type="submit">Add</button>
    </form>
  );
};

const FormAboutList = () => {
  const { data, error } = useAboutData();

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      {(data?.items || []).map((item) => {
        return (
          <div key={item.id}>
            {item.title}
            {item.description}
          </div>
        );
      })}
      <Form />
      <button>Add</button>
    </div>
  );
};

export { FormAboutList };
