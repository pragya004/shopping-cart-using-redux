import React from "react";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import { useDispatch } from "react-redux";
import { setCategory } from "../actions/action";

function Categories() {
  const dispatch = useDispatch();

  return (
    <Container className="w-25 m-4">
      <ListGroup>
        <ListGroupItem action onClick={() => dispatch(setCategory("all"))}>
          All
        </ListGroupItem>
        <ListGroupItem action onClick={() => dispatch(setCategory("fruit"))}>
          Fruit
        </ListGroupItem>
        <ListGroupItem
          action
          onClick={() => dispatch(setCategory("vegetable"))}
        >
          Vegetable
        </ListGroupItem>
        <ListGroupItem action onClick={() => dispatch(setCategory("dairy"))}>
          Dairy
        </ListGroupItem>
        <ListGroupItem action onClick={() => dispatch(setCategory("bakery"))}>
          Bakery
        </ListGroupItem>
        <ListGroupItem action onClick={() => dispatch(setCategory("vegan"))}>
          Vegan
        </ListGroupItem>
      </ListGroup>
    </Container>
  );
}

export default Categories;
