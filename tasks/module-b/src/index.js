import express from "express";
import next from 'next';
import 'dotenv/config';
import path from "path";
import { fileURLToPath } from "url";
import { initDB } from "./lib/db.js";
import { DBError } from "./lib/errorClasses.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT;

const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev: dev, dir: __dirname});
const handle = app.getRequestHandler();

(async() => {
    try {
        await initDB();
        app.prepare().then(() => {
            const server = express();
            
            server.set('views', path.join(__dirname, 'views'));
            server.set('view engine', 'ejs');

            server.use(express.urlencoded({ extended: true }));
            server.use(express.static(path.join(__dirname, 'public')));
            server.use(express.json());

            server.all('{/*path}', (req, res) => {
                return handle(req, res);
            })

            server.listen(PORT, (err) => {
                if (err) throw err;
                console.log(`Server is listening on port:${PORT}`);
            });
        });
    } catch (error) {
        if (error instanceof DBError) {
            return console.log(error.message);
        }
    }
})();

