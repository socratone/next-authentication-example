import type { GetServerSidePropsContext, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <h1>홈페이지</h1>
      <p>
        <Link href="/signup">회원가입</Link>
      </p>
      <p>
        <Link href="/signin">로그인</Link>
      </p>
    </div>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
      },
    };
  }

  return {
    props: session,
  };
};

export default Home;
