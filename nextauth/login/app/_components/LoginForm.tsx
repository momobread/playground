import { signIn } from 'next-auth/react';
import CustomInput from './CustomInput';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const LoginForm = ({ render, handleSubmit }) => {
  const [isError, setIsError] = useState<string>('');

  const router = useRouter();
  const onSubmitForm = async (data) => {
    const result = await signIn('credentials', {
      id: data?.id,
      password: data?.password,
      redirect: false,
    });
    if (result?.ok) router.push('/home');
    if (!result?.ok) {
      setIsError(result?.error);
    }
  };

  return (
    <form
      className="flex h-[60rem] w-[40rem] flex-col items-center justify-center gap-[2rem] rounded-2xl border border-gray-400"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      {render}
      {isError && <span>아이디와 비밀번호가 일치하지 않습니다</span>}
    </form>
  );
};

export default LoginForm;
