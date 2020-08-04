import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import Intro from '../components/intro'
import { getAllPostsWithTitleExcerptFeatureImage } from '../lib/api'
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
                <Intro />
                <h1 className="rounded-full bg-indigo-500 text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">This is the All Post Page</h1>
                {allThePosts.map(post =>
                    <PostCard
                    key={post.node.id}
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
    const allPosts = await  getAllPostsWithTitleExcerptFeatureImage()
    return {
      props: { allPosts },
    }
  }