import { useState, useRef, useCallback, useMemo } from "react";

function BookForm() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const titleRef = useRef(null);

  // Focus the input field when the button is clicked
  const focusTitle = () => {
    titleRef.current.focus();
  };

  // Memoized function to submit form
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!title || !author) return;
      setBooks([...books, { title, author }]);
      setTitle("");
      setAuthor("");
    },
    [books, title, author]
  );

  // Memoized computation of total books
  const totalBooks = useMemo(() => {
    console.log("Calculating total books...");
    return books.length;
  }, [books]);

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", textAlign: "center", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>Book Application Form</h2>

      {/* Book Form */}
      <form onSubmit={handleSubmit}>
        <input
          ref={titleRef}
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "8px", margin: "5px", width: "90%" }}
        />
        <input
          type="text"
          placeholder="Author Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{ padding: "8px", margin: "5px", width: "90%" }}
        />
        <button type="submit" style={{ padding: "8px 15px", margin: "5px", cursor: "pointer" }}>Add Book</button>
      </form>

      {/* Focus Input Button */}
      <button onClick={focusTitle} style={{ padding: "8px 15px", margin: "10px", cursor: "pointer" }}>Focus Title</button>

      {/* Book List */}
      <h3>Book List (Total: {totalBooks})</h3>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookForm;
