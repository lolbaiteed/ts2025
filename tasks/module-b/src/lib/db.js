import mysql from 'mysql2/promise';
import path from 'path';
import fs from 'fs';
import { DBError } from './errorClasses.js';

const DB_USER = process.env.DB_USER;
const DB_USER_PASSWORD = process.env.DB_USER_PASSWORD;
const CSV_PATH = process.env.CSV_PATH;
const LOCAL_CSV_PATH = process.env.LOCAL_CSV_PATH;

const db = mysql.createPool({
  port: 3306,
  user: DB_USER,
  password: DB_USER_PASSWORD
});

function parseFromCSV(csv_file) {
  const csvData = fs.readFileSync(csv_file, 'utf8');

  const lines = csvData.split('\n').filter(line => line.trim() !== '');

  if (lines.length === 0) {
    return [];
  }

  const headers = lines[0].split(',').map(header => header.trim());

  const result = [];

  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(',');
    const obj = {};

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = values[j] ? values[j].trim() : '';
    }

    result.push(obj);
  }

  return result;

}

async function extractFieldsName(table) {
  try {
    let extracted = [];

    const fields = await db.query(`DESC ${table}`);

    for (let i = 0; i <= fields[0].length - 1; i++) {
      const element = fields[0][i];

      extracted.push(element['Field']);
    }
    // console.log(extracted.join(', '));
    return extracted.join(', ');
  } catch (error) {

  }
}

async function fillDB(table) {
  try {
    if (Array.isArray(table)) {
      for (let i = 0; i <= table.length - 1; i++) {

        const [emptyRows] = await db.query(`SELECT 1 FROM ${table[i]} LIMIT 1`);

        const local_csv_file = path.join(LOCAL_CSV_PATH, `${table[i]}.csv`);
        const parsed_CSV = parseFromCSV(local_csv_file);

        parsed_CSV.forEach((item) => {
          if ('startedAt' in item) {
            console.log(item.startedAt);
          }
        })

        if (emptyRows.length === 0) {
          const fields = await extractFieldsName(table[i]);
          const fieldList = fields.split(',').map(f => f.trim());
          const placeholders = fieldList.map(() => '?').join(',');
          if (process.platform === 'linux') {
            const csv_file = path.join(CSV_PATH, `${table[i]}.csv`);
            await db.query(
              `LOAD DATA INFILE '${csv_file}' INTO TABLE ${table[i]} FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS (${fields}) VALUES (${placeholders})`,
              []);
          } else if (process.platform === 'win32') {
            const csv_file = path.join(CSV_PATH, `${table[i]}.csv`).replace(/\\/g, '/');
            await db.query(`LOAD DATA INFILE '${csv_file}' INTO TABLE ${table[i]} FIELDS TERMINATED BY ',' LINES TERMINATED BY '\r\n' IGNORE 1 ROWS (${fields})`);
          }
        }
      }
    } else {
      const [emptyRows] = await db.query(`SELECT 1 FROM ${table} LIMIT 1`);

      if (emptyRows.length === 0) {
        const fields = await extractFieldsName(table);
        if (process.platform === 'linux') {
          const csv_file = path.join(CSV_PATH, `${table}.csv`);
          await db.query(`LOAD DATA INFILE '${csv_file}' INTO TABLE ${table} FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS (${fields})`);
        } else if (process.platform === 'win32') {
          const csv_file = path.join(CSV_PATH, `${table}.csv`).replace(/\\/g, '/');
          await db.query(`LOAD DATA INFILE '${csv_file}' INTO TABLE ${table} FIELDS TERMINATED BY ',' LINES TERMINATED BY '\r\n' IGNORE 1 ROWS (${fields})`);
        }
      }
    }
  } catch (error) {
    throw new DBError(error);
  }
}

export async function initDB() {
  try {
    await db.query("CREATE DATABASE IF NOT EXISTS ts2025mb");
    await db.query("USE ts2025mb");

    await db.query(`CREATE TABLE IF NOT EXISTS users(
                user_key varchar(191) NOT NULL PRIMARY KEY,
                name varchar(191) NOT NULL,
                email varchar(191) NOT NULL UNIQUE,
                phone bigint NOT NULL UNIQUE,
                password_hash varchar(191)
            )`);

    await db.query(`CREATE TABLE IF NOT EXISTS categories(
                category_key varchar(191) NOT NULL PRIMARY KEY,
                name varchar(191) NOT NULL,
                user_ref varchar(191) NOT NULL,
                FOREIGN KEY (user_ref) REFERENCES users(user_key)
            )`);

    await db.query(`CREATE TABLE IF NOT EXISTS tariffs(
                tariff_key varchar(191) NOT NULL PRIMARY KEY,
                name varchar(191) NOT NULL,
                type varchar(191) NOT NULL,
                basePrice varchar(4),
                minPrice varchar(4),
                maxPrice varchar(4),
                category_ref varchar(191) NOT NULL,
                FOREIGN KEY (category_ref) REFERENCES categories(category_key)
            )`)

    await db.query(`CREATE TABLE IF NOT EXISTS bicycles(
                bicycle_key varchar(191) NOT NULL PRIMARY KEY,
                name varchar(191) NOT NULL,
                slug varchar(191) NOT NULL,
                description varchar(255) NOT NULL,
                locationX varchar(10) NOT NULL,
                locationY varchar(10) NOT NULL,
                pathToImage varchar(191) NOT NULL,
                category_ref varchar(191) NOT NULL,
                FOREIGN KEY (category_ref) REFERENCES categories(category_key)
            )`);

    await db.query(`CREATE TABLE IF NOT EXISTS bookings(
            booking_key varchar(191) NOT NULL PRIMARY KEY,
            rating bigint,
            price bigint,
            percentageOfWear bigint,
            startedAt Date NULL,
            endedAt Date NULL,
            bicycle_ref varchar(191) NOT NULL,
            tariff_ref varchar(191) NOT NULL,
            user_ref varchar(191) NOT NULL,
            photos varchar(191),
            FOREIGN KEY (bicycle_ref) REFERENCES bicycles(bicycle_key),
            FOREIGN KEY (tariff_ref) REFERENCES tariffs(tariff_key),
            FOREIGN KEY (user_ref) REFERENCES users(user_key)
        )`)

    await db.query(`CREATE TABLE IF NOT EXISTS applications(
            application_key varchar(191) NOT NULL PRIMARY KEY,
            category_ref varchar(191) NOT NULL,
            user_ref varchar(191) NOT NULL,
            FOREIGN KEY (category_ref) REFERENCES categories(category_key),
            FOREIGN KEY (user_ref) REFERENCES users(user_key)
      )`)

    await fillDB(['users', 'categories', 'tariffs', 'bicycles', 'bookings', 'applications']);

  } catch (error) {
    throw new DBError(error);
  }
}
