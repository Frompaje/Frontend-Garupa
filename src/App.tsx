import { Dashboard } from "./components/app/dashboard";
import { Providers } from "./providers";

function App() {
  return (
    <Providers>
      <div className="bg-gray-900 h-screen">
        <Dashboard />
      </div>
    </Providers>
  );
}

export default App;
