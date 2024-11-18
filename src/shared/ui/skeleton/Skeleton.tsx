import styles from './styles.module.scss'

const Skeleton = () => {
    const array = new Array(10)

    return (
        <div className={styles.skeleton}>
            {array.map(i =>
                <div key={i} className={styles.item}></div>
            )}
        </div>
    );
};

export default Skeleton;