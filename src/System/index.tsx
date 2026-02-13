
import NavigationSidebar from "./Components/NavigationSidebar";
import Workspace from "./Components/Workspace";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";

function Launchpad() {
  

  return (
    <>
      <Header></Header>
      <NavigationSidebar>
      </NavigationSidebar>
      <Workspace><Dashboard /></Workspace>
    </>
  );
}

export default Launchpad;
