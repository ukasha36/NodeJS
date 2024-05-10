import Express from "express";

const router = Express.Router();

const postuser = (req, res) => {

 
    console.log("req", req.body);
    res.status(200).send({ status: 200 });
 

};

export default postuser;
