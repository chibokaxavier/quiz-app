import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className=' flex items-center justify-center mt-44 text-white'>
      <Link href='/quiz'>
        <button className='text-white p-2 bg-blue-500 rounded md'>Start Quiz</button>
      </Link>
    </main>
  )
}
