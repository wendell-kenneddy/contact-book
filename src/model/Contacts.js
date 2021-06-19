const database = require('../db/config');

module.exports = {
  async get(id) {
    const db = await database();

    if (id) {
      const contact = await db.get(`SELECT * FROM contacts WHERE id = ${id};`);
      return contact;
    }

    const contacts = await db.all(`SELECT * FROM contacts;`);
    await db.close();

    return contacts;
  },

  async update(contact, id) {
    const db = await database();

    await db.run(`UPDATE contacts SET
    name='${contact.name}',
    phone='${contact.phone}'
    WHERE id = ${id}`);

    await db.close();
  },

  async create(contact) {
    const db = await database();

    await db.run(`INSERT INTO contacts (name, phone) VALUES
    ('${contact.name}', '${contact.phone}');`);

    await db.close();
  },

  async delete(id) {
    const db = await database();

    await db.run(`DELETE FROM contacts WHERE id = ${id};`);

    await db.close();
  }
};
