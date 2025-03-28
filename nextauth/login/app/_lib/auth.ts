import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
export const authConfig = {
  // const authConfig = {
  providers: [
    CredentialsProvider({
      name: 'login',
      async authorize(credentials) {
        const { id, password } = credentials;
        if (!id || !password) return;
          //supabase code 작성
        return {};
      },
    }),
  ],
  // pages: {
  //   signIn: '/',
  // },
};
