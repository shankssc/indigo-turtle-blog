import React from 'react';
import { Formik, Form, Field } from 'formik';
import { MyField } from './MyField';
import { Root, Form as StyledForm, Card as MuiCard, StyledCardHeader, StyledTextField, StyledButton, StyledText } from './Styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios, {AxiosResponse} from 'axios';

interface Values {
  username: string;
  password: string;
}

const theme = createTheme(); // create a default theme object

export const AuthForm: React.FC = (): JSX.Element => {

  const instance = axios.create({
  baseURL: 'http://localhost:4000',
  withCredentials: true,
});

const onSubmit = async (values: Values): Promise<void> => {
  try {
    const response = await instance.post("/login", {
      username: values.username,
      password: values.password,
    });
    console.log(response.data);
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
              <StyledText theme={theme}>Not a User? Sign Up</StyledText>
              <StyledForm>
                <Form>
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
                      name="password"
                      placeholder="password"
                      component={MyField}
                      as={StyledTextField}
                    />
                  </div>

                  <div>
                    <StyledButton theme={theme} type="submit">Log In</StyledButton>
                  </div>

                </Form>
              </StyledForm>
            </MuiCard>

          </Root>
        )}
      </Formik>
    </ThemeProvider>
  );
};