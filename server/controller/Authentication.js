const {User} = require('../models/user')

module.exports = {
    register: async (req, res) => {
        try{
            const {username} = req.body

            let userMatch = await User.findOne({where: {username: username}})
            
            if(userMatch){
               
                console.log('Username is already taken.')
            }
            else{
                let newUser = User.create({username: username})
                res.status(200).send(newUser)
            }
        }
        catch(err){
            console.log(err)

        }
    },
    login: async (req,res) => {
        try{
            const {login} = req.body

            let foundUser = await User.findOne({where: {username: login}})

            if(foundUser){
                res.status(200).send(foundUser)
               console.log(foundUser)
            }
        }
        catch(err){
            console.log(err)
        }
    }
}