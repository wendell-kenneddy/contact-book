const database = require('./config');

const init = async () => {
  const db = await database();

  await db.run(`CREATE TABLE contacts(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    phone VARCHAR(15)
  );`);

  await db.run(`INSERT INTO contacts (name, phone)
  VALUES ('Example_1', '1234-5678'),
  ('Example_2', '4002-8922');`);

  await db.close();
};

init();
