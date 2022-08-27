// import { Link } from "react-router-dom";
import { SFixedContainer } from "../components/Containers/styles";
import Form from "../components/Form/Form";

const SignIn = () => {
    const onSubmitHandler = (form, callback) => {
        console.log("Sign In submitted: ", form);
        callback();
    };

    return (
        <SFixedContainer size={275}>
            <Form
                title={"Sign In"}
                formArr={formArr}
                submitBtn={"Sign In"}
                onSubmit={onSubmitHandler}
                redirect={{
                    label: "No tienes cuenta?",
                    link: {
                        label: "Registro",
                        to: "/register",
                    },
                }}
               
            />
        </SFixedContainer>
    );
};

const formArr = [
    {
        label: "Email",
        name: "email",
        type: "text",
    },
    {
        label: "Contraseña",
        name: "Contraseña",
        type: "password",
    },
];

export default SignIn;