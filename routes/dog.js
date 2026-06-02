var express = require('express');
var router = express.Router();
const request =require("request");


router.get('/',async(req,res) => {
request('https://api.thedogapi.com/v1/images/search', function (error, respose, body) {
    if (!error && respose.statusCode == 200) {
        const data = JSON.parse(body);
        res.json(data);
    }
});
})
module.exports = router;