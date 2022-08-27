import { SLlabel, SIinput } from "./InputTextStyle";
import ToggleInput from "../../Form/ToggleInput";
const InputText = ({
  label,
  id,
  type,
  name,
  value,
  placeholder,
  pattern,
  isRequired,
  callback,
}) => {
  return (
    <SLlabel>
      {label}
      {type === "password" ? (
        <ToggleInput
          id={id}
          name={name}
          value={value}
          pattern={pattern}
          isRequired={isRequired}
          onChange={callback}
        />
      ) : (
        <SIinput
          id={id}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          pattern={pattern}
          required={isRequired}
          onChange={callback}
          autocomplete
        />
      )}
    </SLlabel>
  );
};

export default InputText;