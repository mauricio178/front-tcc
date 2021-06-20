import React, { useContext, createContext, useState, useCallback } from 'react';

interface RouterContextData {
  handleSetHeaderTitle(title: string): void;
  headerTitle: string;
}

export const RouterProviderContext = createContext<RouterContextData>(
  {} as RouterContextData,
);

const RouterProvider: React.FC = ({ children }) => {
  const [headerTitle, setHeaderTitle ] = useState('');

  const handleSetHeaderTitle = useCallback((title: string) => {
    setHeaderTitle(title);    
  }, []);

  return (
    <RouterProviderContext.Provider value={{ handleSetHeaderTitle, headerTitle }}>
      {children}
    </RouterProviderContext.Provider>
  );
};

function useRouter(): RouterContextData {
  const context = useContext(RouterProviderContext);

  if (!context) {
    throw new Error('useRouter must be used with RouterProvider');
  }

  return context;
}

export { RouterProvider, useRouter };
