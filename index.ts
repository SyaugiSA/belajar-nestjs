import * as bcrypt from 'bcrypt';

const pass = '123';
const hash = bcrypt.hashSync('456', bcrypt.genSaltSync());

// console.log(bcrypt.compareSync(pass, hash));
console.log(hash);
