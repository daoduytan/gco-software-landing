import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Container = ({ children }: Props) => {
  return <div className="container px-4 mx-auto">{children}</div>;
};

export { Container };
