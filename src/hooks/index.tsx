import React from "react";
import { AuthProvider } from "./AuthProvider";
import { FormMemberProvider } from "./FormMemberProvider";
import { LoaderProvider } from "./LoaderProvider";
import { RouterProvider } from "./RouterProvider";

const AppProvider: React.FC = ({ children }) => (
  <LoaderProvider>
    <AuthProvider>
      <RouterProvider>
        <FormMemberProvider>
          {children}
        </FormMemberProvider>
      </RouterProvider>
    </AuthProvider>
  </LoaderProvider>
)


export { AppProvider }