import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import MyRoutes from "./routes/MyRoutes";

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  console.log(isAuthenticated);
  return (
    <>
      <BrowserRouter>
        <div className="bg-black">
          <MyRoutes />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
