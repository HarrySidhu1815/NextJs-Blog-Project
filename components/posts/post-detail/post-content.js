import React from "react";
import PostHeader from "./post-header";
import classes from './post-content.module.css'
import ReactMarkdown from 'react-markdown'

const DUMMY_POST =
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    date: "2023-10-15",
    content: "# This is NextJS Project",
  }


export default function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}
