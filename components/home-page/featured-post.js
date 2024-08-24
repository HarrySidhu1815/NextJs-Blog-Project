import React from 'react'
import classes from './featured-post.module.css'
import PostGrid from '../posts/post-grid'

export default function FeaturePosts({posts}) {
  return (
    <section className={classes.latest}>
      <h2>Feature Posts</h2>
      <PostGrid posts={posts}/>
    </section>
  )
}
