import React from "react";
import Hero from "../components/home-page/hero";
import FeaturePosts from "../components/home-page/featured-post";
import { getFeaturedPosts } from "../lib/post-util";
import Head from "next/head";

export default function HomePage({posts}) {
  return (
    <>
    <Head>
        <title>Harry' Blog</title>
        <meta name="description" content="I post about programming and web development." />
    </Head>
      <Hero />
      <FeaturePosts posts={posts} />
    </>
  );
}

export function getStaticProps(){
    const featuredPosts = getFeaturedPosts()
    return {
        props: {
            posts : featuredPosts
        }
    }
}