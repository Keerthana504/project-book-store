import Dropdown from "./Dropdown";
import Card from "./Card";
import { useState } from "react";

function Main(props) {
  const titles = {
    books: [
      "Great Gatsby",
      "Harry Potter",
      "Game of Thrones",
      "Warriors",
      "Explorer",
      "Tale of Two cities",
      "The Dairy of a Young Girl",
      "The War of the Worlds",
      "Four Past Midnight",
      "The Night Gardener",
      "The Passage",
      "House of Sand and Fog",
    ],
  };

  const tableHeader = {
    headers: [
      { head: "Title", colName: "title", sortable: true },
      { head: "Book Cover", colName: "cover", sortable: false },
      { head: "Author", colName: "author", sortable: false },
      { head: "Published", colName: "published", sortable: false },
    ],
  };
  var showTable = false;

  // url to access covers - https://covers.openlibrary.org/b/$key/$value-$size.jpg
  // eg: https://covers.openlibrary.org/b/isbn/9780385533225-M.jpg

  const tableData = [{}];

  //console.log("Main header ",  tableHeader);

  // function userTitle(title){
  //     title = document.getElementById('title');
  //     console.log("two");
  //   }

  //React hooks

  const [book, onSelectedTitle] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // three ways to make API calls in react
  // XMLHttpRequest
  // //  function handleClick() {
  //     const xhr = new XMLHttpRequest();
  //     xhr.open('GET', 'https://api.example.com/data');
  //     xhr.onload = function() {
  //       if (xhr.status === 200) {
  //         setData(JSON.parse(xhr.responseText));
  //       }
  //     };
  //     xhr.send();
  //   }
  //Fetch API
  // The Fetch API is a modern, promise-based API for making HTTP requests in JavaScript.
  //It provides a simple and flexible interface for making GET, POST, PUT, and DELETE requests and handling the response from the server.
  //Axios

  function userTitle(title) {
    console.log("one");
    onSelectedTitle(title);
    var searchTitle = title.split(" ").join("+");
    console.log("selected book ", searchTitle.split(" ").join("+"));
    fetch(`https://openlibrary.org/search.json?q=${searchTitle}`)
      .then((response) => response.json())
      .then((data) => {
        var res = data;
        // const bookList =[];
        setSearchResults(data);
        // data.docs.map((item)=>{
        //     console.log(item)
        //     let title  = item.title,
        //     item.author_name
        //     item.first_publish_year
        //     item.isbn[0]
        // });
        //bookList.push( title={title}, author={author} ,publish={publish},isbn={isbn});
        console.log(tableData);
        console.log(res);
        showTable = true;
        console.log(showTable);
      })
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <meta
        name="viewport"
        content="width=device-width, maximum-scale=5"
      ></meta>
      <div className="mar-bottom">
        {/* <p>Please search for any title</p> */}
        <section className="main">
          <h1>Beyond Stories</h1>
          <Dropdown titles={titles} selectedTitle={userTitle}></Dropdown>
        </section>
        <p className="quote">
          A reader lives a thousand lives before he dies . . . The man who never
          reads lives only one -- George RR Martin
        </p>
      </div>
      <div>
        {/* <Table resData = {searchResults ? searchResults : null} heading={tableHeader}></Table> */}
        <Card resData={searchResults}></Card>
      </div>
      {/* <div><FirstTest/></div> */}
    </div>
  );
}

export default Main;
