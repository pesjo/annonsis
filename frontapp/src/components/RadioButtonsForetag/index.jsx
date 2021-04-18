import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const RadioButtonsForetag = ({label, value, setValue}) => {

return (

    <FormControl component="fieldset">
      <FormLabel component="legend">Har du annonserat hos oss tidigare?</FormLabel>
      <RadioGroup aria-label={label} name="gender1" value={value} onChange={setValue}>
        <FormControlLabel value="harAnnonserat" control={<Radio />} label="Jag har annnonserat förut" />
        <FormControlLabel value="harEjAnnonserat" control={<Radio />} label="Jag har inte annonserat förut" />
      </RadioGroup>
    </FormControl>


)

}

export default RadioButtonsForetag;
