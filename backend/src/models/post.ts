import { getDatabase, ref, push,set,get, update, remove, query, limitToFirst, equalTo} from "firebase/database";
import * as bcrypt from 'bcrypt';
import {auth as authInstance, db as database} from '../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {dbapp} from '../firebase';

export interface Post {
    uid?: string;
    author: string;
    title: string;
    content: string;
    date?: {
        year: string;
        month: string;
        day: string;
        hr: string;
        min: string;
        sec: string;
    };
    tags: string[];
}

export interface DateTime {
    year: string;
    month: string;
    day: string;
    hr: string;
    min: string;
    sec: string;
  }

//creating a post
export const createPost = async (post: Post): Promise<void> => {
    const db = getDatabase(dbapp);
    const postRef = ref(db, 'posts');

    const newPostRef = push(postRef);

    // Get the current datetime
    const now = new Date();
    const date: DateTime = {
    year: now.getFullYear().toString(),
    month: (now.getMonth() + 1).toString().padStart(2, '0'),
    day: now.getDate().toString().padStart(2, '0'),
    hr: now.getHours().toString().padStart(2, '0'),
    min: now.getMinutes().toString().padStart(2, '0'),
    sec: now.getSeconds().toString().padStart(2, '0'),
    };

    const newPost = {
        uid: newPostRef.key,
        author: post.author,
        title: post.title,
        content: post.content,
        date,
        tags: post.tags,
    };

    await update(newPostRef, newPost);
}

export const deletePost = async (uid: string): Promise<void> => {
    const db = getDatabase(dbapp);
    const postRef = ref(db, `posts/${uid}`);
    console.log(postRef);
    await remove(postRef);
  }