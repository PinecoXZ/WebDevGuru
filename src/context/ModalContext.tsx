import { useState, type ReactNode } from 'react';
import { ModalContext } from './modal-context';
import { track } from '../utils/analytics';

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const openModal = (content: ReactNode) => {
    track('contact_modal_opened', { source: 'form' });
    setModalContent(content);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
    setTimeout(() => setModalContent(null), 300);
  };

  return (
    <ModalContext.Provider value={{ 
      isOpen, 
      openModal, 
      closeModal, 
      modalContent 
    }}>
      {children}
    </ModalContext.Provider>
  );
};
