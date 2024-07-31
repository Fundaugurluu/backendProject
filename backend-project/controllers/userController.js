const UserModel=require('../models/userSchema')

const createUser= async (req,res)=>{
   try{        
    const { userName, email, password } = req.body;
   
   if (!userName || !email || !password) {
       return res.status(400).json({
           succeed: false,
           message: "Kullanıcı adı, email ve şifre gereklidir"
       });
   }

   const existingUserName = await UserModel.findOne({ userName });
   if (existingUserName) {
       return res.status(400).json({
           succeed: false,
           message: "Bu kullanıcı adı zaten kullanılıyor"
       });
   }

   const existingEmail = await UserModel.findOne({ email });
   if (existingEmail) {
       return res.status(400).json({
           succeed: false,
           message: "Bu email adresi zaten kullanılıyor"
       });
   }


   await UserModel.create(req.body);
   res.status(200).json({
    succeed:true,
    message:"kullanıcı oluşturuldu",
})

   } 
   catch(err){
        res.status(401).json({
            succeed:false,
            message:"kullanıcı oluşturulamadi",
            err
        })
   }
}

const getUser = async(req,res)=>{
 try{
    const { email,password,userName}=req.body;
    const user=  await UserModel.findOne({email})
 
    if(user){

    if(user.password===password)
    {
        res.status(200).json({
            succeed:true,
            message: `sisteme hoşgeldiniz ${user.userName}`,

        })
    }else {

        res.status(401).json({
            succeed:false,
            message:("kullanıcı şifresi yanlış"),
            err
        })
    }

 }else{
    res.status(401).json({
        succeed:false,
        message:"kullanıcı bulunamadi",
      
    })
 }

 } catch(err){
    res.status(401).json({
        succeed:false,
        message:"kullanıcı bulunamadı",
        err
    })
}
}

module.exports=
{
    createUser,getUser
}
