// On utilise pas le .jsx car on n'utilisera pas de composant react
// Type d'action
// import { nanoId } from "nanoid";
export const PERSON_ADD = "person/add";
export const PERSON_REMOVE = "person/remove";

// Genérateur d'object action
export const personAdd = ({ prenom, nom }) => ({
  // <= j'attend u objet qui contient le prenom et le nom

  type: PERSON_ADD,
  payload: {
    prenom,
    nom,
  },
});
export const personRemove = (personId) => ({
  //<= l'id suffit pour retirer les données qu'il nous faut
  type: PERSON_REMOVE,
  payload: personId,
});
