import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostCard({
  title,
  coverImage,
  excerpt
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        </div>
      </div>
    </>
  )
}
