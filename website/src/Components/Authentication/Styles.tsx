import styled from '@emotion/styled';
import { Card as MuiCard, CardHeader, TextField, Button, Link } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { Form as FormikForm } from 'formik';

interface StyledCardProps {
  theme: Theme;
}

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
`;

export const StyledCardHeader = styled(CardHeader)({
  textAlign: 'center', // Align text to center
  margin: '20px 0', // Add margin to top and bottom
  color: '#FFFFFF', // Change text color
});

export const StyledTextField = styled(TextField)<{ theme: Theme }> `
  && {
    margin-bottom: ${({ theme }) => theme.spacing(2)};
    background-color: #18B467;
    border-radius: 15px;
    width: 300px;
    outline: none !important;
  }
`;

export const StyledButton = styled(Button)<{ theme: Theme }> `
  && {
    margin-top: ${({ theme }) => theme.spacing(3)};
    margin-bottom: ${({ theme }) => theme.spacing(3)};
    background-color: #1E1E1E;
    width: 300px;
    border-radius: 15px;
    font-size: 20px;
    font-color: FFFFFF
  }
`;


export const Card = styled(MuiCard)`
  border-radius: 40px;
  background-color: #39E399;
  padding: 3px;
  width: 400px;
`;

export const StyledText = styled(Link)<{ theme: Theme }>`
&& {
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing(3)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  color: #FFFFFF;
  font-size: 15px;
}
`;