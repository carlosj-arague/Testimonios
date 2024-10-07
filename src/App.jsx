import { useState } from 'react'
import './App.css'
import Testimonio from './components/Testimonio'

import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'


function App() {
  const people = [{
    id: 0,
    name: 'Antoine Beaumont',
    country: 'Francia',
    occupation: 'Ingeniero de Software',
    imageUrl: './src/images/man1_.jpg',
    description: 'Bonnes fonctions, composants et propriétés. La mécanique de l’application est impeccable. Fortement recommandé!',
    },
    {id: 1,
      name: 'Lara Ross',
      country: 'Escocia',
      occupation: 'Ingeniera Informática',
      imageUrl: './src/images/woman1.jpg',
      description: 'The most comfortable option on the market. In less than a week you can learn everything you need to use the application.',
    },
    {id: 2,
      name: 'Alberto Quintana',
      country: 'España',
      occupation: 'Técnico Superior en Desarrollo Web',
      imageUrl: './src/images/man2.jpg',
      description: 'Una gran ayuda para terminar proyectos en tiempo récord. Además, su manual es muy completo e intuitivo. ¡Cualquiera puede usarlo!',
    },
    {id: 3,
      name: 'Xiang Zhao',
      country: 'China',
      occupation: 'Ingeniera de Computadores',
      imageUrl: './src/images/woman2.jpg',
      description: '我真的很喜欢完美捕捉我的想法的方式。他就像读懂了我的心思！',
    }]
  return (
    <>
    
      <List>
        {people.map((p) => (
          <ListItem key={p.id}>
            <Testimonio name={p.name}
              country = {p.country}
              occupation={p.occupation}
              imageUrl={p.imageUrl}
              description={p.description}></Testimonio>
          </ListItem>))}
      </List>

    </>
  )
}

export default App
