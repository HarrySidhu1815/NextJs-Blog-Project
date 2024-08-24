import React from "react";
import PostHeader from "./post-header";
import classes from './post-content.module.css'
import ReactMarkdown from 'react-markdown'



export default function PostContent({post}) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
