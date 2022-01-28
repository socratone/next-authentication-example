import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <p>
        <Link href="/signup">회원가입</Link>
      </p>
      <p>
        <Link href="/signin">로그인</Link>
      </p>
    </div>
  );
};

export default Home;
