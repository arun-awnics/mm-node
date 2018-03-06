/**
 * 1. create
 * 2. 
 */

import specialitiesDao from './specialities.dao';
import Speciality from './specialities.model';

class SpecialitiesService {
    constructor() {}

    create(speciality, callback) {
        var spec = new Speciality(speciality);
        specialitiesDao.create(spec, callback);
    }

    readAll(callback) {
        specialitiesDao.getAll(callback);
    }

    readById(id, callback) {
        specialitiesDao.getById(id, callback);
    }

    remove(id, callback) {
        specialitiesDao.delete(id, callback);
    }

    update(speciality, callback) {
        specialitiesDao.update(speciality, callback);
    }
}

export default SpecialitiesService;