import ButtonAction from "../../components/button-action/button-action";
import PropTypes from "prop-types";
import {
  counterDecrement,
  counterIncrement,
} from "../../store/actions/counter-actions";
import { useDispatch } from "react-redux";

const CounterInteraction = ({ step }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // Genere l'action
    const action = counterIncrement(step);
    // Envoi l'action au store
    dispatch(action);
  };
  const handleDecrement = () => {
    // Genration de l'action et envoi vers le store
    dispatch(counterDecrement(step)); // On voit le resultat de la fonction cad l'action
  };
  return (
    <div>
      <ButtonAction onClick={handleIncrement} direction="up" step={step} />
      <ButtonAction onClick={handleDecrement} direction="down" step={step} />
    </div>
  );
};

CounterInteraction.propTypes = {
  step: PropTypes.number,
};

CounterInteraction.defaultProps = {
  step: 1,
};

export default CounterInteraction;
