import './App.css';
// import Dropdown from './components/Dropdown';
// import Table from './components/Table';
import Main from './components/Main';

function App() {

  const alignCenter = {
    textAlign: 'center',
    border:'3px solid green',
    //color: 'blue',
    //lineHeight: 10,
    padding: '70px',
 }
 
  return (
    <div style={alignCenter} className='bg-color'>
      <h1>Book World</h1>
      {/* <Main></Main>*/}
      <Main/>
    </div>
  );
}

export default App;
