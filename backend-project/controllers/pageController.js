const getHomePage=(req,res)=>{
    try{
        res.status(200).json({
            succeed :true,
            message : "Ana sayfa"
        })} catch(error)
           {
            res.status(401).json({
                succeed :false,
                message : " Ana sayfa bulunamadı",
                err
            })}
    
}


const getLoginPage = (req,res) =>{

try{
    res.status(200).json({
        succeed :true,
        message : "Giris sayfası"
    })} catch(error)
       {
        res.status(401).json({
            succeed :false,
            message : " Giris sayfası bulunamadı",
            err
        })}     
}

const getRegisterPage = (req,res) =>{

    try{
        res.status(200).json({
            succeed :true,
            message : "kayıt sayfası"
        })} catch(error)
           {
            res.status(401).json({
                succeed :false,
                message : " kayıt sayfası bulunamadı",
                err
            })}     
    }
    

module.exports={
    getLoginPage,getHomePage,getRegisterPage
};