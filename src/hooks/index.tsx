import React from "react";
import { LoaderProvider } from "./LoaderProvider";

const AppProvider: React.FC = ({ children }) => (
  <LoaderProvider>
    {children}
  </LoaderProvider>
)


export { AppProvider }