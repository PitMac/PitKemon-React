import { ReactNode } from "react";
import { NavBar } from "./NavBar";

interface Props {
  children: ReactNode;
  title?: string;
}

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <NavBar />
      <main style={{ padding: "0px 20px" }}>{children}</main>
    </>
  );
};
