import Storage from '@google-cloud/storage';
import Dotenv from 'dotenv';

const dotenv = Dotenv.config({ path: '.env.dev' });
const storage = Storage({
    projectId: process.env.PROJECT_ID,
    keyFilename: './src/util/mesomeds-6aaa1473891d.json'
});

const bucket = storage.bucket(process.env.BUCKET);

module.exports = bucket;