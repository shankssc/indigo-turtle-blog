import React, { useContext } from 'react';
import { RegisterForm } from 'components/Authentication/Signup';
import { AccountPage } from './components/AccountPage';
import { AuthForm } from 'components/Authentication/Signin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PostsPage } from './components/PostsPage';
import Context, { myContext } from 'components/Context';

function App(): JSX.Element {
  const ctx = useContext(myContext);
  console.log("Length of the context is ", Object.keys(ctx).length)
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          {/* TODO: "/" should be routing to Signin or Signup */}
          {
            Object.keys(ctx).length !== 0 ? (
              <>
              <Route path="/account" element={<AccountPage />} />
              <Route path="/postspage" element={<PostsPage />} />
              </>
            ) : (
              <>
              <Route path="/login" element={<AuthForm />} />
              </>
            )
          }
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
