import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles'
import {
    getAnnonser
  } from "../../api/annonsApi";

const AnnonsCard = ({ label, value, setValue }) => {
    const [varupris, set_varupris] = useState("");
    const [innehall, set_innehall] = useState("");
    const [rubrik, set_rubrik] = useState("");
    const [annonspris, set_annonspris] = useState("");
    const classes = useStyles();

    const get_annonser = async (e) => {
        e.preventDefault();
        const data = await getAnnonser();
    
        set_varupris(data.ad_varupris);
        set_innehall(data.ad_innehall);
        set_rubrik(data.ad_rubrik);
        set_annonspris(data.ad_annonspris);
      };

    return (

        <Card className={classes.root}>
            <CardContent>
                <h2 label="Rubrik" value={rubrik} setValue={set_rubrik}>Rubrik</h2>
                <h3 label="Varupris" value={varupris} setValue={set_varupris}>Varupris</h3>
                <p label="Innehåll" value={innehall} setValue ={set_innehall}>Innehåll</p>
                <p label="Annonspris" value={annonspris} setValue ={set_annonspris}>Annonspris</p>
            </CardContent>
        </Card>
    )

}

export default AnnonsCard;