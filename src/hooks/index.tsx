import React from "react";
import { AuthProvider } from "./AuthProvider";
import { FormModalProvider } from "./FormModalProvider";
import { GlobalDataProvider } from "./GlobalDataProvider";

import { LoaderProvider } from "./LoaderProvider";
import { RouterProvider } from "./RouterProvider";

const AppProvider: React.FC = ({ children }) => (
  <GlobalDataProvider>
    <LoaderProvider>
      <AuthProvider>
        <RouterProvider>
          <FormModalProvider>
            {children}
          </FormModalProvider>
        </RouterProvider>
      </AuthProvider>
    </LoaderProvider>
  </GlobalDataProvider>
)


export { AppProvider }