import { useState, useEffect } from 'react';

function CatalogoFetch() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controlador = new AbortController();

    fetch('https://fakestoreapi.com/products', {
      signal: controlador.signal
    })
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error('Error HTTP: ' + respuesta.status);
        }
        return respuesta.json();
      })
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setCargando(false);
        }
      });

    return () => controlador.abort();
  }, []);

  if (cargando) return <p>Cargando productos (Fetch)...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Catalogo - Fetch API</h2>
      <ul>
        {productos.slice(0, 5).map((p) => (
          <li key={p.id}>{p.title} - ${p.price}</li>
        ))}
      </ul>
    </div>
  );
}
export default CatalogoFetch;