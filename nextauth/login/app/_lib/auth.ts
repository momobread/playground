import axios from 'axios';
import CredentialsProvider from 'next-auth/providers/credentials';
import { redirect } from 'next/dist/server/api-utils';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

export const authConfig = {
  // const authConfig = {
  providers: [
    CredentialsProvider({
      name: 'login',
      async authorize(credentials) {
        const { id, password } = credentials;
        if (!id || !password) return;
        try {
          const { data } = await axios.post(
            `${SUPABASE_URL}/auth/v1/token?grant_type=password`,
            {
              email: id,
              password: password,
            },
            {
              headers: {
                apikey: SUPABASE_KEY,
                'Content-Type': 'application/json',
              },
            }
          );
          if (!data) throw new Error('아이디와 비밀번호가 일치하지 않습니다');

          const user = data;
          const result = {
            access_token: user?.access_token,
            refresh_token: user?.refresh_token,
            user: user?.user,
            name: '모모',
            picture: '',
            ok: true,
            status: 200,
          };
          return result;
        } catch (e) {
          const ErrorMesaage = e instanceof Error ? e.response?.data?.msg : '로그인패치 실';
          throw new Error(ErrorMesaage);
        }
      },
    }),
  ],
  callbacks: {
    // async redirect() {},
    async jwt({ token, user }) {
      // 리다이랙트 시 유저 토큰 소실 문제로 user가 있을때(딱 로그인 시점)에만 token에 값을 저장 아니면 undefined로 token을 갱신하게 되더라.
      if (user) {
        console.log('jwt 콜백실행중');
        token.email = user?.user?.email;
        token.name = user?.user?.id;
        token.access_token = user?.access_token;
        token.refresh_token = user?.refresh_token;
        console.log(token);
      }
      return token;
    },

    async session({ session, token }) {
      //jwt에서 user객체를 token안에 만들어놓으면 session.user = ...안해도 user객체가 알아서 들어감
      console.log('session콜백 시작');
      session.access_token = token.access_token;
      session.refresh_token = token.refresh_token;
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXT_SECRET,
};
