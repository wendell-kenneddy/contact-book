const Contacts = require('../model/Contacts');

module.exports = {
  async getRoute(req, res) {
    const contacts = await Contacts.get();

    return res.render('index', { contacts });
  }
};
