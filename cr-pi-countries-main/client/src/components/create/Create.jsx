import { useSelector } from "react-redux";
import "./create.css";

function Create() {
  const countriesArray = useSelector((state) => state.countries.countries);
  const countriesOrder = countriesArray
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div className="container">
      <form>
        <label>
          Nombre:
          <input type="text" value="" />
        </label>
        <label>
          Dificultad:
          <input type="text" value="" />
        </label>
        <label>
          Duración:
          <input type="text" value="" />
        </label>
        <label>
          Temporada:
          <input type="text" value="" />
        </label>

        <label>Países:</label>
        <div>
          <select multiple name="countries" id="countries">
            <option>Countries</option>
            {countriesOrder.map((country) => {
              return <option value={country.name}>{country.name}</option>;
            })}
          </select>
        </div>
        <button type="submit">Crear actividad turística</button>
      </form>
    </div>
  );
}

export default Create;
