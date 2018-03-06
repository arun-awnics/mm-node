import ContactDao from './contactUs.dao';
import log from '../../config/log4js.config';

var contactDao = new ContactDao();
/*
the service layer goes here(logics apart from CRUD methods)
*/
class ContactService {
    constructor() {}

    create(contact, callback) {
        return contactDao.insert(contact, (contactCreated) => {
            callback(contactCreated);
        });
    }

    getAll(callback) {
        return contactDao.readAll((allContacts) => {
            callback(allContacts);
        });
    }

    getById(id, callback) {
        return contactDao.readById(id, (contactById) => {
            callback(contactById);
        });
    }

    update(contact, callback) {
        return contactDao.update(contact, (contactUpdated) => {
            callback(contactUpdated);
        });
    }

    delete(id, callback) {
        return contactDao.delete(id, (contactDeleted) => {
            callback(contactDeleted);
        });
    }
}

export default ContactService;