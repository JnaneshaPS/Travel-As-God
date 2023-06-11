import React from 'react';
import { Box,Typography,Button,Card,CardMedia,CardActions,CardContent,Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';  
import useStyles from './style';
import resturant1 from '../img/resturant1.jpg';

const PlaceDetails = ({place,refProp,selected}) => {
    const classes=useStyles();

    if(selected) refProp?.current ?.scrollIntoView({behaviour:'smooth',block:'start'})

  return (
    <Card elevation={6}>
        <CardMedia
        style={{height:350}}
       image={place.photo ? place.photo.images.large.url:<img src='resturant1.jpg' alt='resturant1'></img>}
        />
        <CardContent>
            <Typography gutterBottom variant={'h5'}>{place.name}</Typography>   
            <Box display="flex" justifyContent={'space-between'}>
            <Rating size='small' value={Number(place.Rating)} readOnly/>
              <Typography gutterBottom variant='subtitle1'>out of {place.num_reviews} reviews</Typography>
            </Box>

            <Box display="flex" justifyContent={'space-between'}>
              <Typography variant='subtitle1'>Price</Typography>
              <Typography gutterBottom variant='subtitle1'>{place.price_level}</Typography>
            </Box>
            <Box display="flex" justifyContent={'space-between'}>
              <Typography variant='subtitle1'>Ranking</Typography>
              <Typography gutterBottom variant='subtitle1'>{place.ranking}</Typography>
            </Box>
       {place?.awards?.map((award)=>
       {
        <Box my={1} display="flex" justifyContent={'space-between'} alignItems="center">
          <img src={award.images.small} alt={award.display_name}/>
          <Typography variant='subtitle2' color='textSecondary'>{award.display_name}</Typography>
        </Box>
       })}
       {place?.cuisine.map(({name})=>{
        <Chip key={name} size="small" label={name} className={classes.chip}/>
       })}
       {place?.address &&(
        <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
          <LocationOnIcon/> {place.address}
        </Typography>
       )}
         {place?.phone  &&(
        <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
          <PhoneIcon/> {place.phone}
        </Typography>
         )}
         <CardActions>
          <Button size='small' color='primary' onClick={()=>window.open(place.web_url,'_blank')  
            }>Trip advtiser</Button>
            <Button size='small' color='primary' onClick={()=>window.open(place.website,'_blank')  
            }>WEbsite</Button>
         </CardActions>
        </CardContent>
    </Card>
  )
}

export default PlaceDetails
