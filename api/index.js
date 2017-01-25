import express from 'express';
import data from '../src/testData';
const router = express.Router();

console.log(data, 'data for api')
router.get('/goals', (req, res) => {
  res.send({goals: data.goals2017 })
});

export default router;
