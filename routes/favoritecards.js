const express = require("express");
const router = express.Router();

const {FavoriteCards} = require("../models");

// GET *//Users(will come later)//* /**favorite** cards
router.get(/*/Users/:id/favorites*/"/", async (req, res) => {
    try{
        // const userId = req.params.id;
        // const user = await Users.findByPk(userId, {
        //     include: {
        //         model: TradingCard,
        //         through: { 
        //             attributes: []
        //         }
        //     }
        // });

        // if(!user) return res.status(404).json({error: "User Not Found!!!"});
        // res.json(user.TradingCards)
    
    const favorites = await FavoriteCards.findAll();
    res.json(favorites);

    }catch(err){
        res.status(500).json({error: err.message});
    }
});

// POST- add a Favorite Card (Later to the Users favoritecards)
router.post(/*Users/:id/favorites*/"/", async (req, res) => {
    try{
        /*const userId = req.params.id;*/
        const {cardId} = req.body;

        const exists = await FavoriteCards.findOne({
            where: {/*userId,*/ cardId},
        });

        if(exists) return res.status(400).json({error: "Alredy favorited!!!"});

        const favorite = await FavoriteCards.create({/*userId,*/ cardId});
        res.json(favorite);
    } catch(err){
        res.status(500).json({error: err.message});
    }
});

// Delete User(Later) Favorite
router.delete(/*Users/:id/favorites/*/"/:cardId", async (req, res) => {
    try{
        const {/*id: userId,*/ cardId} = req.body;

        const deleted = await FavoriteCards.destroy({
            where: {/*userId,*/ cardId},
        });

        if(!deleted) return res.status(404).json({error: "Favorite Not Found!!!"});
        
        res.json(({message: "Favorite removed!!!"}))
    }catch(err){
        res.status(500).json({error: err.message});
    }
});

module.exports = router;