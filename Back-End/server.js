import express from 'express'
import cors from 'cors'
import { PrismaClient } from './generated/prisma/index.js'

const prisma = new PrismaClient()
const app = express()
app.use(express.json())
app.use(cors())

app.get('/usuarios', async(req, res) => {  /* req => Request & res => response */

     const users = await prisma.users.findMany()

    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) =>{
    
    const users = await prisma.users.create({
        data:{
            name:req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })

    res.status(201).json(users)
})

app.put('/usuarios/:id', async (req, res) =>{
    
    const users = await prisma.users.update({
        where:{
            id: req.params.id
        },
        data:{
            name:req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })

    res.status(201).json(users)
})

app.delete('/usuarios/:id', async (req, res) =>{
    
    await prisma.users.delete({
        where: {
            id: req.params.id,
        },
    })
    res.status(200).json("Usuário Deletado com sucesso!!")
})

app.listen(3000) /* Rota configurada por padrão localhost: (valor esolhido no "app.listen") */

/*

LuccasDutra
gzGeDmZmAbrwdfi3
 */