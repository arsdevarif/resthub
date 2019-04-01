var express =require ('express');
var router =express.Router();

// Send message for default URL
router.get('/', (req, res) => res.render('index',{
    title: 'home'
}));

module.exports=router;