import orderRequestDao from './orderRequest.dao';
import OrderRequest from './orderRequest.model';

class OrderRequestsService {
    constructor() {}

    create(orderRequest, callback) {
        var order = new OrderRequest(orderRequest);
        orderRequestDao.create(order, callback);
    }

    readAll(callback) {
        orderRequestDao.getAll(callback);
    }

    readById(id, callback) {
        orderRequestDao.getById(id, callback);
    }

    remove(id, callback) {
        orderRequestDao.delete(id, callback);
    }

    update(orderRequest, callback) {
        orderRequestDao.update(orderRequest, callback);
    }
}

export default OrderRequestsService;