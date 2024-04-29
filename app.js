import express from 'express'
import morgan from 'morgan';
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js';

dotenv.config();
connectDB()
const PORT =process.env.PORT || 8080
const app =express()

// middlewares 
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())


// route 
import testRoutes from './routes/testRoutes.js'
import UserRouters from './routes/UserRouters.js'

app.use('/api/v1',testRoutes)
app.use('/api/v1/user',UserRouters)


app.get ('/',(req,res)=>{
    return res.status(200).send('<h1>Welcome to node app.js</h1>')
});

//listen
app.listen(PORT,()=>{
    console.log(`server runnimg on PORT ${process.env .PORT}`);
})