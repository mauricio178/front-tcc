import React, { useContext, createContext, useState, useCallback } from 'react';
import { api } from '../services/api';


interface IMemberProps {
  email: string;
  name: string;
  profile: string;
}

interface IProfileProps {
  name: string;
  description: string;
}


interface GlobalDataContextData {
  memberList: IMemberProps[];
  handleReloadMemberList(): void;
  profileList: IProfileProps[];
  handleReloadProfileList(): void;
}

export const GlobalDataProviderContext = createContext<GlobalDataContextData>(
  {} as GlobalDataContextData,
);

const GlobalDataProvider: React.FC = ({ children }) => {
  const [profileList, setProfileList] = useState([]);
  const [memberList, setMemberList] = useState<IMemberProps[]>([] as IMemberProps[]);

  const handleReloadMemberList = useCallback( async() => {
    const { data } = await api.get('team')
    setMemberList(data)   
  }, [memberList]);
  
  const handleReloadProfileList = useCallback( async() => {
    const { data } = await api.get('profile')
    setProfileList(data)
  }, [memberList]);

  return (
    <GlobalDataProviderContext.Provider value={{ memberList, handleReloadMemberList, profileList, handleReloadProfileList }}>
      {children}
    </GlobalDataProviderContext.Provider>
  );
};

function useGlobalData(): GlobalDataContextData {
  const context = useContext(GlobalDataProviderContext);

  if (!context) {
    throw new Error('GlobalData must be used with GlobalDataProvider');
  }

  return context;
}

export { GlobalDataProvider, useGlobalData };
