
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


// Example of how to implement interface
// const post: Post = {
//     author: 'Justin',
//     title: "My title",
//     content: "This is my content",
//     date: new Date(),
//     tags: ["hello","test"]
// }
