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
          {platos.map((plato, index) => {
            const categoria = categorias.find(
              (categoria) => categoria.categoriaID === plato.categoriaID
            );
            const restaurante = restaurantes.find(
              (restaurante) => restaurante.restauranteID === plato.restauranteID
            );
            return (
              <tr key={plato.ID}>
                <td>{index + 1}</td>
                <td>{plato.plato}</td>
                <td>{plato.descripcion}</td>
                <td>{plato.precio.toFixed(2)}€</td>
                <td>{categoria.categoria}</td>
                <td>{restaurante.restaurante}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
