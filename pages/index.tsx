import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Button onClick={() => router.push('/signup')}>회원가입</Button>
    </div>
  );
};

const Button = styled.button`
  background: dodgerblue;
  color: white;
  cursor: pointer;
  padding: 10px;
  border: 0;
  border-radius: 10px;
`;

export default Home;
