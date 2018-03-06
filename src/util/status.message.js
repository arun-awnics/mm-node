/*
class status message {
    code; // error, success, exception, valid, invalid
    description; // respective descriptions(message from whom it is sent and to whom it will be sent)
}
*/

class StatusMessage {

    constructor() {
        this.status = {
            code: String,
            description: String
        };
    }

    error() {
        this.status.code = 'error';
        this.status.description = 'There is an error';
        return this.status;
    }

    success() {
        this.status.code = 'success';
        this.status.description = 'Successful';
        return this.status;
    }

    exception() {
        this.status.code = 'exception';
        this.status.description = 'There is an exception';
        return this.status;
    }

    valid() {
        this.status.code = 'valid';
        this.status.description = 'Valid';
        return this.status;
    }

    invalid() {
        this.status.code = 'invalid';
        this.status.description = 'Invalid';
        return this.status;
    }
}

export default StatusMessage;