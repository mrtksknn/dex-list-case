import React, { useState } from "react";
import { 
  AppBar, 
  Toolbar, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent,
  CircularProgress,
  Typography
} from "@material-ui/core";
import mockData from '../mockData';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ({
  CharactersContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px"
  },
  cardMedia: {
    margin: "auto",
    objectFit: "fill"
  },
  cardContent: {
    textAlign: "center"
  }
})

const CharactersList = () => {
  const classes = useStyles();
  const [charactersData, setCharactersData] = useState(mockData);

  const getCharactersCard = (charactersId) => {
    const { char_id, name } = charactersData[`${charactersId}`];
    const sprite = charactersData[`${charactersId}`].img;

    return (
      <Grid item xs={4} key={charactersId}>
        <Card>
          <img
            className = {classes.cardMedia}
            src={sprite}
            srcSet={sprite}
            style = {{ width: '100%', height: '200px'}}
          />
          <CardContent className={classes.cardContent}>
            <Typography>{`${char_id}. ${name}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar />
      </AppBar>
      {charactersData ? (
        <Grid container spacing={5} className={classes.CharactersContainer}>
          {Object.keys(charactersData).map(charactersId => 
              getCharactersCard(charactersId)
            )}
        </Grid>
      ) : (
        <CircularProgress />
      )}
      
    </>
  )
}

export default CharactersList;