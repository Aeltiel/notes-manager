import Header from "components/Header";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Outlet />
    </div>
  );
}
