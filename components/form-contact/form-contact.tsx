import { yupResolver } from '@hookform/resolvers/yup';
import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { phoneRegex } from '../../helps';
import { ErrorMessage } from './form-error-message';

const clsInput = 'block bg-white rounded block w-full px-5 py-3';

const schemaFooter = yup
  .object({
    name: yup.string().required('Vui lòng điền Tên của bạn'),
    phone: yup
      .string()
      .required('Vui lòng điền Số điện thoại của bạn')
      .matches(phoneRegex, 'Số điện thoại không đúng'),
    type: yup.string(),
  })
  .required();

interface FormFooterData {
  name: string;
  phone: string;
  type: string;
}

interface FormContactFooterProps {
  heading: ReactNode;
}

const FormContactFooter = ({ heading }: FormContactFooterProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFooterData>({
    resolver: yupResolver(schemaFooter),
  });

  const onSubmit = handleSubmit((data) => {});

  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-8">
        {heading}
        <div className="grid gap-5">
          <div>
            <input
              {...register('name')}
              className={clsInput}
              placeholder="Tên"
            />
            {errors.name && <ErrorMessage error={errors.name.message} />}
          </div>
          <div>
            <input
              className={clsInput}
              {...register('phone')}
              placeholder="Số điện thoại"
            />
            {errors.phone && <ErrorMessage error={errors.phone.message} />}
          </div>
          <select
            {...register('type')}
            placeholder="Loại hình website"
            className={clsInput}
          >
            <option disabled selected>
              Loại hình website
            </option>
            <option value="ecommerce">
              Website bán hàng - thương mại điện tử
            </option>
            <option value="news">Website giới thiệu - tin tức</option>
            <option value="travel">Website du lịch</option>
          </select>
        </div>
        <button
          className="bg-yellow-500 border border-yellow-600 px-4 py-3 rounded"
          type="submit"
        >
          Đăng ký
        </button>
      </div>
    </form>
  );
};

interface FormContactHeaderProps {
  heading: ReactNode;
}

const schemaHeader = yup
  .object({
    name: yup.string().required('Vui lòng điền Tên của bạn'),
    phone: yup.string().required('Vui lòng điền Số điện thoại của bạn'),
  })
  .required();

interface FormHeaderData {
  name: string;
  phone: string;
}

const FormContactHeader = ({ heading }: FormContactHeaderProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormHeaderData>({
    resolver: yupResolver(schemaHeader),
  });

  const onSubmit = handleSubmit((data) => {});

  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-8">
        {heading}
        <div className="grid gap-5">
          <div>
            <input
              className={clsInput}
              {...register('name')}
              placeholder="Tên"
            />
            {errors.name && <ErrorMessage error={errors.name.message} />}
          </div>
          <div>
            <input
              className={clsInput}
              {...register('phone')}
              placeholder="Số điện thoại"
            />
            {errors.phone && <ErrorMessage error={errors.phone.message} />}
          </div>
        </div>
        <button
          className="bg-yellow-500 border border-yellow-600 px-4 py-3 rounded"
          type="submit"
        >
          Đăng ký
        </button>
      </div>
    </form>
  );
};

interface Props {
  title?: string;
  description?: string;
  type: 'footer' | 'header' | 'modal';
}

const FormContact = ({
  type,
  title = 'Đăng ký nhận tư vấn',
  description = 'Thiết kế website tối ưu dành cho doanh nghiệp',
}: Props) => {
  const heading = (
    <div className="text-center text-white py-6">
      <h5 className="text-3xl font-bold mb-3">{title}</h5>
      <p>{description}</p>
    </div>
  );

  if (type === 'footer') {
    return <FormContactFooter heading={heading} />;
  }

  if (type === 'header') {
    return <FormContactHeader heading={heading} />;
  }

  return <FormContactHeader heading={heading} />;
};

export { FormContact };
