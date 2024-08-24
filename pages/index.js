import React from "react";
import Hero from "../components/home-page/hero";
import FeaturePosts from "../components/home-page/featured-post";
import { getFeaturedPosts } from "../lib/post-util";

export default function HomePage({posts}) {
  return (
    <>
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