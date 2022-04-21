import { useDispatch, useSelector } from "react-redux";
import { counterReset } from "../../store/actions/counter-actions";

const CounterResetGlobal = () => {
  // Récuperation de la valeur count contenu dans le state du store
  const count = useSelector((state) => state.counter.count);
  // Récuperation du "dispatch pour envoyer des actions dans le store"
  const dispatch = useDispatch();

  const handleReset = () => {
    // Envoi de l'action reset
    dispatch(counterReset());
  };

  return (
    <div>
      <button onClick={handleReset} disabled={count === 0}>
        Remise à Zero du compteur
      </button>
    </div>
  );
};

export default CounterResetGlobal;

// Quand on click sur le bouton reset une action est envoyée via le dispatcher dans l'even(handleReset)
