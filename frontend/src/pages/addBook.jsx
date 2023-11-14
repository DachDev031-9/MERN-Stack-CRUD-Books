import React from "react";
import Wrapper from "../css/addBook";
import { Form, redirect, Link } from "react-router-dom";
import axios from "axios";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  await axios.post(`https://teal-macaw-sock.cyclic.app/CreateBook`, data);
  return redirect("/allbook");
}

function addBook() {
  return (
    <Wrapper>
      <h1>Create Book</h1>
      <Link to="/allbook" className="link-back">
        <button type="button" className="btn-back">
          Back
        </button>
      </Link>
      <Form method="post">
        <input type="text" placeholder="Book Name" name="bookname" required />
        <br />
        <input type="text" placeholder="Author" name="author" required />
        <br />
        <input type="text" placeholder="Telephone" name="tel" required />
        <br />
        <button type="submit" className="btn-submit">
          Create
        </button>
        <button type="reset" className="btn-reset">
          Reset
        </button>
      </Form>
    </Wrapper>
  );
}

export default addBook;
