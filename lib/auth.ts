import { compare, hash } from 'bcryptjs';

export const hashPassword = async (password: string) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

export const verifyPassword = async (
  password: string,
  hashedPassword: string
) => {
  // DB에 있는 hash된 비밀번호를 비교한다.
  const isValid = await compare(password, hashedPassword);
  return isValid;
};
