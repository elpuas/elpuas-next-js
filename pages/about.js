import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import Intro from '../components/intro'
import { getAllPages } from '../lib/api'
import PostBody from '../components/post-body'

export default function About({ allPages: { edges } }) {
    const aboutPage = edges[5]?.node
    return (
        <>
            <Layout>
                <Head>
                    <title>Next.js Page</title>
                </Head>
                <Container>
                    <Intro />
                    <h1 className="rounded-full bg-indigo-500 text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 text-indigo-100 p-10 mt-10 mb-10 text-center">{`This is the ${aboutPage.title}  Page`}</h1>
					<PostBody content={aboutPage.content} />
                    {console.log(aboutPage)}
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps() {
    const allPages = await getAllPages()
    return {
        props: { allPages },
    }
}