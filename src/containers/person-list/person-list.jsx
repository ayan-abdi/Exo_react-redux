import { useDispatch, useSelector } from "react-redux";
import { AutoSizer, List } from "react-virtualized";
import { personRemove } from "../../store/actions/person-actions";
// l'utilisation de react vistualized remplace la methode sans bibliothèque avec le .map

const PersonList = () => {
  const count = useSelector((state) => state.person.count);
  const people = useSelector((state) => state.person.list);
  const dispatch = useDispatch(); //<= tjr le mettre dans un composant au niveau le plus haut.

  const PersonRow = ({ index }) => {
    const person = people[index];

    const handleDelete = () => {
      dispatch(personRemove(person.id));
    };

    return (
      <p key={person.id} style={{ margin: 0 }}>
        {person.prenom} {person.nom}
        <span onClick={handleDelete}></span>
      </p>
    );
  };
  return (
    <>
      <h3>List des personnes</h3>
      <AutoSizer disableHeight>
        {({ width }) => (
          <List
            height={100}
            rowCount={count}
            rowHeight={26}
            rowRenderer={PersonRow}
            width={width}
          />
        )}
      </AutoSizer>
    </>
  );
};
export default PersonList;

// const people = [
//   { id: 12545, prenom: "Asma", nom: "Hassan" },
//   { id: 12555, prenom: "Soumeya", nom: "Abdi" },
// ];
// la ligne en dessous est un composant mais aussi une fonction
