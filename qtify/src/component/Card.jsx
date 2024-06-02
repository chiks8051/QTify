import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";
import Typography from "@mui/material/Typography";


const CardHolder = ({ album }) => {
  return (
    <>
      <Card className={styles.card}>

        <CardActionArea className={styles.action}>

          <CardMedia
            className={styles.cardImg}
            component="img"
            height="170"
            image={album.image}
            alt={album.title}
          />
          <CardContent className={styles.cardContent}>

            <Chip
              className={styles.chips}
              label={`${album.follows} Followers`}
            />
          </CardContent>
        </CardActionArea>
        <Typography className={styles.title} variant="h5" component="div">
          {album.title}
        </Typography>
      </Card>
    </>
  );
};

export default CardHolder;
