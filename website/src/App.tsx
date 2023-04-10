import React,{ useContext } from 'react';
import { RegisterForm } from 'Components/Authentication/Signup';
import { AccountPage } from './Components/AccountPage';
import { Home } from './Components/index'
import { AuthForm } from 'Components/Authentication/Signin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PostsPage } from './Components/PostsPage';
import Context, {myContext} from 'Components/Context';

function App(): JSX.Element {
  const ctx = useContext(myContext);
  console.log("current context is ",ctx);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PostsPage />} />{' '}
          {/* TODO: "/" should be routing to AuthPage */}
          <Route path="/account" element={<AccountPage />} />
          <Route path='/register' element={<RegisterForm />}></Route>
          <Route path='/login' element={<AuthForm />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
