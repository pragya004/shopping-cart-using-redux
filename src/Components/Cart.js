import React from "react";
import { useDispatch } from "react-redux";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  Badge,
  Container,
  Button,
  ButtonGroup,
} from "reactstrap";
import CartItemsSelector from "../Selectors/CartItemsSelector";
import { addCounter } from "../actions/action";
import { subtractCounter } from "../actions/action";
import { removeItemCounter } from "../actions/action";
import { reset } from "../actions/action";

function Cart() {
  const dispatch = useDispatch();

  function handleAdd(e) {
    dispatch(addCounter(e.target.id));
  }
  function handleSubtract(e) {
    dispatch(subtractCounter(e.target.id));
  }

  const cartItemsSelected = CartItemsSelector();

  return (
    <>
      <Container>
        {cartItemsSelected.map((item) => (
          <ListGroup key={item.title}>
            <ListGroupItem className="m-4">
              <ListGroupItemHeading className="mb-4">
                {item.title}
              </ListGroupItemHeading>

              <Container
                fluid
                className="d-flex align-items-center justify-content-between p-0"
              >
                {item.counter === 0 ? (
                  <Badge color="light">
                    <h1>$ {item.price}</h1>
                  </Badge>
                ) : (
                  <Badge color="light">
                    $ {Math.round(item.price) * item.counter}
                  </Badge>
                )}
                <ButtonGroup>
                  <Button
                    color="primary"
                    id={item.title}
                    onClick={(e) => handleSubtract(e)}
                  >
                    -
                  </Button>
                  <Button disabled color="primary">
                    {item.counter}
                  </Button>
                  <Button
                    color="primary"
                    id={item.title}
                    onClick={(e) => handleAdd(e)}
                  >
                    +
                  </Button>
                </ButtonGroup>
                <Button
                  id={item.title}
                  color="danger"
                  onClick={(e) => dispatch(removeItemCounter(e.target.id))}
                >
                  remove
                </Button>
              </Container>
            </ListGroupItem>
          </ListGroup>
        ))}
      </Container>
      <Container>
        <Container className="d-flex flex-row justify-content-between m-2">
          <Button color="secondary" disabled>
            Total -{" $ "}
            {cartItemsSelected.reduce(
              (total, item) => Math.round(item.price) * item.counter + total,
              0
            )}
          </Button>
          {cartItemsSelected.length > 0 && (
            <div>
              <Button
                color="danger"
                className="mr-4"
                onClick={(e) => dispatch(reset())}
              >
                Empty Cart
              </Button>
              <Button color="primary" className="mr-3">
                Checkout
              </Button>
            </div>
          )}
        </Container>
      </Container>
    </>
  );
}

export default Cart;
