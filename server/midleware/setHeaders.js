'use strict';

function accesControl(req, res, next) {
    
    req.webDirection = req.body.newsPage

    console.log('Adding headders')
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
   }

   module.exports = accesControl