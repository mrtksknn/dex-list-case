import React from "react";
import { 
  AppBar, 
  Toolbar, 
  Grid, 
  Card, 
  CardMeadia, 
  CardContent 
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ({
  CharactersContainer: {
    padding: '20px 50px 0 50px'
  }
})

const getCharactersCard = () => {
  return (
    <Grid item xs={12} sm={4}>
      <Card>
        <CardContent>
          Hi
        </CardContent>
      </Card>
    </Grid>
  )
}

const CharactersList = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      <Grid container spacing={5} className={classes.CharactersContainer}>
        {getCharactersCard()}
        {getCharactersCard()}
        {getCharactersCard()}
        {getCharactersCard()}
        {getCharactersCard()}
        {getCharactersCard()}
      </Grid>
    </>
  )
}

export default CharactersList;