import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use('/', routes).listen(PORT, () => {
	console.log(`===> Server is running in http://localhost:${PORT}`);
});


const srvUri = process.env.DATABASE_SRV_URI;
if (srvUri) {
  mongoose.connect(srvUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).catch((err) => {
    console.log(err);
  });
  mongoose.set('useCreateIndex', true);

  const dataBase = mongoose.connection;
  dataBase.on('error', console.error.bind(console, 'connection error'));
  dataBase.once('open', () => {
    console.log(`===> DataBase Connected to: ${srvUri}`);
  });
} else {
  console.error(`===> DataBase Connection Error: ${srvUri}`);
}
