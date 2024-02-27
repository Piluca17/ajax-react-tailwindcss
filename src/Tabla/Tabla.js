import FilaTabla from "./FilaTabla";

function Tabla({ categorias, platos, restaurantes }) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Plato</th>
            <th scope="col">Descripción</th>
            <th scope="col">Precio</th>
            <th scope="col">Categoría</th>
            <th scope="col">Restaurante</th>
          </tr>
        </thead>
        <tbody>
          {/* body */}
          {/*Creamos un componente llamado FilaTabla que rellenará cada fila de la tabla */}
          {platos.map((plato, index) => (
          <FilaTabla
            key={plato.platoID}
            index={index}
            plato={plato}
            restaurantes={restaurantes}
            categorias={categorias}
          />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
