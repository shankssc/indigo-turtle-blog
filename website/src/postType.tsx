
export interface Post {
    author: string;
    title: string;
    content: string;
    // Current UTC Date
    date: Date;
    tags: string[];
}


// Example
// const post: Post = {
//     author: 'Justin',
//     title: "My title",
//     content: "This is my content",
//     date: new Date(),
//     tags: ["hello","test"]
// }
