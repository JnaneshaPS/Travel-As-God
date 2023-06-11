import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper,Typography,useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import {Rating} from '@material-ui/lab';
import useStyles from './style';
import mapstyles from './mapstyles';
const Map = ({setCoordinates,setBounds,places,coordinate,setChildClicked}) => {
    const classes=useStyles();
    const isDesktop=useMediaQuery('(min-width:600px)')

const coordinates={lat:0,lng:0}

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
      bootstrapURLKeys={{key:'.process.env.googlemaps javascript api'}}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom={14}
      margin={[50,50,50,50]}
      options={{ disableDefaultUI: true, zoomControl: true, styles: mapstyles }}
      onChange={(e)=>{
        console.log(e);
        setCoordinates({lat:e.center.lat,lng:e.center.lng})
        setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
      }}
      onChildClick={(child)=>setChildClicked(child)}
      >
       {places?.map((place,i)=>{
        <div className={classes.markerContainer}>
        lat={Number(places.lattitude)}
        lng={Number(places.longitude)}
        key={i}

        isDesktop ?(
          <LocationOnOutlinedIcon color='primary' fontSize='large'/>
        ):(
          <Paper elevation={3} className={classes.paper}>
            <Typography className={classes.typography} variant='subtitle2' gutterBottom>
              {places.name}
            </Typography>
            <img className={classes.pointer}
            src={places.photo ? places.photo.images.large.url:<img src='resturant1.jpg' alt='resturant1'></img>}
            alt={places.name}
           />
           <Rating size='small' value={Number(places.Rating)} readOnly/>
          </Paper>
        )

        </div>
       })}

      </GoogleMapReact>
    </div>
  )
}

export default Map;
