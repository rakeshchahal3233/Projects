import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRouter from './routers/posts.js'

const app = express();


app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/path',postRouter)


const CONNECTION_URL='mongodb+srv://rakeshChahal:KAAFSWrNxK2I2O3K@cluster0.jb0qmhe.mongodb.net/TO-DO';

const PORT = process.env.PORT || 4000

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

  .then(() => app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); }))
  .catch((err) => { console.log(err.message); });