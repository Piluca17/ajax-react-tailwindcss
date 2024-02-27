function Tabla({categorias, platos, restaurantes}) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th>#</th>
            <th>Plato</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Restaurante</th>
          </tr>
        </thead>
        <tbody>
      
        </tbody>
      </table>
    </div>
  )
}

export default Tabla







