import { useState , useCallback , useTransition } from "react";
//import Sorting from "./Sorting";

function Table(props){


    const headings = props.heading? props.heading.headers : '';
    const response = props.resData ? props.resData.docs : '';
    //var bookList = response? processData(response): '';
    const bookList = response? processData(response): '';
    const [sortOrder, setSortOrder] = useState('asc');
    const [data, setData] =  useState(bookList);
    //const initialBookList = data.concat(bookList);
    const [isSorting, startTransition] = useTransition({ timeoutMs: 1000 });
    //console.log(initialBookList);


    function processData(res) {
        const tableData = [];
        res.forEach((item ) => {
            let title = item.title? item.title: '';
            let author = item.author_name ? item.author_name[0]:'';
            let publish = item.first_publish_year ? item.first_publish_year :'';
            let isbn = item.isbn && item.isbn.length? item.isbn[0]: '';
            const details = {author:author, publish:publish, title:title, isbn:isbn};
            tableData.push(details); 
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


    function sortData(column) {
        startTransition(() => {
            const sortedData = [...bookList].sort((a, b) => {
                if (a[column] < b[column]) {
                    return sortOrder === 'asc' ? -1 : 1;
                }
                if (a[column] > b[column]) {
                    return sortOrder === 'asc' ? 1 : -1;
                }
                return 0;
            });
            setData([...sortedData]);
            //data = sortedData;
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        });
    }


    console.log("list", bookList);
    console.log("table props", props);
    //console.log("table data", data);
    //console.log("table 1" , props);
    //console.log("table 2" , props.heading.headers);
    return (
        <div>{isSorting ? <p> Loading...</p> : null}
        <table className="my-table">
            <thead>
                <tr>
                    {bookList && 
                        headings.map((item) =>(
                            //<th key={item.head} onClick= {<Sorting column={item.head} data={bookList}></Sorting>}> 
                            <th key={item.head} onClick= {() => sortData(item.colName)} disabled={isSorting}> 
                            {item.head} {item.sortable ? sortOrder === 'asc' ? '▲' : '▼': '' }  </th> 
                        )) 
                    }
                </tr>
            </thead>
           {/*  onClick={getCover(item.isbn)} */}
                {bookList  && 
                    bookList.map((item, i) =>(
                        <tbody>
                            <tr key={i}>
                                <td >{item.title} </td>
                                <td> <img src={`https://covers.openlibrary.org/b/isbn/${item.isbn}-M.jpg`} alt = "Image not available" ></img> </td>
                                <td>{item.author} </td>
                                <td>{item.publish} </td>
                            </tr>
                        </tbody>
                    )) 
                }
        </table>
    </div>
    );
}

export default Table;