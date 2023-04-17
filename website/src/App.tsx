import React, { useContext, useState } from 'react';
import { RegisterForm } from 'components/Authentication/Signup';
import { AccountPage } from 'components/AccountPage';
import { AuthForm } from 'components/Authentication/Signin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PostsPage } from 'components/PostsPage';
import Context, { myContext } from 'components/Context';
import { CreatePost } from 'components/createPost';
import { ThemeProvider, createTheme } from '@mui/material';

const colorTheme = createTheme({
  palette: {
    primary: {
      light: '#7801b7',
      main: '#6400b0',
      dark: '#3900a6',
      contrastText: '#000000',
    },
    secondary: {
      light: '#5cc00c',
      main: '#4cb000',
      dark: '#339c00',
      contrastText: '#ffffff',
    },
    background: {
      paper: '#4cb000',
    },
  },
});

function App(): JSX.Element {
  const ctx = useContext(myContext);
  const [user, setUser] = useState<User>();
  console.log('current context is ', ctx);
  return (
    <div className="App">
      <ThemeProvider theme={colorTheme}>
        <Context user={user}>
          <Router>
            <Routes>
              <Route path="/" element={<RegisterForm setUser={setUser} />} />{' '}
              <Route path="/account" element={<AccountPage />} />
              <Route path="/postspage" element={<PostsPage />} />
              <Route
                path="/register"
                element={<RegisterForm setUser={setUser} />}
              ></Route>
              <Route
                path="/login"
                element={<AuthForm setUser={setUser} />}
              ></Route>
              <Route path="/createpost" element={<CreatePost />} />
            </Routes>
          </Router>
        </Context>
      </ThemeProvider>
    </div>
  );
}

export default App;
