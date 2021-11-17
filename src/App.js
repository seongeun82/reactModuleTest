import logo from "./logo.svg";
import "./App.css";
import { Example, MonthPicker, RangePicker } from "./testComponents/datepicker";
import Radio_btn from "./testComponents/radio_btn/radio_btn";
import Counter from "./testComponents/useEffect/counter";
import GridExample from "./testComponents/AG_Grid/ag_grid_selection";
import { Grid } from "ag-grid-community";
import Tutorial from "./testComponents/AG_Grid/tutorial";
import ReactSpinners from "./testComponents/react-spinners";

function App() {
  return (
    <>
      <ReactSpinners />

      {/* <GridExample />
      <Tutorial /> */}
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Example />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>

    //     <Counter />

    //     <Radio_btn />

    //     <GridSelection />

    //     <MonthPicker />
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <RangePicker />
    //   </header>
    // </div>
  );
}

export default App;
