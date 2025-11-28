import mysql from 'mysql2/promise';
import path from 'path';
import { DBError } from './errorClasses.js';
import e from 'express';

const DB_USER = process.env.DB_USER;
const DB_USER_PASSWORD = process.env.DB_USER_PASSWORD;
const CSV_PATH = process.env.CSV_PATH;

const db = mysql.createPool({
    port: 3306,
    user: DB_USER,
    password: DB_USER_PASSWORD
});

async function extractFieldsName(table) {
    try {
        let extracted  = [];

        const fields = await db.query(`DESC ${table}`);

        for (let i = 0; i <= fields[0].length -1 ; i++) {
            const element = fields[0][i];

            extracted.push(element['Field']);
        }
        console.log(extracted.join(', '));
        return extracted.join(', ');
    } catch (error) {
        
    }
}

async function fillDB(table) {
    try {
        const [emptyRows] = await db.query(`SELECT 1 FROM ${table} LIMIT 1`);

        if (emptyRows.length === 0) {
            const fields =  await extractFieldsName(table);
            const csv_file = path.join(CSV_PATH, `${table}.csv`).replace(/\\/g, '/');
            await db.query(`LOAD DATA INFILE '${csv_file}' INTO TABLE ${table} FIELDS TERMINATED BY ',' LINES TERMINATED BY '\r\n' IGNORE 1 ROWS (${fields})`);
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
            )`)


        await fillDB('users');
        await fillDB('categories');
        await fillDB('tariffs');
        await fillDB('bicycles');
    } catch (error) {
        throw new DBError(error);
    }
}