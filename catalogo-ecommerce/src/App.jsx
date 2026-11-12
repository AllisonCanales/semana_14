// App.jsx
import CatalogoFetch from './components/CatalogoFetch';
import CatalogoAxios from './components/CatalogoAxios';
import CatalogoAlova from './components/CatalogoAlova';
function App() {
return (
<div style={{ display: 'flex', gap: '2rem' }}>
<CatalogoFetch />
<CatalogoAxios />
<CatalogoAlova />
</div>
);
}
export default App;