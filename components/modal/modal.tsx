import Image from 'next/image';
import { useForm } from 'react-hook-form';
import ModalUi from 'react-modal';
import * as yup from 'yup';
import cn from 'classnames';
import s from './style.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '../form-contact';
import { emailRegex, phoneRegex, regexUrl } from '../../helps';

const customStyles = {
  overlay: {
    zIndex: 100,
    background: `rgba(70, 107, 240, 0.7)`,
    transtion: 'all .3s ease-in-out',
  },
  content: {
    padding: 0,
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: '1100px',
    borderRadius: '12px',
    border: 'none',
    boxShadow: '0px 0px 15px rgba(0,0,0,.1) ',
    transtion: 'all .3s ease-in-out',
  },
};

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

interface FormData {
  name: string;
  phone: string;
  email: string;
  website: string;
}

const schema = yup
  .object({
    name: yup.string().required('Vui lòng điền Tên của bạn'),
    phone: yup
      .string()
      .required('Vui lòng điền Số điện thoại của bạn')
      .matches(phoneRegex, 'Vui lòng điền Số điện thoại đúng'),
    email: yup
      .string()
      .required('Vui lòng điền Email của bạn')
      .matches(emailRegex, 'Vui lòng điền Email đúng định dạng'),
    website: yup
      .string()
      .required('Vui lòng điền Website của bạn')
      .matches(regexUrl, 'Vui lòng điền Địa chỉ website đúng'),
  })
  .required();

const FormModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(() => {});

  const className = cn(
    'block w-full rounded-md px-4 py-3 border border-slate-200'
  );

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div>
        <input placeholder="Tên" {...register('name')} className={className} />
        {errors.name && <ErrorMessage error={errors.name.message} />}
      </div>
      <div>
        <input
          placeholder="Số điện thoại"
          {...register('phone')}
          className={className}
        />
        {errors.phone && <ErrorMessage error={errors.phone.message} />}
      </div>
      <div>
        <input
          placeholder="Email"
          className={className}
          {...register('email')}
        />
        {errors.email && <ErrorMessage error={errors.email.message} />}
      </div>
      <div>
        <input
          placeholder="Địa chỉ website của bạn"
          className={className}
          {...register('website')}
        />
        {errors.website && <ErrorMessage error={errors.website.message} />}
      </div>
      <button type="submit" className="bg-yellow-500 py-3 rounded-md">
        Kiểm tra ngay
      </button>
    </form>
  );
};

interface Props {
  open: boolean;
  closeModal: () => void;
}

const Modal = ({ open, closeModal }: Props) => {
  return (
    <div className="z-50 relative">
      <ModalUi
        isOpen={open}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center">
          <span
            onClick={closeModal}
            className="inline-block cursor-pointer absolute top-2 right-2 hover:bg-blue-100 p-2 rounded-full"
          >
            <CloseIcon />
          </span>
          <div className={s.bg}>
            <div className="grid gap-8">
              <div className="flex justify-end">
                <Image
                  src="/modal-vector-2.svg"
                  width="163px"
                  height="125px"
                  alt=""
                />
              </div>
              <div className="flex justify-center">
                <Image
                  height="250px"
                  width="416px"
                  src="/modal-vector-1.svg"
                  alt=""
                />
              </div>
              <div className="flex justify-start">
                <Image
                  src="/modal-vector-3.svg"
                  alt=""
                  width="188px"
                  height="96px"
                />
              </div>
            </div>
          </div>
          <div className="flex-1 py-8 px-14 relative">
            <div className="grid gap-4 mb-6">
              <h3 className="font-semibold text-3xl">
                Nhận bài test chấm điểm website của bạn
              </h3>
              <p>
                Chúng tôi sẽ gửi bạn kết qủa bài Test trong vòng 24h kèm với các
                phân tích và giải pháp tư chuyên gia
              </p>
            </div>
            <FormModal />
          </div>
        </div>
      </ModalUi>
    </div>
  );
};

export { Modal };
