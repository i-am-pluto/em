const express = require('express');
const Event = require('../model/Event'); 

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const events = await Event.find({});
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get('/filter', async (req, res) => {
  const { month, year } = req.query;
  try {
    const parsedMonth = parseInt(month);
    const parsedYear = parseInt(year);

    if (!parsedMonth || !parsedYear) {
      return res.status(400).json({ message: 'Invalid month or year' });
    }

    const startDate = new Date(parsedYear, parsedMonth - 1, 1); 
    const endDate = new Date(parsedYear, parsedMonth, 0); 
    
    const events = await Event.find({
      date: {
        $gte: startDate,
        $lte: endDate,
      },
    });

    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get('/:eventId', async (req, res) => {
  const { eventId } = req.params;

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
