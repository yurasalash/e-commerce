import styles from './styles.module.scss'
import {ReactNode} from "react";

interface Props {
    children: ReactNode,
    setVisible: (visible: boolean) => void,
}

const Modal = ({children, setVisible}: Props) => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        setVisible(false)
    }
    return (
        <div className={styles.modal} onClick={() => setVisible(false)}>
            <div className={styles.content} onClick={handleClick}>
                {children}
            </div>
        </div>
    );
};

export default Modal;