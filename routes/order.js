const Order = require("../models/Order");

const router = require("express").Router();

//getting all orders
router.get("/", async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
      } catch (err) {
        res.status(500).json(err);
      }
});

//creating order 
router.post("/", async (req, res) => {
    const newOrder = new Order(req.body);
  
    try {
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
});

//updating order with any field
router.put("/:id", async (req, res) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedOrder);
    } catch (err) {
      res.status(500).json(err);
    }
});

//get order with any field
router.get("/:id/", async (req, res) => {
  
    try {
      const newOrder = await Order.find(req.body);
      res.status(200).json(newOrder);
    } catch (err) {
      res.status(500).json(err);
    }
});

//delete order with any field 
router.delete("/:id/delete", async (req, res) => {
    try {
      await Order.findOneAndDelete(req.body);
      res.status(200).json("Order has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
