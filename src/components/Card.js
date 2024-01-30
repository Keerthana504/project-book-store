import React from "react";

const Card = (props) => {
  console.log("cards rendered");
  var counter = 4;
  var response = props.resData ? props.resData.docs : "";
  var bookList = response ? processData(response) : [];

  function processData(res) {
    const cardsData = [];
    res.forEach((item) => {
      const details = {
        author: item?.author_name?.[0],
        publish: item?.first_publish_year,
        title: item?.title,
        isbn: item?.isbn?.[0],
      };
      cardsData.push(details);
    });
    console.log("data processed");
    return cardsData;
  }

  return (
    <section className="card-section">
      {bookList &&
        bookList.map((book) => {
          return (
            <div className="card-container">
              <img
                src={`https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`}
                alt="Image not available"
              ></img>
              <p id="book-title">{book.title}</p>
              <p>
                {" "}
                {book.author} - {book.publish}
              </p>
              <p>
                <button class="btn-cart">Add to Card</button>
              </p>
            </div>
          );
        })}
    </section>
  );
};

export default Card;
