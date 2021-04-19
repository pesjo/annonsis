import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const RadioButtonsForetag = ({label, value, setValue}) => {

return (
  
    <FormControl component="fieldset">
      <FormLabel component="legend">{label}</FormLabel>
      <RadioGroup aria-label="annonsor" name={label}  onClick={setValue(value)}>
        <FormControlLabel value={true} control={<Radio />} label="Jag har annnonserat förut" />
        <FormControlLabel value={false} control={<Radio />} label="Jag har inte annonserat förut" />
      </RadioGroup>
    </FormControl>


)

}

export default RadioButtonsForetag;
