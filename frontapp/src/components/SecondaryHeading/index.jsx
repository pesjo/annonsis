
import useStyles from './styles'

const SecondaryHeading = ({text}) => {
const classes = useStyles();
return (<h2 className = {classes.textStyle}>{text}</h2>)

}

export default SecondaryHeading;


