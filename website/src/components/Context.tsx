import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';
import Axios, { AxiosResponse } from 'axios';

export const myContext = createContext<Partial<User>>({});
export default function Context(props: PropsWithChildren<any>): JSX.Element {
  const [user, setUser] = useState<User>();
  console.log('Context was run');
  useEffect(() => {
    Axios.get('http://localhost:4000/user', { withCredentials: true })
      .then((res: AxiosResponse) => {
        setUser(res.data);
        console.log('current user is ', res.data);
      })
      .catch((err: Error) => {
        console.error(err);
      });
  }, [user]);

  return (
    <myContext.Provider value={user ?? {}}>{props.children}</myContext.Provider>
  );
}
