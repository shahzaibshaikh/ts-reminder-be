import express from 'express';
import reminderRouter from './routers/reminders';
const app = express();

app.use(express.json());
app.use('/reminders', reminderRouter);

app.get('/', (req, res) => {
  res.send('Hello world.');
});

const PORT = 8000;
app.listen(PORT, () => console.log('Server started on port ' + PORT));
