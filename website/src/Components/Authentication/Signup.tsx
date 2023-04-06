import React from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { MyField } from './MyField';
import { Root, Form as StyledForm, Card as MuiCard, StyledCardHeader, StyledTextField, StyledButton, StyledText } from './Styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface Values {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Props {
  onSubmit: (values: Values) => void;
}

const theme = createTheme(); // create a default theme object

export const RegisterForm: React.FC<Props> = ({ onSubmit}) => {

  return (
    <ThemeProvider theme={theme}>
      <Formik
        initialValues={{ username: '', email: '', password: '', confirmPassword: '' }}
        onSubmit={(values) => {
          onSubmit(values);
        }}
      >
        {({ values}) => (
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