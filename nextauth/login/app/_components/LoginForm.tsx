import { signIn } from 'next-auth/react';
import CustomInput from './CustomInput';

const LoginForm = ({ render, handleSubmit }) => {
  const onSubmitForm = async (data) => {
    console.log(data);
    await signIn('credentials', { id: data.id, password: data.password });
  };

  return (
    <form
      className="flex h-[60rem] w-[40rem] flex-col items-center justify-center gap-[2rem] rounded-2xl border border-gray-400"
      onSubmit={handleSubmit(onSubmitForm)}
    >
      {render}
    </form>
  );
};

export default LoginForm;
