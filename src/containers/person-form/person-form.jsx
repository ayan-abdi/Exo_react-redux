import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";

const personSchema = yup
  .object({
    prenom: yup.string().trim().required().min(2),
    nom: yup.string().trim().required().min(2),
  })
  .required();

const PeronForm = () => {
  const dispatch = useDispatch(); //
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setFocus,
  } = useForm({
    resolver: yupResolver(personSchema),
    reValidateMode: "onSubmit",
  });

  const onSubmit = (data) => {
    dispatch({ type: "person/add", payload: data });
    // console.log(data);

    setFocus("prenom");
    reset();
  };

  return (
    <>
      {/* {console.log(errors)} <= ce log permet de nous dire d'avantage sur le render apres le return */}
      <h3>Formulaire d'ajout de personne</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" {...register("prenom")} placeholder="Prénom" />
          <input type="text" {...register("nom")} placeholder="Nom" />
        </div>
        <div>
          <button type="submit">Ajouter</button>
        </div>
        <div>
          {(errors.prenom || errors.nom) && (
            <span> Erreur dans le formulaire</span>
          )}
          {/* revoir la methode alternative fait par Aurelien */}
        </div>
      </form>
    </>
  );
};
export default PeronForm;
