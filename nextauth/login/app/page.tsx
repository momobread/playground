import Image from 'next/image';
import Login from '@/app/_components/Login';
import Link from 'next/link';

export default async function Home() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src="/bg1.jpg" fill alt="main-page" className="-z-10" />

      <Link href="/login">
        <button className="rounded-2xl bg-gray-100 px-[5rem] py-[2rem] font-bold opacity-60">
          시작하기
        </button>
      </Link>
    </div>
  );
}
