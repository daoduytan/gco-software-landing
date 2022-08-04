import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Dasboard = ({ children }: Props) => {
  return (
    <div>
      <div>Sidebar</div>
      <div>{children}</div>
    </div>
  );
};

export { Dasboard };
