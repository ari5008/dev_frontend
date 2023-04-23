import { Header } from "../organisms/layout/Header";

export const HeaderLayout = ({ children }) => {

  return (
    <>
      <Header />
      {children}
    </>
  );
}