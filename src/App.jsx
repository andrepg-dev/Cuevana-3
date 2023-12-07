import { AppRoutes } from './Router';
import { MenuBarComponent } from './components/menubar/menubar';

function App() {
  return (
    <>
      <MenuBarComponent />
      <AppRoutes />
      <footer className="w-full p-16 flex justify-center opacity-60 text-center text-sm text-white">
        Desarrollado por Andre {'</>'}
      </footer>
    </>
  );
}

export default App;
