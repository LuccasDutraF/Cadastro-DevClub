import { useEffect, useState } from 'react'
import api from '../../services/api'
import { Title } from '../../components/Title/styles'   
import TopBackground from '../../components/Banner'
import { AvatarUser, 
    CardUsers, 
    Container, 
    ContainerUsers, 
    TrashIcon } from './styles'
import Trash from '../../assets/trash.svg'
import { Navigate, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'

function ListUsers(){
    const navigate = useNavigate()
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function showGetUsers(){
            const { data } = await api.get('/usuarios')

            setUsers(data)
        }
        showGetUsers()
    }, [])

    async function deleteUsers(id){
        await api.delete(`/usuarios/${id}`)

        const updatedUsers = users.filter(user => user.id !== id)
        setUsers(updatedUsers)
    }


    return(
        <Container>

            <TopBackground/>

            <Title style={{marginTop: "10px"}}>Lista de Usuários</Title>

            <ContainerUsers>

            {users.map((user) => (

                <CardUsers  key={user.id}>

                <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>

                <div>

                    <h2>{user.name}</h2>
                    <p>{user.age}</p>
                    <p>{user.email}</p>

                </div>

                <TrashIcon src={Trash} onClick={()=> {deleteUsers(user.id)}} alt='icone-deletar-usuário'/>

                </CardUsers>
            ))}

            </ContainerUsers>

            <Button onClick = { () => navigate('/') } style={{marginTop:"15px"}} >Voltar</Button>
        </Container>
    )
}

export default ListUsers