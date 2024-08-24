import React from 'react'
import AllPosts from '../../components/posts/all-posts';

const DUMMY_DATA = [
    {
      slug: "getting-started-with-nextjs",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      date: "2023-10-15",
      excerpt:
        "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      date: "2023-10-15",
      excerpt:
        "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      date: "2023-10-15",
      excerpt:
        "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "Getting Started with NextJS",
      image: "getting-started-nextjs.png",
      date: "2023-10-15",
      excerpt:
        "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    },
  ];

export default function AllPostsPage() {
  return (
    <AllPosts posts={DUMMY_DATA} />
  )
}
