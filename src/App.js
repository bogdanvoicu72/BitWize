import Body from "./Components/Body";
import Hedear from "./Components/Header";
import Style from './Style/rootStyle.module.css'
import Scope from "./Components/Scope";

function App() {
  return (
    <div className={Style.bgcolor}>

        <Hedear/>
        <Body/>
        <Scope/>
    </div>
  );
}

export default App;
