import express from 'express';
import Multer from 'multer';
import FileService from './file.service';
import bucket from '../../config/gcp.config';

const router = express.Router();
const fileService = new FileService();
const multer = Multer({
    storage: Multer.MemoryStorage,
    limits: {
        fileSize: 5 * 1024 * 1024 // no larger than 5mb
    }
});

router.post('/file', multer.single('file'), function(req, res, next) {
    fileService.upload(req, bucket, next, (result) => {
        res.send(result);
    });
});

router.get('/file/:fileName', function(req, res) {
    const fileName = req.params.fileName;
    fileService.download(bucket, fileName, res);
});

module.exports = router;