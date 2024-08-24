import React from 'react'
import PostContent from '../../components/posts/post-detail/post-content'
import { getAllFileNames, getPostData } from '../../lib/post-util'
import Head from 'next/head'

export default function PostDetailPage({postData}) {
  return (
    <>
    <Head>
        <title>{postData.title}</title>
        <meta name='description' content={postData.excerpt} />
    </Head>
    <PostContent post={postData}/>
    </>
  )
}

export function getStaticProps(context){
    
    const { params } = context
    const { slug } = params

    const postData = getPostData(slug)
    return {
        props: {
            postData : postData
        },
        revalidate: 1800
    }
}

export function getStaticPaths(){
    const fileNames = getAllFileNames()

    const allSlugs = fileNames.map(fileName => fileName.replace(/\.md$/, ''))
    return {
        paths: allSlugs.map(slug => ({params: {slug: slug}})),
        fallback: false
    }
}