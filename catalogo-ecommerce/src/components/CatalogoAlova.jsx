// CatalogoAlova.jsx
// Catalogo de productos usando Alova
import { useRequest } from 'alova/client';
import { obtenerProductos } from '../api/alovaInstance';
function CatalogoAlova() {
// useRequest ya entrega loading, error y data gestionados
// automaticamente, incluyendo cache de la peticion GET
const {
loading: cargando,
data: productos = [],
error,
} = useRequest(obtenerProductos);
if (cargando) return <p>Cargando productos (Alova)...</p>;
if (error) return <p>Error: {error.message}</p>;
return (
<div>
<h2>Catalogo - Alova</h2>
<ul>
{productos.slice(0, 5).map((p) => (
<li key={p.id}>{p.title} - ${p.price}</li>
))}
</ul>
</div>
);
}
export default CatalogoAlova;