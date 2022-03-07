import PostHeader from "./post-header";
import PostBody from "./post-body";
import Post from "../types/post";
import styles from "../styles/Article.module.scss";

// import Link from "next/link";
// import markdownToHtml from "../lib/markdownToHtml";

type Props = {
    post: Post;
};

const Article = ({ post }: Props) => {
    return (
        <article key={post.slug} className={styles.article}>
            <PostHeader title={post.title} date={post.date} slug={post.slug} />
            <PostBody content={post.content} />
        </article>
    );
};

export default Article;
