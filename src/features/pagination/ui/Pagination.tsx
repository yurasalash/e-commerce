import styles from './styles.module.scss'

interface Props {
    page: number;
    handlePage: (page: number) => void;
    total: number;
}

const Pagination = ({page, handlePage, total}: Props) => {
    const arr = []
    for (let i = 0; i < Math.ceil(total / 20); i++) {
        arr.push(i + 1)
    }

    return (
        <div className={styles.paggination}>
            {arr.map((i) =>
                <span
                    key={i}
                    className={page === i ? styles.active : null}
                    onClick={() => handlePage(i)}
                >
                    {i}
                </span>
            )}
        </div>
    );
};

export default Pagination;