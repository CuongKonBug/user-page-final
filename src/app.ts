import express from "express";
// import compression from 'compression'  // compresses requests
// import session from 'express-session'
// import bodyParser from 'body-parser'
// import lusca from 'lusca'
// import flash from 'express-flash'
import path from "path";
// import redis from 'redis'
// import connectRedis from 'connect-redis'
// import { REDIS_HOST, REDIS_PORT, SESSION_SECRET } from './util/secrets'
// import { createConnection, getConnection, getConnectionOptions } from 'typeorm'
// import { connectionConfig } from './configs'

// Controllers (route handlers)
import * as homeController from "./controllers";

// Create Express server
const app = express();

// Configure Redis client

// Create database connection

// Express configuration
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
// app.use(compression())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))

// app.use(flash());
// app.use(lusca.xframe('SAMEORIGIN'))
// app.use(lusca.xssProtection(true))

app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

/**
 * Primary app routes.
 */
app.get("/", homeController.index);
app.get("/home", homeController.playHome);
app.get("/profile", homeController.profile);
app.get("/login", homeController.login);
app.get("/signup", homeController.signup);
app.get("/create-room", homeController.createRoom);
app.get("/list-room", homeController.listRoom);

// app.get('/contact', contactController.getContact)
// app.post('/contact', contactController.postContact)
// app.get('/users', userController.users)

// /**
//  * API examples routes.
//  */
// app.get('/api', apiController.getApi)
app.listen(3000, () => {
  console.log(`Example app listening on port `);
});
export default app;
