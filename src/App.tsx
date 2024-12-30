import { Dashboard } from "./components/app/dashboard";
import { MobileMenu } from "./components/header/menu-mobile";

function App() {
  return (
    <div className="bg-gray-900 h-screen">
      <MobileMenu />
      <Dashboard />
    </div>
  );
}

export default App;
