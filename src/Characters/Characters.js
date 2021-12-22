import React, { useState } from "react";
import mockData from '../mockData';
import { 
  Card, 
  CardContent, 
  Box, 
  CardMedia, 
  List,
  Button,
  ListItem, 
  ListItemText, 
  Typography 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ({
  item: {
    fontSize: '20px',
    width: 'inherit'
  },
  container: {
    height: '100vh', 
    display: 'flex', 
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    width: '100%',
    display: 'flex !important',
    padding: '20px !important',
    flexDirection: 'column !important',
    justifyContent: 'space-between !important',
    alignItems: 'inherit'
  }
})



const Characters = (props) => {
  
  const { match } = props;
  const { params } = match;
  const { characterId } = params;
  const classes = useStyles();
  const [character] = useState(mockData[`${characterId}`-1])


  const generateCharacterJSX = () => {
    const {
      name,
      char_id,
      birthday,
      img,
      occupation,
      status,
      nickname,
      appearance,
      portrayed,
      category
    } = character;
    
    const listItems = occupation.map((item, i) =>
        <li key={i}>{i+1}. {item}</li>
    );

    return (
      <div className={classes.container}>
        <Box >
          <Card style={{display: 'flex', borderRadius: '10px'}}>
            <CardMedia
              component="img"
              height="500"
              style={{width: '50%'}}
              image={img}
              alt={name}
            />
          <CardContent className={classes.content}>
            <Typography 
              gutterBottom 
              variant="h3" 
              component="div" 
              style={{textAlign: 'center'}}
            >
              {name}
            </Typography>
              <List>
                <ListItem divider>
                  <ListItemText 
                    primary="Id" 
                    secondary={char_id} 
                    className={classes.item}
                  />
                  <ListItemText 
                    primary="Birthday" 
                    secondary={birthday} 
                    className={classes.item}
                  />
                </ListItem>
                <ListItem divider>
                  <ListItemText 
                    primary="Occupation" 
                    secondary={occupation.length > 0 ? listItems : 'No job'} 
                    className={classes.item}
                  />
                  <ListItemText 
                    primary="Appearanced Episodes" 
                    secondary={appearance.join()} 
                    className={classes.item}
                  />
                </ListItem>
                <ListItem divider>
                  <ListItemText 
                    primary="Category" 
                    secondary={category} 
                    className={classes.item}
                  />
                  <ListItemText 
                    primary="Nickname" 
                    secondary={nickname} 
                    className={classes.item}
                  />
                </ListItem>
                  <ListItem>
                    <ListItemText 
                      primary="Status" 
                      secondary={status} 
                      className={classes.item}
                    />
                    <ListItemText 
                      primary="Portrayed" 
                      secondary={portrayed} 
                      className={classes.item}
                    />
                  </ListItem>
              </List>
              <a href="/" style={{textDecoration: 'none'}}>
                <Button 
                  variant="contained"
                  style={{backgroundColor: '#000', color: '#fff'}}
                >
                  Back
                </Button>
              </a>
          </CardContent>
        </Card>
      </Box>
      </div>
    )
  }

  return (<>
      {generateCharacterJSX()}
    </>
  )
}

export default Characters;