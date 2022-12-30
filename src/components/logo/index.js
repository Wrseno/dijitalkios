import Link from 'next/link'

const Logo = () => {
  return (
    <div className="px-4 flex items-center">
      <Link
        href="/"
        className="font-bold text-2xl block py-6 relative font-sans"
      >
        dijital<span className="text-sky-500">kios</span>
      </Link>
    </div>
  )
}

export default Logo
