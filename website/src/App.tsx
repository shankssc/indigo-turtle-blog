import React from 'react';
import { RegisterForm } from 'Components/Authentication/Signup';
import { AuthForm } from 'Components/Authentication/Signin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Context from 'Components/Context';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Context>
      <Routes>
      <Route path='/register' element={<RegisterForm />}></Route>
      <Route path='/login' element={<AuthForm />}></Route>
      </Routes>
      </Context>
    </BrowserRouter>
  );
}

export default App;
