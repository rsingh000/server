const Item = require('../models/Item');

const router = require("express").Router();

//getting item by id param
router.get("/:id", async (req,res) => {

    try {
        let items = await Item.findById(req.params.id);

        res.status(200).json(items);
    } catch (error) {
        res.status(500).json(error);
    }

})

module.exports = router;
