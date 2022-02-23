import Gun from 'gun';

// Gun is a decentralized data base
// https://gun.eco/

// Creates a local Gun database.
// When we release the production build we'll want to set up a peer,
// but right now data is stored in /radata

// We can also use a different data base all together.
// Options for AWS S3 which uses the website bucket
const S3_OPTIONS = {
    s3: {
        key: process.env.AWS_ACCESS_KEY_ID,
        secret: process.env.AWS_SECRET_ACCESS_KEY,
        bucket: process.env.AWS_S3_BUCKET
    }
}

let gun = Gun(["http://localhost:3000/"]);


export { gun };