import React from 'react';
import { remark } from 'remark'
import html from 'remark-html'
import prism from "remark-prism";

export default async function markdownToHtml(markdown: string) {
  
  // const result = await remark().use(prism, {
  //   plugins: [
  //     'prismjs/plugins/autolinker/prism-autolinker',
  //     'prismjs/plugins/diff-highlight/prism-diff-highlight',
  //     'prismjs/plugins/inline-color/prism-inline-color',
  //     'prismjs/plugins/line-numbers/prism-line-numbers',
  //     'prismjs/plugins/treeview/prism-treeview',
  //     'prismjs/plugins/show-invisibles/prism-show-invisibles',
  //   ],
  // }).use(html, { sanitize: false }).process(markdown);

  const result = await remark().use(prism).use(html, { sanitize: false }).process(markdown);

  return result.toString()
}
