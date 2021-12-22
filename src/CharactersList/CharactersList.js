import React, { useEffect, useState } from "react";
import { 
  Grid, 
  Card, 
  CardContent,
  CircularProgress,
  Typography
} from "@material-ui/core";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ({
  CharactersContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px"
  },
  card: {
    '&:hover': {
      backgroundColor: '#5e5e5e54'
    },
  },
  cardMedia: {
    margin: "auto",
    objectFit: "fill",
    height: "400px !important"
  },
  cardContent: {
    textAlign: "center"
  }
})

const CharactersList = props => {
  const { history } = props;
  const classes = useStyles();
  const [charactersData, setCharactersData] = useState({});

  // getting characters data
  useEffect(() => {
    axios
    .get('https://www.breakingbadapi.com/api/characters')
    .then(function (response) {
      const { data } = response;
      const newCharactersData = {};
      data.forEach((character, index) => {
        newCharactersData[index + 1] = {
          char_id: index + 1,
          name: character.name,
          sprite: character.img
        };
      });
      setCharactersData(newCharactersData);
    });
  }, []);

  // characters card function
  const getCharactersCard = (charactersId) => {
    const { char_id, name, sprite } = charactersData[charactersId];

    return (
      <Grid item xs={12} sm={6} md={4} lg={3} key={charactersId}>
        <Card onClick={() => history.push(`${char_id}`)} className={classes.card}>
          <img
          alt="characters"
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

  // main function
  return (
    <>
      {charactersData ? (
        <Grid container spacing={10} className={classes.CharactersContainer}>
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