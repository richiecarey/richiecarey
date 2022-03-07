---
title: 'Hello, world'
date: '2022-03-01T05:35:07.322Z'
---

First post.

```javascript showLineNumbers
export async function getStaticProps() {
    const allPosts = getAllPosts([
        "title",
        "date",
        "slug",
        "content",
    ]);

    for (const post of allPosts) {
        post.content = await markdownToHtml(post.content);
    }
    return {
        props: { allPosts },
    };
}
```
