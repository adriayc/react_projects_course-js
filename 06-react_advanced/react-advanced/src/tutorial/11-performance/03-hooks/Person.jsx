const Person = ({ id, name, removePerson }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button type="button" onClick={() => removePerson(id)}>
        Remove
      </button>
    </div>
  );
};

export default Person;
