import React, { useCallback, useState } from 'react';
import ModalComponent from 'react-modal'

interface IMemberInterface {
  email: string;
  name: string;
  profile: string;
}


const Modal: React.FC = ({ children }) => {
  const [data, setData] = useState({})
  const [isOpen, setIsOpen ] = useState(false);
  

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
    <ModalComponent
        onRequestClose={handleCloseModal}
        isOpen={isOpen}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        {children}
    </ModalComponent>
  );
}

export default Modal;