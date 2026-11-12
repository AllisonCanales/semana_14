// CatalogoAxios.jsx
// Catalogo de productos usando Axios
import { useState, useEffect } from 'react';
import axios from 'axios';
// Interceptor: se ejecuta antes de CADA peticion realizada con esta instancia
const clienteApi = axios.create({
baseURL: 'https://fakestoreapi.com',
});
clienteApi.interceptors.request.use((config) => {
console.log('Solicitud enviada a: ' + config.url);
return config;
});
function CatalogoAxios() {
const [productos, setProductos] = useState([]);
const [cargando, setCargando] = useState(true);
const [error, setError] = useState(null);
useEffect(() => {
async function cargarProductos() {
try {
// Axios ya entrega los datos parseados en .data
// y rechaza la promesa automaticamente ante errores HTTP
const respuesta = await clienteApi.get('/products');
setProductos(respuesta.data);
} catch (err) {
setError(err.message);
} finally {
setCargando(false);
}
}
cargarProductos();
}, []);
if (cargando) return <p>Cargando productos (Axios)...</p>;
if (error) return <p>Error: {error}</p>;
return (
<div>
<h2>Catalogo - Axios</h2>
<ul>
{productos.slice(0, 5).map((p) => (
<li key={p.id}>{p.title} - ${p.price}</li>
))}
</ul>
</div>
);
}
export default CatalogoAxios;