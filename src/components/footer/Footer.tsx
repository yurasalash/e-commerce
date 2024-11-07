import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            Made by Yurii Salash &copy; {new Date().getFullYear()}
        </footer>
    );
};

export default Footer;