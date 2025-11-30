import express from 'express';
import session from 'express-session';
import expressLayouts from 'express-ejs-layouts';
import path from 'path';
import { fileURLToPath } from 'url';
import 'dotenv/config';
import authRoutes from './routes/auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json);
app.use(expressLayouts);
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.ExpressSecret || "secret",
  resave: false,
  saveUninitialized: false
}));

app.use('/api/login', authRoutes);

app.get('/', (_req, res) => {
  return res.render('index');
})

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
})
