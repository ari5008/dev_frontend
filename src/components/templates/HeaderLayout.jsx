import React from "react";
import { Header } from "../organisms/layout/Header";
import { useIsSmallScreen } from './../../hooks/useIsSmallScreen';

export const HeaderLayout = ({ children }) => {
  const isSmallScreen = useIsSmallScreen();

  return (
    <>
      <Header isSmallScreen={isSmallScreen} />
      {children}
    </>
  );
}