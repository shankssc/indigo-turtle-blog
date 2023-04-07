import React from 'react';
import { RegisterForm } from 'Components/Authentication/Signup';
import { AuthForm } from 'Components/Authentication/Signin';
function App(): JSX.Element {
  return (
    <div className="App" style={{ backgroundColor: '#6500B0' }}>
      <AuthForm onSubmit={() => {}}/>
    </div>
  );
}

export default App;
