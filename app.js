import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.get('/', (req, res)=>{res.send('Hello from homepage');});

app.use(bodyParser.json());
app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));