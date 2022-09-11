import FormStyle from "../../Styles/form";
import ButtonStyle from "../../Styles/Button";
import NewMovimentationStyle from "../../Styles/newMovimentation";
import { ThreeDots } from "react-loader-spinner";
import { useState, useContext } from "react";
import UserContext from "../context/userContext";
import { useNavigate, useLocation } from "react-router-dom";
import { updateRegistry } from "../../Services/axios";

export default function OutputUpdate() {
  const [isBlocked, setIsBlocked] = useState(false);
  const { user } = useContext(UserContext);
  const { state } = useLocation();
  const [form, setForm] = useState({
    value: "",
    description: "",
  });
  const navigate = useNavigate();
  function submitData(event) {
    event.preventDefault();
    if (isNaN(form.value)) {
      alert("Digite um valor válido");
      return;
    }
    setIsBlocked(true);
    updateRegistry(state.id, form, {
      headers: { Authorization: `Bearer ${user.token}` },
    })
      .then(() => {
        navigate("/principal-page");
      })
      .catch((answer) => {
        setIsBlocked(false);
        console.log(answer);
      });
  }
  function handleForm(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <NewMovimentationStyle>
      <FormStyle onSubmit={submitData}>
        <h1>Editar saída</h1>
        <input
          type="text"
          placeholder="Valor"
          name="value"
          required
          value={form.name}
          onChange={handleForm}
          readOnly={isBlocked}
        />
        <input
          type="text"
          placeholder="Descrição"
          name="description"
          required
          value={form.email}
          onChange={handleForm}
          readOnly={isBlocked}
        />
        <ButtonStyle type="submit" disabled={isBlocked}>
          {isBlocked ? (
            <ThreeDots color="#FFFFFF" height={80} width={80} />
          ) : (
            "Atualizar saída"
          )}
        </ButtonStyle>
      </FormStyle>
    </NewMovimentationStyle>
  );
}
