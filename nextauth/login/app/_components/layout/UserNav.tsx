import { authConfig } from '@/app/_lib/auth';
import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';

const UserNav = () => {
  const session = useSession();
  console.log(session);

  return (
    <ul className="flex justify-end gap-[1rem] px-[1rem]">
      <li>로그아웃</li>
      <li>유저네임 : xxx</li>
      <li>프로필</li>
    </ul>
  );
};

export default UserNav;
