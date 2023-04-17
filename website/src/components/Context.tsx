import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import Axios, { AxiosResponse } from 'axios';

// todo: context is working on accountpage but is not working in postspage, why is that the case.

export const myContext = createContext<Partial<User>>({});
export default function Context({
  children,
  user,
}: {
  children: ReactNode;
  user: User | undefined;
}): JSX.Element {
  // console.log('Context was run');
  // useEffect(() => {
  //   Axios.get('http://localhost:4000/user', { withCredentials: true })
  //     .then((res: AxiosResponse) => {
  //       setUser(res.data);
  //       console.log('current user is ', res.data);
  //     })
  //     .catch((err: Error) => {
  //       console.error(err);
  //     });
  // }, [user]);

  console.log(children);
  return <myContext.Provider value={user ?? {}}>{children}</myContext.Provider>;
}
