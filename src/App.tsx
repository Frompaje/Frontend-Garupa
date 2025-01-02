import { BrowserRouter } from "react-router-dom";
import { Dashboard } from "./components/app/dashboard";
import { Providers } from "./providers";

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <div className="bg-gray-900 h-screen">
          <Dashboard />
        </div>
      </Providers>
    </BrowserRouter>
  );
}

export default App;
