import React from 'react';
import { RegisterForm } from 'Components/Authentication/Signup';
import { AuthForm } from 'Components/Authentication/Signin';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App(): JSX.Element {
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
