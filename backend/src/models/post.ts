import { getDatabase, ref, push,set,get, query, orderByChild, limitToFirst, equalTo} from "firebase/database";
import * as bcrypt from 'bcrypt';
import {auth as authInstance, db as database} from '../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {dbapp} from '../firebase';

export interface Post {
    uid?: string;
    username: string;
    email: string;
    password: string;
}