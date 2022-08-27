import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section>
      <h1>Alto vaquero, no tienes acceso aqui</h1>
      <br />
      <p>
        El rol que tienes actualmente no cuenta con los permisos para acceder a
        esta vista.
      </p>
      <div>
        <button onClick={goBack}>Go Back</button>
      </div>
    </section>
  );
};

export default Unauthorized;