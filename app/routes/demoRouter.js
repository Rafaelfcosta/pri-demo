const path = require('path')
const express = require('express')
const asyncHandler = require('../utils/asyncHandler')

const router = express.Router()

router.get('/:code', async (req, res) => {
  res.sendFile(path.join(__dirname+'/../views/demo.html'))
  
})

module.exports = router
