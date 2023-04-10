import React from "react";
import { FieldProps } from "formik";
import { TextField,TextFieldProps } from '@mui/material';
import { StyledTextField } from "./Styles";
import { createTheme } from '@mui/material/styles';

const theme = createTheme();

export const MyField: React.FC<FieldProps & TextFieldProps> = ({placeholder, field, label, type}) => {
    return <StyledTextField theme={theme} variant="outlined" label={label} placeholder={placeholder} type={type} {...field}/>
};
