import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Section = ({ children }: Props) => {
  return <section className="py-6">{children}</section>;
};

export { Section };
