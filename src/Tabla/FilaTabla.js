function FilaTabla({ key,plato,restaurantes,categorias, index}) {

      const categoria = categorias.find(
        (categoria) => categoria.categoriaID === plato.categoriaID
      );
      const restaurante = restaurantes.find(
        (restaurante) => restaurante.restauranteID === plato.restauranteID
      );
      return (
        <tr key={plato.platoID}>
          <td>{index + 1}</td>
          <td>{plato.plato}</td>
          <td>{plato.descripcion}</td>
          <td>{plato.precio.toFixed(2)}€</td>
          <td>{categoria.categoria}</td>
          <td>{restaurante.restaurante}</td>
        </tr>
      );
    
  }


export default FilaTabla;
