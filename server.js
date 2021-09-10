const express = require('express')
const cors = require('cors')
var app = express()

var corOptions = {
        origin:true
}

app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require('./models')
db.sequelize.sync()

require('./routes/user.routes')(app);

app.get('/',(req,res)=>{

    res.send('Welcome to Express Server')

})
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{

    console.log(`Server Started at PORT ${PORT}`)
})