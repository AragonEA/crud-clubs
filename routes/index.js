const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
  res.render('home', {
    layout: 'index',
  });
});

module.exports = router;
