import styled from '@emotion/styled';
import type { NextPage } from 'next';
import { useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/client';

const Signin: NextPage = () => {
  const [session, loading] = useSession();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async () => {
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    console.log('result:', result);
  };

  const handleSignout = async () => {
    signOut();
  };

  return (
    <section>
      <h1>Signin</h1>
      <p>비밀번호 12345678을 넣으면 로그인 됩니다.</p>
      <div style={{ marginBottom: '10px' }}>
        <TextInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="email"
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <TextInput
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="password"
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <Button onClick={handleSignin}>회원가입</Button>
      </div>

      {session && !loading && (
        <>
          <div style={{ marginBottom: '10px' }}>{session.user!.email}</div>
          <div>
            <Button onClick={handleSignout} style={{ background: 'tomato' }}>
              로그아웃
            </Button>
          </div>
        </>
      )}
    </section>
  );
};

const TextInput = styled.input`
  border: 1px solid gainsboro;
  padding: 10px;
  border-radius: 3px;
`;

const Button = styled.button`
  background: dodgerblue;
  color: white;
  cursor: pointer;
  padding: 10px;
  border: 0;
  border-radius: 10px;
`;

export default Signin;
