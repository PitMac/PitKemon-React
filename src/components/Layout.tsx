import { ReactNode } from "react";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

interface Props {
  children: ReactNode;
  title?: string;
}

export const Layout = ({ children, title }: Props) => {
  return (
    <>
      <NavBar />
      <main style={{ padding: "0px 20px", minHeight: "77.3vh" }}>
        {children}
      </main>
      <Footer />
    </>
  );
};
