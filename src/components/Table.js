import { useState, useCallback, useTransition, useMemo, useRef } from "react";
//import Sorting from "./Sorting";

function Table(props) {
  var counter = 4;
  var headings = props.heading ? props.heading.headers : "";
  var response = props.resData ? props.resData.docs : "";
  //var bookList = response? processData(response): '';
  var bookList = [];
  bookList = response ? processData(response) : [];
  var showTableHead = bookList.length ? true : false;
  const [sortOrder, setSortOrder] = useState("asc");
  var column = "title";
  const thRef = useRef(null);
  const [isSorting, startTransition] = useTransition({ timeoutMs: 3000 });
  // console.log(initialBookList);

  function processData(res) {
    const tableData = [];
    res.forEach((item) => {
      let title = item.title ? item.title : "";
      let author = item.author_name ? item.author_name[0] : "";
      // const [data, setData] =  useState([]);
      let publish = item.first_publish_year ? item.first_publish_year : "";
      let isbn = item.isbn && item.isbn.length ? item.isbn[0] : "";
      const details = {
        author: author,
        publish: publish,
        title: title,
        isbn: isbn,
      };
      tableData.push(details);
      showTableHead = true;
    });
    //[...bookList].concat(tableData);
    return tableData;
  }

  // url to access covers - https://covers.openlibrary.org/b/$key/$value-$size.jpg
  // eg: https://covers.openlibrary.org/b/isbn/9780385533225-M.jpg

  // function getCover(val) {
  //     let url = `https://covers.openlibrary.org/b/isbn/${val}-M.jpg`;
  //     console.log(url);
  //     fetch(`url`)
  //     .then(response => response.json())
  //     .then(data => {
  //         var res = data;
  //     })
  //     .catch(error => console.error(error));
  //     return url;
  // }

  // const sortData = useCallback((column) => {
  //     // setData(unSortedData => [...unSortedData, bookList]);
  //     // console.log(unSortedData);
  //     const sortedData = [...unSortedData].sort((a, b) => {
  //         if (a[column] < b[column]) {
  //           return sortOrder === 'asc' ? -1 : 1;
  //         }
  //         if (a[column] > b[column]) {
  //           return sortOrder === 'asc' ? 1 : -1;
  //         }
  //         return 0;
  //       });
  //      // setData(sortedData);
  //       setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  //       setData(sortedData);
  //     }, [unSortedData]);

  const sortedList = useMemo(() => {
    //const initialBookList= data.concat(bookList);
    //setData(initialBookList);
    const sortedData = [...bookList].sort((a, b) => {
      if (a[column] < b[column]) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (a[column] > b[column]) {
        return sortOrder === "asc" ? 1 : -1;
      }
      return 0;
    });
    bookList = sortedData.length ? sortedData : [];
  }, [bookList]);

  // const sortData = () => {
  //    column = thRef.current.textContent;
  //   };

  function sortData(event) {
    // console.log("event", event);
    // event.preventDefault();
    //column = col;
    //column = event.currentTarget.__reactProps$e2b4ffk6ced.value;
    // startTransition(() => {
    // const sortedData = [...bookList].sort((a, b) => {
    //     if (a[column] < b[column]) {
    //         return sortOrder === 'asc' ? -1 : 1;
    //     }
    //     if (a[column] > b[column]) {
    //         return sortOrder === 'asc' ? 1 : -1;
    //     }
    //     return 0;
    // });
    // bookList = sortedData;
    //setData(sortedData);
    //data = sortedData;
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    // });
  }

  console.log("list", bookList);
  console.log("table props", props);
  //console.log("table data", data);
  //console.log("table 1" , props);
  //console.log("table 2" , props.heading.headers);
  return (
    <div>
      {isSorting ? <p> Loading...</p> : null}
      <table className="my-table">
        <thead>
          <tr>
            {bookList &&
              showTableHead &&
              headings.map((item) => (
                //<th key={item.head} onClick= {<Sorting column={item.head} data={bookList}></Sorting>}>
                <th
                  key={item.head}
                  onClick={item.sortable ? sortData : null}
                  disabled={isSorting}
                >
                  {item.head}{" "}
                  {item.sortable ? (sortOrder === "asc" ? "▲" : "▼") : ""}{" "}
                </th>
              ))}
          </tr>
        </thead>
        {/*  onClick={getCover(item.isbn)} */}
        {bookList &&
          bookList.map((item, i) => (
            <tbody>
              <tr key={i}>
                <td>
                  <img
                    src={`https://covers.openlibrary.org/b/isbn/${item.isbn}-M.jpg`}
                    alt="Image not available"
                  ></img>
                  {item.title}
                  {item.author}
                  {item.publish}
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
}

export default Table;
