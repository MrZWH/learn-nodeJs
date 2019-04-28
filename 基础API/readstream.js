const fs = require('fs')

const rs = fs.createReadStream('./readstream.js')

// process.stdout 控制台
rs.pipe(process.stdout)