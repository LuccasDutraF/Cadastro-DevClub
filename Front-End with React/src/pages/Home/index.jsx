import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api.js'

import {
  Container,
  Containerinputs,
  Form,
  Input,
  InputLabel
} from './styles'
import TopBackground from '../../components/Banner'
import Button from '../../components/Button'
import Title from '../../components/Title'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const navigate = useNavigate()

  async function registerNewUser() {
    const data = await api.post('/usuarios', {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value
    })
  }


  return (
    <Container>

      <TopBackground />

      <Form>

        <Title>Cadastrar Usuário</Title>

        <Containerinputs>

          <div>

            <InputLabel>Nome<span> *</span></InputLabel>

            <Input type='text' placeholder='Seu nome de Usuário' ref={inputName} />

          </div>

          <div>

            <InputLabel>Idade<span> *</span></InputLabel>

            <Input type='number' placeholder='Sua Idade' ref={inputAge} />

          </div>

        </Containerinputs>

        <div style={{ width: "100%" }}>

          <InputLabel>E-mail<span> *</span></InputLabel>

          <Input type='text' placeholder='Seu E-mail de Usuário' ref={inputEmail} />

        </div>

        <Button type='button' onClick={async () => { await registerNewUser(); navigate('/lista-de-usuarios'); }} theme="primary" >
          Cadastrar Usuário
        </Button>

      </Form>

      <Button onClick={() => navigate('/lista-de-usuarios')}>Ir para a próxima pagina</Button>

    </Container>
  )
}

export default Home
