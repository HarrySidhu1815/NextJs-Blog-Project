import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const parentDirectory = path.join(process.cwd(), 'posts')

function getPostData(filename){
    const filePath = path.join(parentDirectory, filename)

    const fileContent = fs.readFileSync(filePath, 'utf-8')

    const {data, content} = matter(fileContent)

    const postSlug = filename.replace(/\.md$/, '')

    const postData = {
        slug: postSlug,
        ...data,
        content
    }

    return postData
}

export function getAllPosts(){
    const postFiles = fs.readdirSync(parentDirectory)

    const allPosts = postFiles.map(postFile => {return getPostData(postFile)})

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)

    return sortedPosts
}

export function getFeaturedPosts(){

    const allPosts = getAllPosts()

    const featuredPost = allPosts.filter(post => post.isFeatured)

    return featuredPost
}