import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FormHelperText } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 545,
    margin: '25px',
  },
});


function Menu() {
 
  const classes = useStyles();

  const [list, setList] = useState([])

  const getList = () => {
    axiosWithAuth()
      .get('https://grub-grub-backend.herokuapp.com/api/menu')
      .then(res => {
        console.log(res.data)
        setList(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <Grid container spacing={3}>
      {list.map((item => (
        <Grid item sx={12} sm={6} md={4} key={item.id}>
          <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt={item.title}
              height="140"
              image={item.itemImage}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {item.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Typography gutterBottom variant="h6" component="h6">
              Price: {item.price}
            </Typography>
          </CardActions>
        </Card>
    </Grid>
      )))}
    </Grid>
  );
}

export default Menu
