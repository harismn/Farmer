// const bcrypt = Promise.promisifyAll(require('bcrypt'))
const bcrypt = require('bcrypt')
// console.log('====================>' + bcrypt);
function hashPassword(password, options) {
  const SALT_FACTOR = 8

const salt = bcrypt.genSaltSync(SALT_FACTOR)
  return  bcrypt.hashSync(password, salt, null)
  
}

const p = hashPassword("12345678")
console.log(p)