'use strict';

async function downloadImage(bucketName, userInfo) {
    // [START storage_download_file]
    // Imports the Google Cloud client library
    const {Storage} = require('@google-cloud/storage');

    // Creates a client
    const storage = new Storage();

    /**
     * TODO(developer): Uncomment the following lines before running the sample.
     */
    // const bucketName = 'Name of a bucket, e.g. my-bucket';
    // const srcFilename = 'Remote file to download, e.g. file.txt';
    // const destFilename = 'Local destination for file, e.g. ./local/path/to/file.txt';

    for(let i = 0; i < userInfo.count; i++) {
        const srcFilename = `images/${userInfo.imageName}_${i}.jpg`;
        const destFilename = `./public/images/UID${userInfo.uid}/${userInfo.imageName}_${i}.jpg`;
    
        const options = {
            // The path to which the file should be downloaded, e.g. "./file.txt"
            destination: destFilename,
        };
        
        // Downloads the file
        await storage
            .bucket(bucketName)
            .file(srcFilename)
            .download(options);
    }
    // [END storage_download_file]        
}

module.exports = downloadImage;
