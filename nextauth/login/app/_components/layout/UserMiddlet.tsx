'use client';
import { SessionProvider } from 'next-auth/react';
import UserNav from './UserNav';

const UserMiddle = () => {
  return (
    <SessionProvider>
      <UserNav />
    </SessionProvider>
  );
};

export default UserMiddle;
