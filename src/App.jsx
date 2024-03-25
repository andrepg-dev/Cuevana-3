import { AppRoutes } from './Router';
import { MenuBarComponent } from './components/menubar/menubar';

function App() {
  return (
    <>
      <MenuBarComponent />
      <AppRoutes />
      <footer className="w-full p-16 flex justify-center opacity-60 text-center text-sm text-white">
        Creada con por <a href="https://andrepg.me" className='underline ml-2' target='_blank'>@andre  - 2023</a>
      </footer>
    </>
  );
}

export default App;
