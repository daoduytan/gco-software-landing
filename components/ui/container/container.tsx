import { ReactNode } from 'react';
import styled from './container.module.css';

interface Props {
  children: ReactNode;
}
const Container = ({ children }: Props) => {
  return <div className={styled.container}>{children}</div>;
};

export { Container };
