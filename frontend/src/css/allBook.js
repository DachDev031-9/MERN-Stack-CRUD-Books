import styled from "styled-components";

const Wrapper = styled.div`
  h1 {
    text-align: center;
    margin: 2rem 0;
    font-size: 3rem;
  }
  .btn-createbook {
    padding: 0.5rem;
    margin-bottom: 1rem;
    font-size: 1rem;
    background-color: greenyellow;
    font-weight: bold;
    border-radius: 10px;
    border: solid 1px;
    cursor: pointer;
  }

  .link-createbook {
    display: block;
    text-align: end;
  }

  table,
  td,
  th {
    border: 1px solid black;
  }

  table {
    border-collapse: collapse;
    width: auto;
    align-items: center;
    margin-bottom: 2rem;
  }

  th {
    height: auto;
    background-color: blue;
    color: white;
    text-align: center;
  }
  th,
  td {
    padding: 0.5rem;
    font-size: 20px;
  }

  .btn-delete {
    background-color: red;
    color: white;
    font-size: 15px;
    border: solid 1px black;
    padding: 5px;
    font-weight: bold;
    border-radius: 10px;
    cursor: pointer;
  }
  .link {
    background-color: blue;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    border: solid 1px black;
    font-size: 15px;
    padding: 5px;
    text-decoration: none;
    cursor: pointer;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.35);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none; /* ทำให้ Modal-container ไม่สามารถคลิกหรือโต้ตอบได้ */
    opacity: 0; /* ทำการซ่อนตัว Modal ไว้ || ทำให้จางลง */
    /* visibility: hidden; ใช้วิธีการปรับความทึบ หรือ ซ่อนก็ได้ */
    transition: all 0.2s ease-in-out;
  }
  .modal {
    background: white;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    padding: 3rem 2rem;
    text-align: center;
  }
  h2 {
    margin-bottom: 2rem;
  }
  .show {
    opacity: 1;
    pointer-events: auto;
  }

  .confirm-btn {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    background-color: blue;
    font-weight: bold;
    border-radius: 10px;
    border: solid 1px;
    cursor: pointer;
    color: white;
  }

  .close-btn {
    padding: 0.5rem 1.8rem;
    font-size: 1rem;
    background-color: red;
    font-weight: bold;
    border-radius: 10px;
    border: solid 1px;
    cursor: pointer;
    margin-left: 1rem;
    color: white;
  }
  .form-inline {
    display: inline;
  }
`;

export default Wrapper;
