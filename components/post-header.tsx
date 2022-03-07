import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Link from "next/link";

type Props = {
    title: string;
    date: string;
    slug: string;
};

const PostHeader = ({ title, date, slug }: Props) => {
    return (
        <>
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a>
                    <PostTitle>{title}</PostTitle>
                </a>
            </Link>
            <DateFormatter dateString={date} />
        </>
    );
};

export default PostHeader;
