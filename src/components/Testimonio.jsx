import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { MyButton } from 'milibreria'
import { MyFavourite } from 'milibreria'
import { MyFavouriteBorder } from 'milibreria'
import { CarlosAG } from 'milibreria'

function Testimonio({ name, country, occupation, imageUrl, description }) {
  const [liked, setLiked] = useState(false)



  function changeLiked() {
    setLiked(!liked)
  }


  return (<>
    <Card sx={{ minWidth: 300, maxWidth: 700 }}>
      <CardMedia
        component="img"
        alt={'User Profile Picture: ' + name}
        image={imageUrl}
      />
      <CardContent>
        <Typography align="center" variant="h4" component="div">
          {name} de {country}
        </Typography>
        <Typography gutterBottom align="center" variant="h6" component="div">
          {occupation}
        </Typography>
        <Typography variant="h7" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions>

        {liked ?
          <MyFavourite color='error' onClick={changeLiked}/>
          
          :
          <MyFavouriteBorder color='error' onClick={changeLiked}/>
        }

      </CardActions>
    </Card>
  </>
  )
}

export default Testimonio
