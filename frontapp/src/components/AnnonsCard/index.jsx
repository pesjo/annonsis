import React, { useEffect, useState } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles'
import {
    getAnnonser
  } from "../../api/annonsApi";

const AnnonsCard = ({ label, value1, value2, value3}) => {
    const [annonsor, setAnnonsor] = useState("")
    const classes = useStyles();

    useEffect(async () => {
        if(value3==40){
            setAnnonsor("Företagsannonsör")
        }
        else if(value3==0){
            setAnnonsor("Prenumerantannonsör")
        }
        
    
      }, []);

    return (

        <Card className={classes.root}>
            <CardContent>
                <h2>{label}</h2>
                <h3>Pris: {value1} kr</h3>
                <p>{value2}</p>
                <small> {annonsor}</small>
            </CardContent>
        </Card>
    )

}

export default AnnonsCard;