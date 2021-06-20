import React, { useContext, createContext, useState, useCallback } from 'react';
import Modal from 'react-modal'
import { FormMember } from '../pages/dashboard/member/form';


interface FormMemberContextData {
  handleOpenModal(memberData?: IMemberInterface): void;
  handleCloseModal(): void;
  isOpen: boolean;
}

interface IMemberInterface {
  email: string;
  name: string;
  profile: string;
}


export const FormMemberProviderContext = createContext<FormMemberContextData>(
  {} as FormMemberContextData,
);

const FormMemberProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen ] = useState(false);
  const [data, setData] = useState({})

  const handleCloseModal = useCallback(() => {
    setData({})
    setIsOpen(false)
  },[isOpen])
  
  const handleOpenModal = useCallback((memberData?: IMemberInterface) => {
    if(memberData){
      setData(memberData)
    }
    setIsOpen(true)
  },[isOpen])

  return (
    <FormMemberProviderContext.Provider value={{ handleOpenModal, handleCloseModal, isOpen }}>
      {children}

      <Modal
        onRequestClose={handleCloseModal}
        isOpen={isOpen}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <FormMember data={data} />
    </Modal>

    </FormMemberProviderContext.Provider>
  );
};

function useFormMember(): FormMemberContextData {
  const context = useContext(FormMemberProviderContext);

  if (!context) {
    throw new Error('useFormMember must be used with FormMemberProvider');
  }

  return context;
}

export { FormMemberProvider, useFormMember };
