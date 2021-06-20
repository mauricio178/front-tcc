import React, { useContext, createContext, useState, useCallback, ReactNode } from 'react';
import Modal from 'react-modal'

interface FormModalContextData {
  handleOpenModal(memberData?: IMemberInterface): void;
  handleCloseModal(): void;
  handlesSetFormComponent(component: ReactNode, formData?: any): void;
  isOpen: boolean;
  data: any;
}

interface IMemberInterface {
  email: string;
  name: string;
  profile: string;
}


export const FormModalProviderContext = createContext<FormModalContextData>(
  {} as FormModalContextData,
);

const FormModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen ] = useState(false);
  const [data, setData] = useState({})
  const [formComponent, setFormComponent] = useState<ReactNode>(null)

  const handleCloseModal = useCallback(() => {
    setData({})
    setIsOpen(false)
  },[isOpen])
  
  const handlesSetFormComponent = useCallback((component: ReactNode, formData?: any) => {
    setFormComponent(component)
    setData(formData)
    setIsOpen(true)
  },[isOpen])
  
  const handleOpenModal = useCallback((memberData?: IMemberInterface) => {
    if(memberData){
      setData(memberData)
    }
    setIsOpen(true)
  },[isOpen])

  return (
    <FormModalProviderContext.Provider value={{ handleOpenModal, handleCloseModal, isOpen, handlesSetFormComponent, data }}>
      {children}

      <Modal
        onRequestClose={handleCloseModal}
        isOpen={isOpen}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        {/* <FormModal data={data} /> */}
        {formComponent || null}
    </Modal>

    </FormModalProviderContext.Provider>
  );
};

function useFormModal(): FormModalContextData {
  const context = useContext(FormModalProviderContext);

  if (!context) {
    throw new Error('useFormModal must be used with FormModalProvider');
  }

  return context;
}

export { FormModalProvider, useFormModal };
