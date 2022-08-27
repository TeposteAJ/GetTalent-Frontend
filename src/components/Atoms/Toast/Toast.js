import { MessageWrapper } from "./ToastStyle";

const colors = {
  default: "#173b5a",
  error: "#D84646",
  warning: "#1D95D6",
  success: "#0A1929",
};

const Toast = ({ children, color }) => {
  return <MessageWrapper color={colors[color]}>{children}</MessageWrapper>;
};

Toast.defaultProps = {
  color: "default",
};

export default Toast;