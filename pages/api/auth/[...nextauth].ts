import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { verifyPassword } from '../../../lib/auth';

// 12345678
const SAVED_HASED_PASSWORD =
  '$2a$12$DuLNF2YG49EI8ZNqU8ZEWOOTbYnh4VEbz3Jz7uRe0sS7gWUpI3VUu';

type Credetials = {
  email: string;
  password: string;
};

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    // signIn 요청
    Providers.Credentials({
      async authorize(credentials: Credetials) {
        const isValid = await verifyPassword(
          credentials.password,
          SAVED_HASED_PASSWORD
        );
        console.log('isValid:', isValid);

        if (!isValid) {
          throw new Error('비밀번호가 틀렸습니다.');
        }

        // jwt로 encoding, 쿠키에 session 추가
        return { email: credentials.email };
      },
    }),
  ],
});
