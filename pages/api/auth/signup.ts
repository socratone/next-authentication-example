import type { NextApiRequest, NextApiResponse } from 'next';
import { hashPassword } from '../../../lib/auth';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (!email.includes('@')) {
      res.status(422).json({ message: '이메일 형식이 아닙니다.' });
      return;
    }

    const hasedPassword = await hashPassword(password);

    // DB에 저장
    console.log('savded email:', email);
    console.log('savded password:', hasedPassword);

    res.status(201).json({ message: '사용자를 생성했습니다.' });
  }
}
