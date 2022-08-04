import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useAboutData } from "../../hooks";

const schema = yup.object({
  title: yup.string(),
  desciption: yup.string(),
});

type FormData = {
  title?: string;
  description?: string;
};

export const FormAbout = () => {
  const { data, error } = useAboutData();
  console.log({ data });

  const { register, handleSubmit, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const defaultValues = {
      title: data?.title,
      description: data?.description,
    };
    reset({ ...defaultValues });
  }, [data]);

  const onSubmit = handleSubmit((data) => {
    fetch("/api/about", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify(data),
    });
  });
  return (
    <form onSubmit={onSubmit}>
      <input {...register("title")} className="border" />
      <textarea {...register("description")} className="border"></textarea>
      <button type="submit">Save</button>
    </form>
  );
};
