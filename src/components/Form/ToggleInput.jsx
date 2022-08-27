import { useState } from "react";
import {
  InputPassword,
  ButtonPassword,
  ToggleWrapper,
} from "./ToggleInputStyle";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
export default function ToggleInput({ value, onChange, name, pattern }) {
  const [eye, setEye] = useState(false);
  const toggleEye = () => {
    setEye((prevState) => !prevState);
  };
  return (
    <ToggleWrapper>
      <InputPassword
        pattern={pattern? "^(?=.*[a-z])(?=.*[A-Z])(?=.*)(?=.*[~!-@#()$%^+=&*])[A-Za-z~!-@#()$%^+=&*]{6,20}$": "password"}
        type={eye ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
      />
      <ButtonPassword type="button" onClick={toggleEye}>
        {eye ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
      </ButtonPassword>
    </ToggleWrapper>
  );
}