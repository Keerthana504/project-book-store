import Dropdown from "./Dropdown";
import Card from "./Card";
import Input from "./Input";
import { useEffect, useState } from "react";

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

  const offers = [
    "Free shipping on orders $50+",
    "4x Points*",
    "All books at least 50% off* list prices every day",
  ];

  const [offer, setOffer] = useState();

  useEffect(() => {
    let count = 0;
    const timer = setInterval(() => {
      setOffer(offers[count]);
      count = count + 1;
      if (count === 3) {
        count = 0;
      }
    }, 10000);
  }, []);

  // const tableHeader = {
  //   headers: [
  //     { head: "Title", colName: "title", sortable: true },
  //     { head: "Book Cover", colName: "cover", sortable: false },
  //     { head: "Author", colName: "author", sortable: false },
  //     { head: "Published", colName: "published", sortable: false },
  //   ],
  // };
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
  <i class="fa-thin fa-shop"></i>;

  return (
    <div>
      <div className="mar-bottom">
        {/* <p>Please search for any title</p> */}
        <section className="offer-banner">
          <a className="blink_me"> 20% off this holiday season</a>
        </section>
        <section className="header">
          <h1>Beyond Stories</h1>
          <h5>Your one stop shop for all kinds of books</h5>
        </section>
        <section className="banner">
          <p>{offer}</p>
          {/* <p> 4x Points* </p>
          <p>All books at least 50% off* list prices every day</p> */}
        </section>
        <section className="sign-in">
          <button className="sign-btn">Sign In</button>
          <div className="main">
            <Dropdown titles={titles} selectedTitle={userTitle}></Dropdown>
            <Input isSearch={true}></Input>
            <a>
              <i class="fa-light fa-cart-shopping"></i>
            </a>
          </div>
        </section>
        <nav>
          <ul>
            <li>
              <a>Books </a>
            </li>
            <li>
              <a>Young Adult </a>
            </li>
            <li>
              <a>Kids </a>
            </li>
            <li>
              <a> Toys and Activities</a>
            </li>
            <li>
              <a>Gifts </a>
            </li>
            <li>
              <a>Discount Aisle </a>
            </li>
          </ul>
        </nav>
        <section className="hero-banner">
          <div className="hero-sec">
            <span>EARN 4X THE POINTS</span>
            <p>ON ALL PURCHASES</p>
            <p> Imagine what rewards a $50 haul will score</p>
            <div className="buttons">
              <button className="btn btn-shop-all">Shop All books</button>
              <button className="btn btn-shop-study">
                Shop Study Materials
              </button>
            </div>
          </div>
          <div className="hero-img"> </div>
        </section>
        <section className="discount">
          <div>Price Drop Alert</div>
          <button> Shop the Discount Aisle</button>
        </section>

        {/* <p className="quote">
          A reader lives a thousand lives before he dies . . . The man who never
          reads lives only one -- George RR Martin
        </p> */}
      </div>

      <section className="books-data">
        {/* <Table resData = {searchResults ? searchResults : null} heading={tableHeader}></Table> */}
        <Card resData={searchResults}></Card>
      </section>
      <section className="kids-sec">
        DISCOVER MORE KIDS' BOOKS <button>Shop All Kids Books </button>
      </section>

      <section className="new-sec">
        <div>
          <p>NEW Marvel Comics</p>
          <p>Get in on out-of-this-world savings!</p>
          <a>View All</a>
        </div>
        <div>
          <p> Bestselling Biographies </p>
          <p>Chart-topping life stories you won't want to miss.</p>
          <a>View All</a>
        </div>
      </section>
      <section className="trending-sec">
        <p>TRENDING CATEGORIES</p>
        <div>
          <button>Staff Picks </button>
          <button>Mystery </button>
          <button>Cook Books </button>
        </div>
      </section>
      <section className="testimonials">
        <div> Tesiminials...</div>
      </section>
      <section className="donations">
        <div>
          <p> Love Free Books?</p>
          <p>
            So Do We. Join our loyalty program and earn points for every book
            you buy.
          </p>
          <p>Then, you can redeem those points for even more books! </p>
          <p>It's like a never-ending cycle of literary joy.</p>

          <button> Join Now</button>
        </div>
        <div className="referral">
          <div>
            <p> Friends With Benefits </p>
            <p>Nothing's better to bond over than free books.</p>
            <p>
              Refer your friends and you'll both receive $5 in rewards. It's a
              win-win!
            </p>
            <button>Refer a friend</button>
          </div>
        </div>
      </section>
      <section className="newsletter">
        <p>Be the First to Know </p>
        <p>The best of Book Outlet delivered straight to your inbox</p>
        <p>
          Sign up to get $5 off your next purchase of $25+, plus be the first to
          know about exclusive offers, new arrivals, and more.
        </p>
        <Input isSubscribe={true}></Input>
      </section>
      <section className="footer">
        <footer></footer>
      </section>
    </div>
  );
}

export default Main;
