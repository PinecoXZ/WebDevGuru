import { createContext, type ReactNode } from 'react';

export interface ModalContextType {
  isOpen: boolean;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
  modalContent: ReactNode | null;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);
