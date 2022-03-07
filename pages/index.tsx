// import PostBody from "../components/post-body";
// import PostHeader from "../components/post-header";
// import prism from "remark-prism";
// import React, { useState, useEffect } from "react";
import { getAllPosts } from "../lib/api";
import Article from "../components/article";
import Head from "next/head";
import Layout from "../components/layout";
import markdownToHtml from "../lib/markdownToHtml";
import Post from "../types/post";
import { NAME, TITLE } from "../lib/constants";

type Props = {
    allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
    return (
        <Layout>
            <Head>
                <title>
                    {NAME} / {TITLE}
                </title>
            </Head>
            {allPosts.map((post) => (
                <Article post={post} />
            ))}
        </Layout>
    );
};

export default Index;

export async function getStaticProps() {
    const allPosts = getAllPosts(["title", "date", "slug", "content"]);

    for (const post of allPosts) {
        post.content = await markdownToHtml(post.content);
    }
    return {
        props: { allPosts },
    };
}
