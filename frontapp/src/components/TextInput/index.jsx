
import useStyles from './styles'

const TextInput = ({label, prenumerant_persnr}) => {
const classes = useStyles();
const [prenumerant_persnr, set_prenumerant_persnr] = useState("");


return (
    <div className = {classes.inputFieldStyles}>
      <label>{label}</label>
      <input
        type="text"
        name={label}
        defaultValue={prenumerant_persnr}
        value={prenumerant_persnr}
        required
        onChange={(e) => {
          set_prenumerant_persnr(e.target.value);
        }}
      />
    </div>)

}

export default TextInput;
