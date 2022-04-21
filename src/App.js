import "./App.css";
import MainHeader from "./containers/main-header/main-header";
import MainFooter from "./containers/main-footer/main-footer";
import CounterDisplay from "./containers/counter-display/counter-display";
import CounterInteraction from "./containers/counter-interaction/counter-interaction";
import CounterResetGlobal from "./containers/counter-reset/counter-reset";
import Formualaire from "./containers/formulaire/formulaire";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main>
        <CounterDisplay />
        <CounterInteraction />
        <CounterInteraction step={5} />
        <CounterResetGlobal />
        <br></br>
        <Formualaire />
      </main>
      <MainFooter />
    </div>
  );
}

export default App;
