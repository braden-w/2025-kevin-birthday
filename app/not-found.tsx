import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-400 to-pink-500 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Oops! Looks like Unc Kevin misplaced this page...</p>
        <Link href="/" className="bg-yellow-400 hover:bg-yellow-500 text-purple-600 font-bold py-2 px-4 rounded">
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

