// import pakages
const expess=require('express')
const app=expess()
const path=require('path')
// const ejs=require('ejs')

// set ejs as view engine

app.set('view engine','ejs')

app.use(expess.static(path.join(__dirname,'public')))
app.get("/static",(req,res)=>{
    res.render('abc')
})
app.listen(5002)
