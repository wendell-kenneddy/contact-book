const Contacts = require('../model/Contacts');

module.exports = {
  getRoute(req, res) {
    return res.render('contact');
  },

  async post(req, res) {
    await Contacts.create(req.body);
    return res.redirect('/');
  },

  async postDelete(req, res) {
    const id = req.params.id;
    await Contacts.delete(id);
    return res.redirect('/');
  },

  async getEditRoute(req, res) {
    const id = req.params.id;
    const contact = await Contacts.get(id);
    return res.render('contact-edit', { contact });
  },

  async postEditRoute(req, res) {
    const id = req.params.id;
    const originalContact = await Contacts.get(id);
    const updatedContact = {
      ...originalContact,
      ...req.body
    };

    await Contacts.update(updatedContact, id);
    return res.redirect('/');
  }
}
