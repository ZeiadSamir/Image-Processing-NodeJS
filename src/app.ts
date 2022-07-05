
import express from 'express';
import routes from './routes/index';



const app = express();
const port = 3000;


app.get('/', (req: express.Request, res:express.Response) => {
  return  res.send('This is the main route');
});

app.use('/api', routes);

app.listen(port, ()=> {
    console.log(`server running on http://localhost:${port}`);
});



export default app;