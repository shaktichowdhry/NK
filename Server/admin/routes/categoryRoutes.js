import express from "express";

const router = express.Router();

router.post('/add-category',(req,res) => {
  res.json({message: 'category added'});
});
router.get('/:cid', (req, res) => {
  const cid = req.params.cid; 
  res.json({message: `category ${cid} description`})
});
router.delete('/:cid', (req, res) => {
  res.json({message: 'category deleted'});
})
router.put('/edit/:cid', (req, res) => {
  res.json({message: `category edit`});
});
router.get('/', (req, res) => {
  res.json({ message: "all categories" });
});

export default router
