interface Post {
  author: string;
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
