import styles from './ChangeButtons.module.css'
import {useEffect, useState} from "react";

interface Props {
    amount: number;
    min: number;
    cb: (count: number) => void;
}

const ChangeButtons = ({amount, min, cb}: Props) => {
    const [count, setCount] = useState(amount);

    useEffect(() => {
        cb(count);
    }, [count])

    return (
        <div className={styles.change}>
            <button onClick={() => setCount(prev => prev + 1)}>+</button>
            <span>{count}</span>
            <button onClick={() => setCount(prev => Math.max(min, prev - 1))}>-</button>
        </div>
    );
};

export default ChangeButtons;