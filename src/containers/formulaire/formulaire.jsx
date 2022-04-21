const Formualaire = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Prenom"></label>
          <input type="text" placeholder="Prenom" />
          <label htmlFor="Nom" placeholder="Nom"></label>
          <input type="text" placeholder="Nom" />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </>
  );
};

export default Formualaire;
