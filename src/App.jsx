import AppRoutes from "./routes/AppRoutes"
import Login from "./pages/LoginPage"
import { useSelector } from 'react-redux';

function App() {
  const { adminId } = useSelector((state) => state.auth);
  return (
    <>
      {adminId ? (
        <>
          <AppRoutes />
        </>
      ) : (
        <Login />
      )}
    </>
  )
}

export default App
