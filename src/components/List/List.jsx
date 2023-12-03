import React,{createRef, useEffect, useState} from 'react';
import { CircularProgress,Typography,Grid,InputLabel,MenuItem,FormControl,Select } from '@material-ui/core';
import useStyles from './style';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({places,childClicked,isLoading,type,setType,rating,setRating}) => {
   

    const[elRefs,setElRefs]=useState([]);

  
      useEffect(() => {
        setElRefs((refs) => Array(places).fill().map((_, i) => refs[i] || createRef()));
      }, [places]);

      

    const classes=useStyles();

  return (
    
    <div className={classes.container}>
   <Typography variant='h5' className={classes.marginTop}>Hotels,Resturants&Popular around you</Typography>
{isLoading ? (

  <div className={classes.loading}>
    <CircularProgress size='5rem'/>
    </div>
) :
(  

   <>
   <FormControl  className={classes.formControl}>
    <InputLabel>Type</InputLabel>
    <Select value={type} onChange={(e)=>setType(e.target.value)}>
        <MenuItem value='resturants'>Resturants</MenuItem>
        <MenuItem value='hotels'>hotels</MenuItem>
        <MenuItem value='popular'>popular places</MenuItem>
    </Select>
   </FormControl>
   <FormControl  className={classes.formControl}>
    <InputLabel>ratings</InputLabel>
    <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
        <MenuItem value={0}>All</MenuItem>
        <MenuItem value={3}>Above 3.0</MenuItem>
        <MenuItem value={4}>Above 4.0</MenuItem>
        <MenuItem value={4.5}>Above 4.5</MenuItem>
    </Select>
   </FormControl>
   <Grid container spacing={3} className={classes.list}>
    {places?.map(6
    (
      <Grid ref={elRefs[i]} key={i} item xs={12}>
      <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
    </Grid>        
               
            
    ))}
   </Grid>
   </>
)}
    </div>
  );
};

export default List;
