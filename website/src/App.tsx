import React, { useContext } from 'react';
import { RegisterForm } from 'components/Authentication/Signup';
import { AccountPage } from './components/AccountPage';
import { AuthForm } from 'components/Authentication/Signin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PostsPage } from './components/PostsPage';
import Context, { myContext } from 'components/Context';
import CreatePost from 'components/CreatePost';

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<RegisterForm />} />{' '}
          {/* TODO: "/" should be routing to Signin or Signup */}
          <Route path="/account" element={<AccountPage />} />
          <Route path="/postspage" element={<PostsPage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
