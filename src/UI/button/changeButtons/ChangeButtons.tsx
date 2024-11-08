import styles from './ChangeButtons.module.css'
import React from "react";

interface Props {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    min: number;
}

const ChangeButtons = ({count, setCount, min}: Props) => {
    return (
        <div className={styles.change}>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <span>{count}</span>
            <button onClick={() => setCount(prev => Math.max(min, prev - 1))}>-</button>
        </div>
    );
};

export default ChangeButtons;