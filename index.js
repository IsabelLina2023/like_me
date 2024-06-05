import express from 'express';
import routes from './routes/router.js'
const app = express();
const PORT = process.env.PORT || 3000;

//Motor de Plantilla

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/', routes);


app.get('/inicio', (req, res) =>{
    res.send('hola mundo, server on 🔥');
});

app.listen(PORT, console.log(`🔥Server on 🔥 http://localhost:${PORT}`));