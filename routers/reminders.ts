import { Router } from 'express';
import CreateReminderDto from '../dtos/create-reminder';

const router = Router();

router.get('/', (req, res) => {
  res.send('List of reminders');
});

router.post('/', (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const reminder = { id: Date.now(), title, isComplete: false };
  res.json(reminder);
});

export default router;
