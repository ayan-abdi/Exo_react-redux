// Constantes avec le nom des differentes actions
export const COUNTER_INCREMENT = "counter/increment";
export const COUNTER_DECREMENT = "counter/decrement";
export const COUNTER_RESET = "counter/reset";

// Méthode pour générer les objects "action"
// Ici les actions veulent dire tous que font les buttons (comme incremente, decremente reset ...)
export const counterIncrement = (value) => {
  //le fait d'exporter les constantes nous servira pour la suite
  // Créer l'object "action"
  return {
    type: COUNTER_INCREMENT,
    payload: value, // payload => signifie les données utils de mon counterIncrement à savoir la valeur de l'incrementation
  };
};

// -Fonction lambda qui cree l'action "Decrement"
export const counterDecrement = (value) => ({
  // ici on attend pas de return donc apres value on met ( et apres {})
  type: COUNTER_DECREMENT,
  payload: value,
});
// -Fonction lambda qui cree l'action "Reset"
export const counterReset = (value) => ({
  type: COUNTER_RESET,
});
