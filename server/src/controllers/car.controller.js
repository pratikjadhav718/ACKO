const express = require("express");
const Car = require("../models/car.model");
const router = express.Router();

router.get("/", async (req, res) => {
    const data = await Car.find().lean().exec();
    return res.status(200).send({data})
})

router.post("/", async (req, res) => {
    const data = await Car.create(req.body);
    return res.status(200).send(data)
})

router.get("/:id", async (req, res) => {
    const data = await Car.findById(req.params.id).lean().exec();
    return res.status(200).send(data)
})

router.patch("/:id", async (req, res) => {
    const data = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
        .exec();
    return res.status(200).send(data)
})


module.exports=router