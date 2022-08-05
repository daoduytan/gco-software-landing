import { ReactNode } from 'react';
import s from './style.module.scss';

interface Props {
  children: ReactNode;
  title?: string;
  description?: string;
}

const WrapForm = ({ children, title, description }: Props) => {
  return <div className={s.wrapForm}>{children}</div>;
};

export { WrapForm };
