import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import Intro from '../components/intro'
import { getAllPostsWithTitleExcerptFeatureImage } from '../lib/api'
import PostCard from '../components/posts-card'


export default function Posts({ allPosts: { edges } }) {
    const allThePosts = edges
    return (
        <>
            <Layout>
                <Head>
                    <title>Next.js Blog Example</title>
                </Head>
                <Container>
                    <Intro />
                    <h1 className="rounded-full bg-indigo-500 text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 text-indigo-100 p-10 mt-10 mb-10 text-center">This is the All Post Page</h1>
                    {allThePosts.map(post =>
                        <div key={post.node.id}>
                            <PostCard
                                title={post.node.title}
                                coverImage={post.node.featuredImage !== null ? post.node.featuredImage.node : null}
                                excerpt={post.node.excerpt}
                                slug={post.node.slug}
                            />
                        </div>
                    )}
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const allPosts = await getAllPostsWithTitleExcerptFeatureImage()
    return {
        props: { allPosts },
    }
}