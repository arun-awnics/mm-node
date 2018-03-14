import fs from 'fs';

class FileService {

    constructor() {}

    upload(req, bucket, next, callback) {
        if (!req.file) {
            return next();
        }
        console.log('Uploading file...');
        const gcsname = Date.now() + req.file.originalname;
        const file = bucket.file(gcsname);

        const stream = file.createWriteStream({
            metadata: {
                contentType: req.file.mimetype
            }
        });

        stream.on('error', (err) => {
            req.file.cloudStorageError = err;
            console.log('Error uploading: ', err);
            next(err);
        });

        stream.on('finish', () => {
            console.log('Upload complete');
        });

        stream.end(req.file.buffer);
        callback(gcsname);
    }

    download(bucket, fileName, res) {
        var remoteFile = bucket.file(fileName);
        const readStream = remoteFile.createReadStream({ encoding: 'base64' });
        remoteFile.getMetadata()
            .then((result) => {
                const metadata = result[0];
                res.setHeader('Content-Length', metadata.size);
                res.setHeader('Content-type', metadata.contentType || 'text/plain');
                res.setHeader('Content-Disposition', 'attachment;');
                readStream
                    .on('error', function(err) {
                        console.log('Error in download: ', err);
                    })
                    .on('response', function(response) {
                        // Server connected and responded with the specified status and headers.
                    })
                    .on('end', function() {
                        // The file is fully downloaded.
                        console.log('File download complete');
                    })
                    .pipe(res);
            })
            .catch(err => console.log('err ', err));
    }
}

export default FileService;