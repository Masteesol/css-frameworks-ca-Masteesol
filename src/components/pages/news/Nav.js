import React from "react";
import Pagination from "react-bootstrap/Pagination";
import Nav from "react-bootstrap/Nav";

const pathName = window.location.search;
const params = new URLSearchParams(pathName);
const pageNum = params.get("page");

const pagesId = ["1", "2", "3", "4"];

const pageItems = pagesId.map((id, index) => {
  let status = "";
  if (pageNum === id) {
    status = "active";
  }
  if (pageNum === null && index === 0) {
    status = "active";
  }
  return (
    <Pagination.Item className={status} href={"news?page=" + id}>
      {parseInt(id)}
    </Pagination.Item>
  );
});

function CreatePagination() {
  return (
    <Nav>
      <Pagination>{pageItems}</Pagination>
    </Nav>
  );
}

export default CreatePagination;
