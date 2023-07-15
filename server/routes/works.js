const express = require("express");
const router = express.Router();
const Works = require("../models/Works")
const getNextCounterValue = require("./counterUtils");
const cloudinary = require("cloudinary");

  cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
  });

router.get("/view", async (req, res) => {
    Works.find()
      .then((items) => res.json(items))
      .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/view/:id", async (req, res) => {
    const { id } = req.params;
    Works.findOne({ id })
        .then((work) => {
            if (!work) {
                return res.status(404).json({ error: "Work not found" });
            }
            res.json(work);
        })
        .catch((err) => res.status(400).json({ error: err.message }));
});

router.post("/add", async (req, res) => {
    const { title, description, thumbnail, images, tools, github, url } = req.body;
    
    try {
        const id = await getNextCounterValue("works_collection", "count");

        let works = new Works({ id, title, description, thumbnail, images, tools, github, url });
        await works.save();

        res.send("Work Added Successfully")

    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred during saving");
    }
})

// router.put("/edit/:id", async (req, res) => {
//     Animal.findByIdAndUpdate({ _id: req.params.id }, {
//         // animalName: req.body.animalName,
//         breedType: req.body.breedType, 
//         species: req.body.species,
//         species1: req.body.species1,
//         // weight: req.body.weight, 
//         // gender: req.body.gender, 
//         // age: req.body.age,
//         quantity: req.body.quantity,
//         birthDate: req.body.birthDate,
//         habitat:req.body.habitat,
//     })
//     .then(() => {
//         res.send("Animal updated successfully");
//     })
//     .catch((err) => res.send(err + "\nFailed to update animal"));
// });

// router.put("/archive/:id", async (req, res) => {
//     Animal.findByIdAndUpdate({ _id: req.params.id }, {
//         isArchived: true
//     })
//     .then(() => {
//         res.send("Animal archived successfully");
//     })
//     .catch((err) => res.send(err + "\nFailed to archive Animal"));
// });

// router.put("/restore/:id", async (req, res) => {
//     Animal.findByIdAndUpdate({ _id: req.params.id }, {
//         isArchived: false
//     })
//     .then(() => {
//         res.send("Animal restored successfully");
//     })
//     .catch((err) => res.send(err + "\nFailed to restore Animal"));
// });

async function fetchImagesFromFolder(folderName) {
    try {
        const result = await cloudinary.v2.search
        .expression(`folder=Portfolio/works/${folderName}`)
        .execute();

        return result;
    } catch (error) {
        console.error('Error fetching images from Cloudinary:', error);
        throw error;
    }
}

router.get('/screenshots', async (req, res) => {
    const { folderName } = req.query;

    try {
        const imagesUrls = await fetchImagesFromFolder(folderName);
        res.json(imagesUrls);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch images' });
    }
})

module.exports = router;