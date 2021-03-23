const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './storage/imgs')
  },
  filename: function (req, file, cb) {
    cb(null, `${req.body.mail}.jpg`)
  }
})

const upload = multer({ storage })

module.exports = upload