import PostHeader from "./post-header";
import PostBody from "./post-body";
import Post from "../types/post";
// import Link from "next/link";
// import markdownToHtml from "../lib/markdownToHtml";

type Props = {
    posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
    return (
        <section>
            {posts.map((post) => (
                // <PostPreview
                //     key={post.slug}
                //     title={post.title}
                //     coverImage={post.coverImage}
                //     date={post.date}
                //     slug={post.slug}
                //     excerpt={post.excerpt}
                // />
                <>
                    <PostHeader
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        slug={post.slug}
                    />
                    <PostBody content={post.content} />
                </>
            ))}
        </section>
    );
};

export default MoreStories;
