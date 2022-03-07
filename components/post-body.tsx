import { useEffect } from "react";
//import markdownStyles from "./markdown-styles.module.css";
import styles from "../styles/PostBody.module.scss";

import prism from "remark-prism";

type Props = {
    content: string;
};

const PostBody = ({ content }: Props) => {
    return (
        <div
            className={styles.post}
            dangerouslySetInnerHTML={{
                __html: content,
            }}
        />
    );
};

export default PostBody;
