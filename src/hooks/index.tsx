import React from "react";
import { AuthProvider } from "./AuthProvider";
import { LoaderProvider } from "./LoaderProvider";

const AppProvider: React.FC = ({ children }) => (
  <LoaderProvider>
    <AuthProvider>
      {children}
    </AuthProvider>
  </LoaderProvider>
)


export { AppProvider }