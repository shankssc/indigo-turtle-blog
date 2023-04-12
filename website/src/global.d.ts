interface Post {
  author: string;
  uid: string;
  title: string;
  content: string;
  date: {
    year: string;
    month: string;
    day: string;
    hr: string;
    min: string;
    sec: string;
  };
  tags: string[];
}

interface DateTime {
  year: string;
  month: string;
  day: string;
  hr: string;
  min: string;
  sec: string;
}

declare module '@mui/material/styles' {
  interface Theme {
    palette: {
      primary: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
      };
      secondary: {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
      };
      background: {
        paper: string;
      };
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
