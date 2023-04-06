import express from 'express';
import session from 'express-session';
import passport from 'passport';
import localStrategy from 'passport-local/lib/strategy';
import bcrypt from 'bcrypt';
import firebase from 'firebase';
import hbs from 'express-handlebars';
import { getDatabase } from "firebase/database";
import dbinit from './firebase';

  const app = express();

  app.engine('hbs', hbs({ extname: '.hbs'}));
  app.set('view engine', 'hbs');
  app.use(express.static(__dirname + '/public'));

  app.use(session({
    secret: "AppSecret",
    resave: false,
    saveUninitialized: true
  }));

  app.use(express.urlencoded({ extended: false}));
  app.use(express.json());

  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser( (user,done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id,done) => {
    // Setting up the user model
  })





