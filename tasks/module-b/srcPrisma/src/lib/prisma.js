import { PrismaClient } from './generated/client.js';
import fs from 'fs';
import path from 'path';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient;

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

(async () => {
  const rawTableList = await prisma.$queryRawUnsafe('SHOW TABLES');
  const tablesList = [];

  for (let i = 1; i < rawTableList.length; i++) {
      const element = rawTableList[i];
      tablesList.push(element['Tables_in_ts2025mb']);
  }

  await Promise.all(tablesList.map(async (tableName) => {
    const csv_file = path.join(process.env.CSV_DIR, `${tableName}.csv`);
    const arr= parseFromCSV(csv_file);

    if (tableName === 'users') {
      const hashedUsers = await Promise.all(
        arr.map(async (user) => {
          const hashedPassword = await bcrypt.hash(user['password_hash'], 16);

          return {...user, password_hash: hashedPassword};
        })
      );

      console.log(hashedUsers)
    } else {
      console.log(tableName)
    }
  }));
})()

export default prisma;
