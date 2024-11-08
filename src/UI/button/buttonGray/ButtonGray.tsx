import styles from './ButtonGray.module.css'
import React from "react";

interface Props {
    children: React.ReactNode,
    onClick?: () => void
}

const ButtonGray = ({children, onClick}: Props) => {
    return (
        <button className={styles.button} onClick={onClick}>
            {children}
        </button>
    );
};

export default ButtonGray;