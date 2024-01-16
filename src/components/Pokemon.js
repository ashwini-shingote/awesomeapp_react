const Pokemon = (props) => {
  return (
    <div>
      <h2>Pokemon name: {props.name} </h2>
      <p>Weight: {props.weight} kg</p>
      <p>Awesome: {props.awesome ? "YES" : "nope, not really"}</p>
      <p>Terrifying: {props.terrrifying ? "Very" : "nah, lovable"}</p>
      <p>Abilities:{props.abilities}</p>
    </div>
  );
};

export default Pokemon;

/*
const Pokemon = () => {
  return (
    <div>
      <h2>Pokemon name: {"Charizard"}</h2>
      <p>weight: {90}</p>
      <p>Awesome: {true ? "YES" : "nope, not really"}</p>
      <p>Terrifying: {false ? "Very" : "nah, lovable"}</p>

      <p>Abilities:{["Blaze", "Solar power", "Tough claws", "Drought"]}</p>
    </div>
  );
};
export default Pokemon;

*/
// This gives an error can not interpolate
//<p>Types:{{ fire: true, water: false }}</p>
//<p>What about null? {null}</p>
//<p>And undefined? {undefined}</p>
