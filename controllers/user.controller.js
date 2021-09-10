const db = require('../models')
const user =  db.user
const Op = db.Sequelize.Op

exports.saveUserData = (req,res) =>{

      
  if(!req.body.name){

    res.status(400).send({

            messege : 'Content cannot be empty!'    
    })
    return;

  }

  const user_data = {

    Name:req.body.name,
    Email: req.body.email,
    Token:req.body.token,
    Image:req.body.image,
    ProviderName: req.body.providerId,
  
}
console.log(user_data)

// save tutorial 
user.create(user_data)
.then(data => {

    res.send(data)

})
.catch(err => {

    res.status(500).send({

            messege:
                err.messege || "Some error occured while creating the data!"
    })

})



    
  
}




  