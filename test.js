// const bcrypt = Promise.promisifyAll(require('bcrypt'))
const bcrypt = require('bcrypt')
// console.log('====================>' + bcrypt);
function hashPassword(password, options) {
  const SALT_FACTOR = 8

const salt = bcrypt.genSaltSync(SALT_FACTOR)
  return  bcrypt.hashSync(password, salt, null)
  
}

const p = hashPassword("123qwert")
console.log(p)

const isval = bcrypt.compareSync('123qwert', '$2b$08$wV9/hOYPss8Vat7WE9ntJ.y5FUZZ9z2G13NGYh001b3i5ihPoBXbG')
console.log(isval)