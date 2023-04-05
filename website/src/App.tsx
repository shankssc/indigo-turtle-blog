import React from 'react';
import { RegisterForm } from 'Components/Authentication/Signup';

function App(): JSX.Element {
  return (
    <div className="App" style={{ backgroundColor: '#6500B0' }}>
      <RegisterForm onSubmit={() => {}}/>
    </div>
  );
}

export default App;
