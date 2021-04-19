import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles'

const AnnonsCard = ({ label, value, setValue }) => {
    const [varupris, set_varupris] = useState("");
    const [innehall, set_innehall] = useState("");
    const [rubrik, set_rubrik] = useState("");
    const [annonspris, set_annonspris] = useState("");
    const classes = useStyles();

    return (

        <Card className={classes.root}>
            <CardContent>
                <h2 label="Rubrik" value={varupris} setValue={set_varupris}>Rubrik</h2>
                <h3 label="Varupris" value={varupris} setValue={set_varupris}>Varupris</h3>
                <p label="Innehåll" value={innehall} setValue ={set_innehall}>Innehåll</p>
                <p label="Annonspris" value={annonspris} setValue ={set_annonspris}>Annonspris</p>

            </CardContent>
        </Card>
    )

}

export default AnnonsCard;