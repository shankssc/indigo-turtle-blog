
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
//     author: 'justin',
//     title: "My title",
//     content: "Check",
//     date: new Date(),
//     tags: ["hello","test"]

// }
