import "./App.css";
//import bgImage from '../images/Book-bg.jpg';
// import Dropdown from './components/Dropdown';
// import Table from './components/Table';
import Main from "./components/Main";

function App() {
  //inline styles
  const alignCenter = {
    textAlign: "center",
    //border:'3px solid green',
    //color: 'blue',
    //lineHeight: 10,
    padding: "70px",
  };
  // class is a reserved keyword in react
  return (
    <div style={alignCenter} className="bg-color">
      <p className="quote">
        A reader lives a thousand lives before he dies . . . The man who never
        reads lives only one -- George RR Martin
      </p>
      <h1>Book World</h1>
      {/* <Main></Main>*/}
      <Main />
    </div>
  );
}

export default App;
