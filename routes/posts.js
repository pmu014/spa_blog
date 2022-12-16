const express = require('express');
const router = express.Router();


const Postup = require("../schemas/post.js");
router.post("/", async(req,res) => {
  const {user, password, title, content} = req.body;

  try {
    await Postup.create({user, password, title, content})
    return res.status(201).send({success: true,Message: '게시물 작성에 성공했습니다.'})
  } catch (err){ 
  if(!user || !password || !title || !content){
    res.status(400).json({success: false, errorMessage:"데이터 형식이 올바르지 않습니다. 빈곳이 없는지 다시한번 확인해주세요."})
    return;
    }
  }


})
module.exports = router;