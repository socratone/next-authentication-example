import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'PATCH') return;

  const session = getSession({ req });

  // api protect
  if (!session) {
    res.status(401).json({ message: '인증이 필요합니다.' });
  }

  res.status(200).json({ message: '비밀번호를 변경했습니다.' });
}
