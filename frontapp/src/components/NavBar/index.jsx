import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AllaAnnnonser from "../AllaAnnonser";
import App from "../../App";
import Home from '../../Home';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: 'black',
    alignContent: 'space-between'
    
    
  },
  links: {
    padding: theme.spacing(2),
    textAlign: 'right',
    alignContent: 'space-between',
    color: 'black',


    
  },
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>  
      
      <BrowserRouter>
      <nav>
      <ul>
      <li><Link to= '/index' className="navLinks"> <h1>
          SIGGE OCH PERNIS ANNONSSYSTEM
        </h1></Link></li>
       
   
        
          <li><Link to= '/add' className="navLinks"><h3>Lägg till annons</h3></Link></li>
          <li><Link to= '/all' className="navLinks"><h3>Se alla annonser</h3></Link></li>

        </ul>
      </nav>
      <Switch>
          <Route path="/add">
            <Home />
          </Route>
          <Route path="/all">
            <AllaAnnnonser />
          </Route>
   
          
          <Route path="/">
          <Home />
          </Route>
          <Route path="">
          <Home />

          </Route>
          
          
      
      </Switch>
      </BrowserRouter>
       

        
     

    </div>
  );
}