const express =require('express');
const app=express();
const PORT=2000;
const pageRouter=require('./routers/pageRouter')
const userRouter=require('./routers/userRouter')
const mongoose = require('mongoose'); 

app.use(express.urlencoded());
app.use(express.json());
app.use('/',pageRouter)
app.use('/user',userRouter)


const dbURL = 'mongodb+srv://fundauggurlu:funda@cluster0.ohggs1n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose
 .connect(dbURL)
  .then(()=>{
        console.log('Mongodb baglantisi sağlandi')
        app.listen(PORT,()=>  {
            console.log(`sunucu portunda çalşıyor: ${PORT}`);
            });
  }) .catch((error)=>{
    console.log('error')
  }
)





