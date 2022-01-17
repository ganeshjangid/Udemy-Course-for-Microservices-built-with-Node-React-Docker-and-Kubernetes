import express from "express";
import { json } from "body-parser";

import { currentUserRouter } from "./routes/current-user";
import { signInRouter } from "./routes/signIn";
import { signOutRouter } from "./routes/signOut";
import { signUpRouter } from "./routes/signUp";
import { errorHandle } from "./middlewares/error-handler";


const app = express();
app.use(json());

app.use('/api/users', [currentUserRouter, signInRouter, signOutRouter, signUpRouter]);

app.use(errorHandle);

app.listen(3000, () => {
  console.log("Listening on port 3000!!!!!1111");
});
