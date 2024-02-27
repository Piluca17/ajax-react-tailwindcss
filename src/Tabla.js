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
              (categoria) => categoria.id === plato.category_id
            );
            const restaurante = restaurantes.find(
              (restaurante) => restaurante.id === plato.restaurant_id
            );
            return (
              <tr key={plato.id}>
                <td>{index + 1}</td>
                <td>{plato.name}</td>
                <td>{plato.description}</td>
                <td>{plato.price}</td>
                <td>{categoria.name}</td>
                <td>{restaurante.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
