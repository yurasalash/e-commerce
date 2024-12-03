import {createContext, ReactNode, useContext, useState} from "react";


interface ModalContext {
    modal: boolean;
    toggleModal: () => void;
    closeModal: () => void;
}

export const ModalContext = createContext<ModalContext | undefined>(undefined);

export const useModal = () => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error('useModal must be defined');
    }

    return context;
}

export const ModalProvider = ({ children }: {children: ReactNode}) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(prev => !prev)
    }

    const closeModal = () => {
        setModal(false)
    }

    return (
        <ModalContext.Provider value={{modal, toggleModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    )
}