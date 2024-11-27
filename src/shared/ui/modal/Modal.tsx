import styles from './styles.module.scss'
import {ReactNode} from "react";
import {useModal} from "../../../app/providers/ModalProvider.tsx";

const Modal = ({children}: {children: ReactNode}) => {
    const {toggleModal} = useModal()

    return (
        <div className={styles.modal} onClick={() => toggleModal()}>
            <div className={styles.content} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;