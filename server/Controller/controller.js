const { User } = require("./models/user");
const { Review } = require("./models/reviews");
const bcrypt = require('bcrypt');
const user = require("./models/user");

module.exports = {
  addReview: async (req, res) => {
    try {
      const { title, date, rating, review } = req.body;
      await Review.create({ title, date, rating, review });
      res.sendStatus(200);
    } catch (error) {
      console.log("ERROR in addReview");
      console.log(error);
      res.sendStatus(400);
    }
  },
  addUser: async (req, res) => {
    const {username} = req.body

    let foundUser = await User.findOne({where: {username:username}})

    if(foundUser){
        return res.status(200).send('User Already Exists')
    }

    try {
      console.log("Adding new user", req.body);
            // const salt = await bcrypt.genSalt(10) //can also simply input the namnt of sale we want below
            const hashedPass = await bcrypt.hash(req.body.password, 10) //so instead of salt var you input a number
            await User.create({username, password: hashedPass})
            res.status(200).send("User Recieved");
    } catch (error) {
      console.log("error at addUser");
      console.log(error);
      res.sendStatus(400);
    }
  },
  loginUser: async (req, res) => {
    const {username, password} = req.body
    let foundUser = await User.findOne({where: {username:username}})
    // console.log(foundUser.username)

    if(foundUser === null){
        return res.status(400).send('User not found')
    }
    try {
        if (await bcrypt.compare(password, foundUser.password)){
            res.status(200).send('We got em')
        } else {
            res.status(200).send('Password Incorrect')
        }
    } catch (error) {
        console.log('Error in loginUser')
        console.log(error)
        res.status(500).send('Unable to Login')
    }
  }
};
