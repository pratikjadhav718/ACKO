const express = require("express");
const Car = require("../models/car.model");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await Car.find();
        return res.status(200).send({ data })
    } catch (err) {
        return res.status(400).send(err.message)
    }
})

router.post("/", async (req, res) => {
    try {
        const data = await Car.create(req.body);
        return res.status(200).send(data)
    }
    catch (err) {
        return res.status(400).send(err.message)
    }
})

router.get("/:id", async (req, res) => {
    try {
        const data = await Car.findById(req.params.id).lean().exec();
        return res.status(200).send(data)
    }
    catch (err) {
        return res.status(400).send(err)
    }
})

router.patch("/:id", async (req, res) => {
 
 try{
    const data = await Car.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
        .lean()
        .exec();
    return res.status(200).send(data)
}
    catch (err) {
        return res.status(400).send(err.message)
    }
})


module.exports=router