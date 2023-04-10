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
