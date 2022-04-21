import { useSelector } from "react-redux";

const CounterDisplay = () => {
  const { count, message } = useSelector((state) => state.counter); // counter contient message et count et nous on veut count seulement
  // state => state.counter.count :l'element(state) crée c'est pour dire que pour le state du store recupere moi le counter l'element count

  return (
    <div>
      <p>La valeur du compteur est de count {count}</p>
      <p>{message}</p>
    </div>
  );
};

export default CounterDisplay;
