import React from 'react';
import { Formik, Form, Field } from 'formik';
import { MyField } from './MyField';
import {
  Root,
  Form as StyledForm,
  Card as MuiCard,
  StyledCardHeader,
  StyledTextField,
  StyledButton,
  StyledText,
} from './Styles';
import { createTheme, ThemeProvider, Button } from '@mui/material';
import axios, { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

interface Values {
  username: string;
  password: string;
}

const theme = createTheme(); // create a default theme object

export const AuthForm: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const instance = axios.create({
    baseURL: 'http://localhost:4000',
    withCredentials: true,
  });

  const onSubmit = async (values: Values): Promise<void> => {
    try {
      const response = await instance.post('/login', {
        username: values.username,
        password: values.password,
      });
      console.log('Got response:', response.data);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values) => {
          await onSubmit(values);
        }}
      >
        {({ values }) => (
          <Root>
            <MuiCard theme={theme}>
              <StyledCardHeader title="Sign In" />
              <StyledText theme={theme}>
                Not a User?{' '}
                <Button
                  onClick={(event) => {
                    event.preventDefault();
                    navigate('/register');
                  }}
                >
                  Sign Up
                </Button>
              </StyledText>
              <StyledForm>
                <div>
                  <Field
                    name="username"
                    placeholder="username"
                    type="text"
                    component={MyField}
                    as={StyledTextField}
                  />
                </div>

                <div>
                  <Field
                    name="password"
                    placeholder="password"
                    type="password"
                    component={MyField}
                    as={StyledTextField}
                  />
                </div>

                <div>
                  <StyledButton theme={theme} type="submit">
                    Log In
                  </StyledButton>
                </div>
              </StyledForm>
            </MuiCard>
          </Root>
        )}
      </Formik>
    </ThemeProvider>
  );
};
