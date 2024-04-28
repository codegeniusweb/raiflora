const multer = require('multer')
const path=require('path')
const tempPath=path.join(__dirname,'..','temp')

const multerConfig = multer.diskStorage({
    destination: tempPath,
    filename: (req, file, callback) => {
        console.log('multer config',file)
        if (file){
            req.body={...req.body,[file.fieldname]:file.fieldname}
        }
        callback(null, file.originalname);
    }
})

const upload=multer({storage:multerConfig})

module.exports=upload