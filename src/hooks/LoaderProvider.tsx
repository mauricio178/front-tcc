import React, { useContext, createContext, useState, useCallback } from 'react';
import OverlayLoader from '../components/OverlayLoader';

interface LoaderContextData {
  toggleLoading(): void;
}

export const LoaderProviderContext = createContext<LoaderContextData>(
  {} as LoaderContextData,
);

const LoaderProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const toggleLoading = useCallback(() => {
    setLoading(prevData => !prevData);    
  }, []);

  return (
    <LoaderProviderContext.Provider value={{ toggleLoading }}>
      {children}

      {loading && <OverlayLoader />}
    </LoaderProviderContext.Provider>
  );
};

function useLoader(): LoaderContextData {
  const context = useContext(LoaderProviderContext);

  if (!context) {
    throw new Error('useLoader must be used with LoaderProvider');
  }

  return context;
}

export { LoaderProvider, useLoader };
