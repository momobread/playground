'use client';
import Image from 'next/image';
import Login from '@/app/_components/Login';
import Link from 'next/link';
import { useState } from 'react';

export default async function Home() {
  const [isClick, setIsClick] = useState<boolean>(false);
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src="/bg1.jpg" fill alt="main-page" className="-z-10" />

      <Link href="/login">
        <button className="rounded-2xl bg-gray-100 px-[5rem] py-[2rem] font-bold opacity-60">
          시작하기 지금은 테스트 중입니다
          <div className="text-white">
            안녕하세요
            <p>A</p>
            <p>B</p>
            <p>C</p>
            <p>F</p>
            <ul>
              <li>포도</li>
              <li>딸기</li>
              <li>사과</li>
              <li>바나나</li>
            </ul>
            <p>
              {isClick ? (
                <p>이 페이지는 클릭이 되었을때 페이지 입니다</p>
              ) : (
                <p>이 페이지는 클릭이 되지 않았을때 페이지 입니다</p>
              )}
            </p>
          </div>
        </button>
      </Link>
    </div>
  );
}
