import styled from '@emotion/styled';
import axios from 'axios';
import type { NextPage } from 'next';
import { useState } from 'react';

const Signup: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const result = await createUser(email, password);
    console.log('result:', result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '10px' }}>
        <TextInput
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <TextInput
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <Button type="submit">회원가입</Button>
      </div>
    </form>
  );
};

const createUser = async (email: string, password: string) => {
  try {
    const response = await axios.post('/api/auth/signup/', { email, password });
    return response;
  } catch (error) {
    return error;
  }
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

export default Signup;
