import express, {Request,Response} from 'express';
import session, { SessionOptions } from 'express-session';
import exphbs from 'express-handlebars';
import passport from 'passport';
import { getDatabase, ref, set } from "firebase/database";
import { User, verifyUser,createUser,getUserById, getUserByUsername } from './models/user';
import { Strategy as LocalStrategy } from 'passport-local';
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

app.use(session(sessionOptions));

app.use(cookieParser());

//Setting up Passport
app.use(passport.initialize());
app.use(passport.session());

//Routes
// POST API endpoint to add a new user
app.get('/', (req, res) => {
  res.send('Welcome');
});

app.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Create a new user object
    const newUser = { username, email, password };

    // Add the new user to the database
    await createUser(newUser);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create user' });
  }
});

app.listen(4000, () => {
  console.log('Server started successfully');
});

/*
const app = express();
//const db = getDatabase(dbinit);

// Configure express-session
const sessionOptions: SessionOptions = {
    secret: 'BlogSecret',
    resave: false,
    saveUninitialized: false
};

app.use(session(sessionOptions));

const hbs = exphbs.create({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/'
});

app.engine('hbs', hbs.engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(session(sessionOptions));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//Setting up Passport
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser(async (uid:string,done) => {
  const user = await getUserById(uid);

  if (user) {
    return done(null,user);
  }

  return done(null,{message: 'User not found'});
});


passport.use(new LocalStrategy( async (username:string,password:string,done) => {
  const user = await getUserByUsername(username);

  if (!user) {
    return done(null,{message:'Invalid username'});
  }

  try {
    const matchRes = await bcrypt.compare(password, user.password);

    if (matchRes) {
      return done(null, user);
    } else {
      return done(null, {message: 'Invalid password'});
    }
  } catch (error) {
    return done(error);
  }
  }
  ))
*/

/*    
// Define routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});
*/

/*
// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});
*/


