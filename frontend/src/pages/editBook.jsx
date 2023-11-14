import React, { useState } from "react";
import Wrapper from "../css/addBook";
import { Link, Form, useLoaderData, redirect } from "react-router-dom";
import axios from "axios";

export async function loader({ params }) {
  const books = await axios.post(
    `https://teal-macaw-sock.cyclic.app/GetBook/${params.id}`
  );
  return books.data;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  await axios.patch(
    `https://teal-macaw-sock.cyclic.app/UpdateBook/${params.id}`,
    data
  );
  return redirect("/allbook");
}

function editBook() {
  const book = useLoaderData();
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const confirmDeleteAndCloseModal = () => {
    setModal(!modal);
  };

  return (
    <Wrapper>
      <h1>Edit Book</h1>
      <Link to="/allbook" className="link-back">
        <button type="button" className="btn-back">
          Back
        </button>
      </Link>
      <Form method="post">
        <input
          type="text"
          placeholder="Book Name"
          name="bookname"
          defaultValue={book.bookname}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Author"
          name="author"
          defaultValue={book.author}
          required
        />
        <br />
        <input
          type="text"
          placeholder="Telephone"
          name="tel"
          defaultValue={book.tel}
          required
        />
        <br />
        <button type="button" className="btn-submit" onClick={toggleModal}>
          Update
        </button>

        <section className={modal ? "modal-overlay show" : "modal-overlay"}>
          <div className="modal">
            <h2>Do you want to update book data ?</h2>
            <button
              type="submit"
              className="confirm-btn"
              onClick={confirmDeleteAndCloseModal}
            >
              Yes
            </button>
            <button type="button" className="close-btn" onClick={toggleModal}>
              No
            </button>
          </div>
        </section>
      </Form>
    </Wrapper>
  );
}

export default editBook;
