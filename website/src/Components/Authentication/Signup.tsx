import React from 'react';
import { Formik, Form, Field } from 'formik';
import { MyField } from './MyField';
import { Root, Form as StyledForm, Card as MuiCard, StyledCardHeader, StyledTextField, StyledButton, StyledText } from './Styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

interface Values {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const theme = createTheme(); // create a default theme object

export const RegisterForm: React.FC = (): JSX.Element => {

  const onSubmit = async (values: Values): Promise<void> => {
    try {
      const response = await axios.post("http://localhost:3000/register", {
        username: values.username,
        email: values.email,
        password: values.password,
        withCredentials: true
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Formik
        initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
        onSubmit={async (values) => {
          await onSubmit(values);
        }}
      >
        {({ values }) => (
          <Root>
            <MuiCard theme={theme}>
              <StyledCardHeader title="Sign Up" />
              <StyledText theme={theme}>Already a User? Sign In</StyledText>
              <StyledForm>
                <div>
                  <Field
                    name="username"
                    placeholder="username"
                    component={MyField}
                    as={StyledTextField}
                  />
                </div>

                <div>
                  <Field
                    name="email"
                    placeholder="email"
                    component={MyField}
                    as={StyledTextField}
                  />
                </div>

                <div>
                  <Field
                    name="password"
                    placeholder="password"
                    component={MyField}
                    as={StyledTextField}
                  />
                </div>

                <div>
                  <Field
                    name="confirmPassword"
                    placeholder="confirmPassword"
                    component={MyField}
                    as={StyledTextField}
                  />
                </div>

                <div>
                  <StyledButton theme={theme} type="submit">Register</StyledButton>
                </div>

              </StyledForm>
            </MuiCard>
          </Root>
        )}
      </Formik>
    </ThemeProvider>
  );
};