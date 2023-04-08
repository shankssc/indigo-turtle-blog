import { getDatabase, ref, push,set,get, query, orderByChild, limitToFirst, equalTo} from "firebase/database";
import * as bcrypt from 'bcrypt';
import {auth as authInstance, db as database} from '../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {dbapp} from '../firebase';

export interface User {
    uid?: string;
    username: string;
    email: string;
    password: string;
}

//creating a user
export const createUser = async (user: User): Promise<void> => {
    const db = getDatabase(dbapp);
    //const userRef = ref(db, 'users/' + user.email.replace('.', ','));
    const userRef = ref(db, 'users');
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const newUserRef = push(userRef);
    
    const newUser = {
    uid: newUserRef.key,
    username: user.username,
    email: user.email,
    password: hashedPassword
    };
  
    await set(userRef, newUser);
 
}


//Retrieve a user by their id
export const getUserById = async (uid: string): Promise<User | null> => {
  const db = getDatabase(dbapp);
  const userRef = ref(db, `users/${uid}`);
  const snapshot = await get(userRef);
  const userData = snapshot.val();
  if (userData) {
    const user: User = { uid, ...userData };
    return user;
  }
  return null;
}

// Retrieve user by email
export const getUserByEmail = async (email: string): Promise<User | null> => {
    const db = getDatabase()
    //const db = database;
    const usersRef = ref(db, 'users');
    const q = query(usersRef, orderByChild('email'), equalTo(email), limitToFirst(1));
    const querySnapshot = await get(q);
    const userObj = querySnapshot.val();
    if (!userObj) {
      return null;
    }
    const uid = Object.keys(userObj)[0];
    const user = userObj[uid];
    return { uid, ...user };
};

//Retrieve user by username
export const getUserByUsername = async (username: string): Promise<User | null> => {
  const db = getDatabase(dbapp);
  //const db = database;
  const usersRef = ref(db, 'users');
  const q = query(usersRef, orderByChild('username'), equalTo(username), limitToFirst(1));
  const querySnapshot = await get(q);
  const userObj = querySnapshot.val();
  /*
  if (!userObj) {
    return null;
  }
  const uid = Object.keys(userObj)[0];
  const user = userObj[uid];
  return { uid, ...user };
  */
  if (userObj && typeof userObj === 'object') {
    //const userData = Object.values(userObj)[0];
    const fetched_id = Object.keys(userObj)[0];
    const userData = userObj[fetched_id];
    const user: User = { uid:fetched_id, ...userData}

    return user;
  }

  return null;
};


export const verifyUser = async (username: string, password: string, done: any): Promise<User | null> => {
  const auth = authInstance;

  try {
    const { user: firebaseUser } = await signInWithEmailAndPassword(auth, username, password);
    if (!firebaseUser) {
      return done(null, false, { message: 'Invalid credentials' });
    }
    const user = await getUserByUsername(username);
    if (!user || user.password !== password) {
      return done(null, false, { message: 'Invalid credentials' });
    }
    //return done(null, user);
    if(user.email && user.password) {
      
      /*return done(null, {
        username: user.username,
        email: user.email,
        password: user.password,
      });*/
      return done(null, user);
    } else {
      return done(null, false, { message: 'Invalid user' });
    }
  } catch (error) {
    console.error(error);
    return done(error);
  }
}
