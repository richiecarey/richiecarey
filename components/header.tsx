import Link from "next/link";
import styles from "../styles/Header.module.scss";
import * as constants from "../lib/constants";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.site}>
                <h1>
                    <Link href="/">{constants.NAME}</Link>
                </h1>
                <p>{constants.TITLE}</p>
            </div>
            <div className={styles.contact}>
                <p>
                    <Link href={constants.LINK_URL}>{constants.LINK_TEXT}</Link>
                </p>
            </div>
        </header>
    );
};

export default Header;
