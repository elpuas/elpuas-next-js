import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPostsWithTitle } from '../lib/api'
import PostCard from '../components/posts-card'


export default function Posts({ allPosts: { edges }}) {
    const allThePosts = edges
    return (
        <>
            <Layout>
                <Head>
                    <title>Next.js Blog Example</title>
                </Head>
                <Container>
                <p>This is the All Post Page</p>
                {console.log(allThePosts)}
                {allThePosts.map(post =>
                    <PostCard
                    title={post.node.title}
                    coverImage={post.node.featuredImage !== null ? post.node.featuredImage.node : null}
                    excerpt={post.node.excerpt}
                    />
                    )}
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const allPosts = await  getAllPostsWithTitle()
    return {
      props: { allPosts },
    }
  }