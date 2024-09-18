import React, { ReactNode } from "react";
import Header from "./_components/Header";

interface ProviderProps {
  children: ReactNode;
}

export const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="mt-32">{children}</div>
    </div>
  );
};
