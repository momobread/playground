'use client';
import CustomInput from '@/app/_components/CustomInput';
import LoginForm from '@/app/_components/LoginForm';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit } = useForm();
  return (
    <LoginForm
      render={
        <>
          <CustomInput
            register={register}
            id="id"
            placeholder="아이디를 입력해주세요"
            type="text"
          />
          <CustomInput
            register={register}
            id="password"
            placeholder="비밀번호를 입력해주세요"
            type="password"
          />
          <button type="submit" className="rounded-2xl bg-amber-200 px-[4rem] py-[1rem]">
            로그인하기
          </button>
        </>
      }
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;
