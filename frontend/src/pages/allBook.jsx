import React, { useState } from "react";
import axios from "axios";
import Wrapper from "../css/allBook";
import { Link, useLoaderData, Form } from "react-router-dom";

export async function loader() {
  const books = await axios.get(
    `https://teal-macaw-sock.cyclic.app/GetAllBooks`
  );
  return books.data;
}

export async function action({ request }) {
  const formData = await request.formData();
  const id = formData.get("id");
  await axios.delete(`https://teal-macaw-sock.cyclic.app/DeleteBook/${id}`);
  return null;
}

function allBook() {
  const books = useLoaderData();
  const [modal, setModal] = useState(false);
  let [bookID, setBookID] = useState();

  const toggleModal = (id) => {
    setModal(!modal);
    setBookID((bookID = id));
  };
  const confirmDeleteAndCloseModal = () => {
    setModal(!modal);
  };

  return (
    <Wrapper>
      <h1>All Book</h1>
      <Link to="/addbook" className="link-createbook">
        <button type="button" className="btn-createbook">
          Create Book
        </button>
      </Link>
      <table>
        <thead>
          <tr>
            <th align="center">#</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Telephone</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id}>
              <td align="center">{index + 1}</td>
              <td>{book.bookname}</td>
              <td>{book.author}</td>
              <td>{book.tel}</td>
              <td>
                <Link to={`/editbook/${book._id}`}>
                  <button type="button" className="link">
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <button
                  type="button"
                  className="btn-delete"
                  onClick={() => toggleModal(book._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <section className={modal ? "modal-overlay show" : "modal-overlay"}>
        <div className="modal">
          <h2>Do you want to Delete Book ?</h2>
          <Form method="post" className="form-inline">
            <input type="hidden" name="id" defaultValue={bookID} />
            <button
              type="submit"
              className="confirm-btn"
              onClick={confirmDeleteAndCloseModal}
            >
              Yes
            </button>
          </Form>
          <button type="button" className="close-btn" onClick={toggleModal}>
            No
          </button>
        </div>
      </section>
    </Wrapper>
  );
}

export default allBook;
