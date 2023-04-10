import React,{ useContext } from 'react';
import { RegisterForm } from 'Components/Authentication/Signup';
import { AuthForm } from 'Components/Authentication/Signin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Context, {myContext} from 'Components/Context';

function App(): JSX.Element {
  const ctx = useContext(myContext);
  console.log("current context is ",ctx);

  return (
    <BrowserRouter>
      
      <Routes>
      <Route path='/register' element={<RegisterForm />}></Route>
      <Route path='/login' element={<AuthForm />}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
