import { Express } from "express";
import productsController from './controllers/productsController.js'

const app = express();

app.use('/products', productsController);

const port = 4000;

app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto en el puerto: ${port}`);
});