import NextAuth from 'next-auth';
import { verifyPassword } from '../../../lib/auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// 12345678
const SAVED_HASED_PASSWORD =
  '$2a$12$DuLNF2YG49EI8ZNqU8ZEWOOTbYnh4VEbz3Jz7uRe0sS7gWUpI3VUu';

type Credentials = {
  email: string;
  password: string;
};

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    // signIn 요청
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials?: Credentials) {
        const isValid = await verifyPassword(
          credentials!.password,
          SAVED_HASED_PASSWORD
        );
        console.log('isValid:', isValid);

        if (!isValid) {
          return null;
        }

        // jwt로 encoding, 쿠키에 session 추가
        return { email: credentials!.email };
      },
    }),
  ],
});
