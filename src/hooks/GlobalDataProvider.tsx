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

interface IProjectProps {
  project: {
    name: string,
    description: string;
    seller_id: string;
    post_seller_id: string;
    cost: string;
    prediction_start: Date;
    prediction_end: Date;
  }
}



interface GlobalDataContextData {
  memberList: IMemberProps[];
  handleReloadMemberList(): void;
  profileList: IProfileProps[];
  handleReloadProfileList(): void;
  projectList: IProjectProps[];
  handleReloadProjectList(): void;
}

export const GlobalDataProviderContext = createContext<GlobalDataContextData>(
  {} as GlobalDataContextData,
);

const GlobalDataProvider: React.FC = ({ children }) => {
  const [profileList, setProfileList] = useState([]);
  const [memberList, setMemberList] = useState<IMemberProps[]>([] as IMemberProps[]);
  const [projectList, setProjectList] = useState<IProjectProps[]>([] as IProjectProps[]);

  const handleReloadMemberList = useCallback( async() => {
    const { data } = await api.get('team')
    setMemberList(data)   
  }, [memberList]);
  
  const handleReloadProfileList = useCallback( async() => {
    const { data } = await api.get('profile')
    setProfileList(data)
  }, [memberList]);

  const handleReloadProjectList = useCallback( async() => {
    const { data } = await api.get('project')
    setProjectList(data)   
  }, [projectList]);

  return (
    <GlobalDataProviderContext.Provider value={{
      memberList, handleReloadMemberList, 
      profileList, handleReloadProfileList, 
      projectList, handleReloadProjectList   
      
      }}>

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
