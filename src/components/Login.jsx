import { useState } from "react"
import axios from 'axios'

const Login = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [button, setButton] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        const user = {
            username: username.trim(),
            password: password.trim()
        }
        !button ? 
        axios.post('http://localhost:5050/user', user)
            .then((res) => {
                alert(res.data)
                // console.log(res.data)
            })
            .catch(err => console.log(err)) 
        : 
        axios.post('http://localhost:5050/login', user)
            .then((res) => {
                // console.log(res.data)
                alert(res.data)
            })
            .catch(err => console.log(err))
    }

    return(
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)}/>
            <input type="text" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => {setButton(false)}}>Sign Up</button>
            <button onClick={() => {setButton(true)}}>Login</button>
        </form>
    )
}

export default Login


// app.get('/users', (req, res) => {
//     res.json(users)
// })

// app.post('/users', async (req, res) => {

//     try {
//         const salt = await bcrypt.genSalt() //can also simply input the namnt of sale we want below
//         const hashedPass = await bcrypt.hash(req.body.password, salt) //so instead of salt var you input a number
//         console.log(salt)
//         console.log(hashedPass)
//         const user = {
//             name: req.body.name,
//             password: hashedPass
//         }
//         users.push(user)
//         res.status(200).send('sent')
//     }
//     catch {
//         res.status(500).send('passwowrd aint working ')
//     }

// })

// app.post('/users/login', async (req, res) => {
//     const user = users.find(user => user.name = req.body.name)
//     if (user === null) {
//         return res.status(400).send('Cannot find user')
//     }
//     try {
//       if  (await  bcrypt.compare(req.body.password, user.password)){
//         res.send('great success')
//       } else{
//         res.send('Not allowed')
//       }
//     }
//     catch {
//         res.status(500).send('unable to match user info')
//     }

// })

// app.listen(3000)