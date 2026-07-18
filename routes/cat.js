var express = require('express');
var router = express.Router();
const request =require('request');
const cors = require('cors'); //corsミドルウェアを追加

//corsミドルウェアを使用
router.use(cors());

router.get('/',async(req,res) => {
request('https://api.thecatapi.com/v1/images/search', function (error, respose, body) {
    if (!error && respose.statusCode == 200) {
        const data = JSON.parse(body);
        res.json(data);
    }
});
})
module.exports = router;