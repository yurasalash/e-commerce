import {createContext, ReactNode, useContext, useState} from "react";
import {useStyle} from "../../shared/hooks/useStyle.ts";


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
    const [, setOverflow] = useStyle('overflow')

    const toggleModal = () => {
        setModal(prev => {
            if (prev) {
                setOverflow('auto')
            } else {
                setOverflow('hidden')
            }
            return !prev
        })
    }

    const closeModal = () => {
        setModal(false)
        setOverflow('auto')
    }

    return (
        <ModalContext.Provider value={{modal, toggleModal, closeModal}}>
            {children}
        </ModalContext.Provider>
    )
}