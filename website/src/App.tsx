import React from 'react';
import { AccountPage } from './components/AccountPage';
import { Home } from './components/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PostsPage } from 'components/PostsPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PostsPage />} />{' '}
          {/* TODO: "/" should be routing to AuthPage */}
          <Route path="/account" element={<AccountPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
