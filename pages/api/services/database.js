import Gun from 'gun';

// Gun is a decentralized data base
// https://gun.eco/

// Creates a local Gun database.
// When we release the production build we'll want to set up a peer,
// but right now data is stored in /radata

// We can also use a different data base all together.
let gun = Gun('http://localhost:3000/gun');

export { gun };