import * as express from 'express';
import session, { SessionOptions } from 'express-session';
import exphbs from 'express-handlebars';
//import * as passport from 'passport';
import passport from './passport';
import dbinit from './firebase';
import * as bcrypt from 'bcrypt';
import { getDatabase, ref, set } from "firebase/database";
import path from 'path';

const app = express();
const db = getDatabase(dbinit);

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


app.use(passport.initialize());
app.use(passport.session());

// Define routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Home' });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});



