import * as passport from 'passport';
import { Strategy } from 'passport-strategy';
import { Strategy as LocalStrategy } from 'passport-local';
import { verifyUser, createUser } from './models/user';

class FirebaseStrategy extends Strategy {
  constructor(private options: FirebaseStrategyOptions) {
    super();
  }

  authenticate(req: any, options?: any): void {
    // Handle authentication and user creation here
  }
}

interface FirebaseStrategyOptions {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

const options: FirebaseStrategyOptions = {
  apiKey: "AIzaSyDY1Pbm1UNL7KYXdfQZi80KEsAQ0dV8sfk",
  authDomain: "indigo-turtle-blog.firebaseapp.com",
  databaseURL: "https://indigo-turtle-blog-default-rtdb.firebaseio.com",
  projectId: "indigo-turtle-blog",
  storageBucket: "indigo-turtle-blog.appspot.com",
  messagingSenderId: "264022206754",
  appId: "1:264022206754:web:d0d4a61b299c7025d5dd7b",
  measurementId: "G-75JTVYVM4Q",
};

const firebaseStrategy = new FirebaseStrategy(options);

/*
passport.use('firebase', firebaseStrategy);

passport.authenticate('firebase', async (user, done) => {
  const verifiedUser = await verifyUser(user.username, user.password);
  if (verifiedUser) {
    return done(null, verifiedUser);
  }
  const newUser = await createUser(user);
  if (newUser) {
    return done(null, newUser);
  }
  return done(new Error('Error authenticating user'));
});
*/

passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password',
    },
    async (username, password, done) => {
      const user = await verifyUser(username, password, done);
      if (user) {
        return done(null, user);
      }
      return done(null, false, { message: 'Incorrect username or password.' });
    },
  ),
);
export default passport;