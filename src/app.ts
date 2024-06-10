import express, { Request, Response } from 'express';
const app = express();
import cors from 'cors';
import { studentRouter } from './app/modules/student/student.route';

app.use(express.json());
app.use(cors());

app.use('/api/v1/students', studentRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

export default app;
