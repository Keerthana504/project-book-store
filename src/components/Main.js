
import Dropdown from "./Dropdown";
import Table from "./Table";
import { useState } from "react";

function Main(props) {
    
    const titles = {
        "books" : [        
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
            "House of Sand and Fog"
        ]
    }
    const tableHeader = {
        "headers": [
            { head: "Title", colName: "title", sortable: true },
            { head: "Book Cover", colName: "cover", sortable: false },
            { head: "Author", colName: "author", sortable: false },
            { head: "Published", colName: "published", sortable: true },
        ]
    } 
    var showTable = false;

    // url to access covers - https://covers.openlibrary.org/b/$key/$value-$size.jpg
    // eg: https://covers.openlibrary.org/b/isbn/9780385533225-M.jpg

    const tableData = [{}];

    //console.log("Main header ",  tableHeader);

    // function userTitle(title){
    //     title = document.getElementById('title');
    //     console.log("two");
    //   }

    const [book , onSelectedTitle] =  useState('');
    const [searchResults, setSearchResults] = useState([]);
    
      function userTitle(title) {
        console.log("one");
        onSelectedTitle(title);
        var searchTitle = title.split(' ').join('+');
        console.log("selected book ", searchTitle.split(' ').join('+'));
        fetch(`http://openlibrary.org/search.json?q=${searchTitle}`)
        .then(response => response.json())
        .then(data => {
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
        .catch(error => console.error(error));
      }
          
    return (
        
        <div>
            <div className="mar-bottom">
                {/* <p>Please search for any title</p> */}
                <Dropdown titles={titles} selectedTitle = {userTitle}></Dropdown>
            </div>
            <div> 
                    <Table resData = {searchResults ? searchResults : null} heading={tableHeader}></Table>
                {/* <Table tableData={tableData} resData = {searchResults} heading={tableHeader}></Table> */}
            </div>
        </div>
    );
}

export default Main;