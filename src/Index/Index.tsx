import AppHeader from "./components/Header";
import AppHerotxt from "./components/Herotxt";
import AppFunctions from "./components/Functions";
import AppHistory from "./components/History";
import AppPrices from "./components/Price";
import AppFooter from "./components/Footer";
import AppLogin from "./components/Login";
import { use } from "react";
import AppContext from "./context/AppContext";

function Index() {

  const {ModalLogin} = use(AppContext);

  return (
    <main>
      {ModalLogin && <AppLogin />}
      <AppHeader />
      <AppHerotxt />
      <AppFunctions />
      <AppHistory />
      <AppPrices />
      <AppFooter />
    </main>
  );
}

export default Index;
