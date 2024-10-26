import { useState } from 'react'
import './App.css'
import Testimonio from './components/Testimonio'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'


import Grid from '@mui/material/Grid2'
import TextField from '@mui/material/TextField'
import { MyButton } from 'milibreria'
import { CarlosAG } from 'milibreria'

function App() {
  const [message, setMessage] = useState('LOG IN')
  const [login, setLogin] = useState('SIGN IN')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const people = [{
    id: 0,
    name: 'Antoine Beaumont',
    country: 'Francia',
    occupation: 'Ingeniero de Software',
    imageUrl: './src/images/man1.jpg',
    description: 'Bonnes fonctions, composants et propriétés. La mécanique de l’application est impeccable. Fortement recommandé!',
  },
  {
    id: 1,
    name: 'Lara Ross',
    country: 'Escocia',
    occupation: 'Ingeniera Informática',
    imageUrl: './src/images/woman1.jpg',
    description: 'The most comfortable option on the market. In less than a week you can learn everything you need to use the application.',
  },
  {
    id: 2,
    name: 'Alberto Quintana',
    country: 'España',
    occupation: 'Técnico Superior en Desarrollo Web',
    imageUrl: './src/images/man2.jpg',
    description: 'Una gran ayuda para terminar proyectos en tiempo récord. Además, su manual es muy completo e intuitivo. ¡Cualquiera puede usarlo!',
  },
  {
    id: 3,
    name: 'Xiang Zhao',
    country: 'China',
    occupation: 'Ingeniera de Computadores',
    imageUrl: './src/images/woman2.jpg',
    description: '我真的很喜欢完美捕捉我的想法的方式。他就像读懂了我的心思！',
  }]


  function changeLogin() {
    if (login == 'LOG  IN') {
      setLogin('SIGN IN')
      setMessage('LOG  IN')
    } else {
      setLogin('LOG  IN')
      setMessage('SIGN IN')
    }

  }


  function changeUsername(event) {
    setUsername(event.target.value)
  }
  function changePassword(event) {
    setPassword(event.target.value)
  }

  function submitData() {
    if (login == 'LOG  IN') {
      console.log('Loggin in - Username:' + username + " Password:" + password)
    } else {
      console.log('Signing up - Username:' + username + " Password:" + password)
    }
  }

  return (
    <>
      <MyButton text={'Change to "' + message + '"'}
        txtcolor='red'
        bgcolor='pink'
        size='large'
        onClick={changeLogin}
      ></MyButton>
      <br/>
      <br/>
      <Grid container direction={'row'} sx={{ minHeight: '20vh' }}>
        {login == 'LOG  IN' ?
          <>

            <Grid item sx={{ width: '34vh' }}>
              <TextField label='Username' fullWidth onChange={changeUsername}></TextField>
              <TextField label='Password' type='password' fullWidth onChange={changePassword}></TextField>
            </Grid>

          </>
          :
          <>
            <Grid item sx={{ width: '34vh' }}>
              <TextField label='Username' fullWidth onChange={changeUsername}></TextField>
              <TextField label='Password' type='password' fullWidth onChange={changePassword}></TextField>
              <CarlosAG text='Check Password Security'></CarlosAG>
            </Grid>

          </>
        }
        <Grid item sx={{ width: '35vh' }}>
          <br />
          <MyButton text={login}
            txtcolor='red'
            bgcolor='pink'
            size='large'
            onClick={submitData}
          ></MyButton>
        </Grid>
      </Grid>


      <List>
        {people.map((p) => (
          <ListItem key={p.id}>
            <Testimonio name={p.name}
              country={p.country}
              occupation={p.occupation}
              imageUrl={p.imageUrl}
              description={p.description}></Testimonio>
          </ListItem>))}
      </List>



    </>
  )
}

export default App
