import { getPostBySlug, getAllPosts } from "../../lib/api";
import { useRouter } from "next/router";
//import Container from "../../components/container";
import ErrorPage from "next/error";
import Head from "next/head";
//import Header from "../../components/header";
import Layout from "../../components/layout";
import markdownToHtml from "../../lib/markdownToHtml";
//import PostBody from "../../components/post-body";
//import PostHeader from "../../components/post-header";
import PostTitle from "../../components/post-title";
import PostType from "../../types/post";
import Article from "../..//components/article";

type Props = {
    post: PostType;
    morePosts: PostType[];
    preview?: boolean;
};

const Post = ({ post, morePosts, preview }: Props) => {
    const router = useRouter();
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />;
    }
    return (
        <Layout>
            {router.isFallback ? (
                <PostTitle>Loading…</PostTitle>
            ) : (
                <Article post={post} />
            )}
        </Layout>
    );
};

export default Post;

type Params = {
    params: {
        slug: string;
    };
};

export async function getStaticProps({ params }: Params) {
    const post = getPostBySlug(params.slug, [
        "title",
        "date",
        "slug",
        "content",
        "ogImage",
        "coverImage",
        "content",
    ]);

    post.content = await markdownToHtml(post.content);

    return {
        props: {
            post,
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts(["slug"]);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
}
