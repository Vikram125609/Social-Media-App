const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploaded-images')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

module.exports = { upload }
