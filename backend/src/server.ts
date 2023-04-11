import express, {Request,Response} from 'express';
import session, { SessionOptions } from 'express-session';
import exphbs from 'express-handlebars';
import passport from 'passport';
import { getDatabase, ref, set } from "firebase/database";
import { User,createUser,getUserById, getUserByUsername } from './models/user';
import {Post,createPost, deletePost, getPost, isUserAuthorized, updatePostContent, getAllPosts} from './models/post';
import passportlocal from 'passport-local';
import * as bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();
app.use(express.json());
app.use(cors({origin: "http://localhost:3000", credentials: true}))

const sessionOptions: SessionOptions = {
  secret: 'BlogSecret',
  resave: false,
  saveUninitialized: false
};

const LocalStrategy = passportlocal.Strategy;

app.use(session(sessionOptions));

app.use(cookieParser());

//Setting up Passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(async (username: string, password: string, done: any) => {
  const user = await getUserByUsername(username);
  
  if (!user) {
    return done(null, false, { message: 'Invalid username' });
  }

  try {
    const matchRes = await bcrypt.compare(password, user.password);

    if (matchRes) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Invalid password' });
    }
  } catch (error) {
    return done(error);
  }
}));

  passport.serializeUser((user:User, done) => {
    done(null, user);
  });
  
  passport.deserializeUser(async (uid:string,done) => {
    const user = await getUserById(uid);
  
    if (user) {
      return done(null,user);
    }
  
    return done(null,{message: 'User not found'});
  });

//Routes
// POST API endpoint to add a new user
app.get('/', (req, res) => {
  res.send('Welcome');
});

app.post('/register', async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req?.body;

    if (!username || !password || typeof username !== "string" || typeof password !== "string") {
      res.send("Please enter correct value types");
      return;
    }

    const user = await getUserByUsername(username);

    if (user) {
      res.status(409).json({message: 'This username is already taken'});
      return;
    } else {
      // Create a new user object
      const newUser = { username, email, password };

      // Add the new user to the database
      await createUser(newUser);
      res.status(201).json({ message: 'User created successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create user' });
  }
});


app.post('/login', passport.authenticate("local"), (req: Request,res: Response) => {
    res.send("Successfully authenticated");
});

app.get('/user', (req: Request, res: Response) => {
  res.send(req.user);
})

app.get('/logout', (req: Request, res: Response) => {
  req.logout(() => {
    res.send('success');
  });
});

app.post('/createposts', async (req: Request, res: Response) => {
  try {
    const {author, title, content, tags} = req?.body;

    // Create a new user object
    const newPost = { author, title, content, tags };

    
    // Add the new user to the database
    await createPost(newPost);
    res.status(201).json({ message: 'Post creation successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Post creation failed' });
  }
  });

  app.delete('/posts/:postId', async (req, res) => {
    const postId = req.params.postId;
    try {
      await deletePost(postId);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to delete post' });
    }
  });

  app.get('/posts', (req, res) => {
    getAllPosts((posts) => {
      res.send(posts);
    });
  });

  app.listen(4000, () => {
    console.log('Server started successfully');
  });

