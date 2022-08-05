import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const Section = ({ children }: Props) => {
  return <section className="py-16 overflow-hidden">{children}</section>;
};

export { Section };
