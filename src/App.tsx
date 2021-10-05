import Home from "./pages/Home";
import GlobalStyle from "./styles/global";
import { Toaster } from "react-hot-toast";
import { NotificationProvider } from "./context/NotificationsContext";
import { SummaryProvider } from "./context/SummaryContext";
function App() {
  return (
    <NotificationProvider>
      <SummaryProvider>
        <Home />
      </SummaryProvider>
      <Toaster />
      <GlobalStyle />
    </NotificationProvider>
  );
}

export default App;
