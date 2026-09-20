import { login } from "./login";

export const saveToken = async (email: string, password: string) => {
  const response = await login(email, password);

  if(!response.ok){
    throw new Error('Invalid email or password.');
  }

  const data = await response.json();

  const token = data.token;
  
  localStorage.setItem('token', token);

  return token;
};
