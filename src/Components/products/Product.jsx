import { useState } from "react";
import ShippingForm from "../ShippingForm";
import './product.css'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      width: "300px",
    },
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  title: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  price: {
    fontSize: "1.2rem",
    marginBottom: theme.spacing(1),
  },
  description: {
    fontSize: "1rem",
    marginBottom: theme.spacing(2),
  },
  buyBtn: {
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "#0069d9",
    },
  },
}));

export default function Product(props) {
  const classes = useStyles();
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
   setShowForm(!showForm)
  };

  const handleExit = () => {
    setShowForm(false);
  };

  return (
    <Card  className={`productCard ${classes.card} `}>
      <CardMedia
        className={classes.cardMedia}
        image={props.image}
        title={props.nameGeo}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h6" className={classes.title}>
          {props.nameGeo}
        </Typography>
        <Typography variant="subtitle1" className={classes.price}>
          {props.price + "₾"}
        </Typography>
        <Typography variant="body1" className={classes.description}>
          {props.descriptionGeo}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.buyBtn}
          onClick={handleClick}
        >შეძენა</Button>
        {showForm && <ShippingForm onExit={handleExit} />}
      </CardContent>
    </Card>
  );
}
