import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function PostCard({
  title,
  coverImage,
  excerpt,
  slug
}) {
  return (
    <>
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Link>
      </h1>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block mb-6">
          <div dangerouslySetInnerHTML={{ __html: excerpt.replace(/<a\b[^>]*>(.*?)<\/a>/i, "...") }} />
        </div>
      </div>
    </>
  )
}
