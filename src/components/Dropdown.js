//import { useState } from "react";

function Dropdown(props) {
  const items = props["titles"];
  //const [book , onSelectedTitle] =  useState('');

  // const [filteredYear, onSelectedTitle] = useState('2021');

  //this.setState({items: items.books});

  // function yearFilterHandler(selectedYear) {
  //     console.log("one");
  //     setFilteredYear(selectedYear);
  //   }

  function selectedTitleHandler(event) {
    console.log("one");
    props.selectedTitle(event.target.value);
    //console.log("selected book ", title);
  }

  //   function selectedYearHandler(event) {
  //     console.log("two");
  //     props.onSelectedYear(event.target.value);
  //   }

  return (
    <select className="dropdown" onChange={selectedTitleHandler}>
      {/* <option value="book1" onChange={selectedTitleHandler}> props[titles.books[0]]]</option> */}
      {/* {items ? items.books.map((item)=>{
                            <option value="book1" onChange={selectedTitleHandler} >item</option>
                        }):null} */}
      <option className="dropdown-content" value="Select" key="Select">
        Please select a Title to search
      </option>
      {
        //each item in the dropdown should have a key
        items.books.map((list) => (
          <option className="dropdown-content" value={list} key={list}>
            {list}
          </option>
        ))
      }
    </select>
  );
}

export default Dropdown;
