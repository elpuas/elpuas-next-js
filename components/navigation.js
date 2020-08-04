import Link from 'next/link'

function Navigation() {
  return (
    <ul className="flex">
      <li className="mr-6">
        <Link href="/">
          <a className="text-lg">Home</a>
        </Link>
      </li>
	  <li className="mr-6">
        <Link href="/about">
          <a className="text-lg">Me</a>
        </Link>
      </li>
	  <li className="mr-6">
        <Link href="/what-i-do">
          <a className="text-lg">What I Do</a>
        </Link>
      </li>
      <li className="mr-6">
        <Link href="/posts">
		<a className="text-lg">Blog</a>
        </Link>
      </li>
    </ul>
  )
}

export default Navigation