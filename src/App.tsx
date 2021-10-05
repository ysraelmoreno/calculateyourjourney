import Home from "./pages/Home";
import GlobalStyle from "./styles/global";
import { Toaster } from "react-hot-toast";
import { NotificationProvider } from "./context/NotificationsContext";
function App() {
  return (
    <NotificationProvider>
      <Home />
      <Toaster />
      <GlobalStyle />
    </NotificationProvider>
  );
}

export default App;
