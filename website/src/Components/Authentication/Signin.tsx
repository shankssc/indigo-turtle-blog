import React from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { MyField } from './MyField';
import { Root, Form as StyledForm, Card as MuiCard, StyledCardHeader, StyledTextField, StyledButton, StyledText } from './Styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

interface Values {
    username: string;
    password: string;
  }

  interface Props {
    onSubmit: (values: Values) => void;
}

const theme = createTheme();

export const AuthForm: React.FC<Props> = ({ onSubmit}) => {
    return (
        <ThemeProvider theme={theme}>
          <Formik
            initialValues={{ username: '', password: ''}}
            onSubmit={(values) => {
              onSubmit(values);
            }}
          >
            {({ values}) => (
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

}