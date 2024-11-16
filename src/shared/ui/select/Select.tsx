import styles from './styles.module.scss'
import {useState} from "react";

interface Props {
    setOrder: (order: string) => void;
    setSort: (sort: string) => void;
}

const Select = ({setSort, setOrder}: Props) => {
    const [value, setValue] = useState('')
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const response = event.target.value;
        const arr = response.split(' ')
        setSort(arr[0]);
        setOrder(arr[1]);
        setValue(response)
    }

    return (
        <select value={value} onChange={handleChange} className={styles.select}>
            <option value="" disabled>Sort by</option>
            <option value="price asc">From cheaper to expensive</option>
            <option value="price desc">From expensive to cheaper</option>
            <option value="rating asc">By rating</option>
        </select>
    );
};

export default Select;