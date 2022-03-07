import { ReactNode } from "react";
import styles from "../styles/PostTitle.module.scss";

type Props = {
    children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
    return <h3 className={styles.h3}>{children}</h3>;
};

export default PostTitle;
