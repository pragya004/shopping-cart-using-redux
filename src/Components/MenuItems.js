import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenuData } from "../actions/action";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Badge,
  Container,
  Button,
  ButtonGroup,
} from "reactstrap";
import MenuSelector from "../Selectors/MenuSelector";
import { addCounter } from "../actions/action";
import { subtractCounter } from "../actions/action";

function MenuItems() {
  const dispatch = useDispatch();
  const menuselector = MenuSelector();
  const currentstate = useSelector((state) => state.menuReducer);

  useEffect(() => {
    if (currentstate.loading === true) {
      dispatch(fetchMenuData());
    }
  }, [currentstate.loading, dispatch]);

  function handleAdd(e) {
    dispatch(addCounter(e.target.id));
  }
  function handleSubtract(e) {
    dispatch(subtractCounter(e.target.id));
  }

  return (
    <Container>
      {menuselector.map((item) => (
        <ListGroup key={item.title}>
          <ListGroupItem className="m-4">
            <ListGroupItemHeading className="mb-4">
              {item.title}
            </ListGroupItemHeading>
            <Container className="d-flex flex-column align-items-start ml-0 pl-0">
              <Badge color="secondary" className="mb-4">
                {item.type}
              </Badge>
              <ListGroupItemText className="mb-4">
                {item.description}
              </ListGroupItemText>
              <Container
                fluid
                className="d-flex align-items-center justify-content-between p-0"
              >
                {item.counter === 0 ? (
                  <Badge color="light">$ {Math.round(item.price)}</Badge>
                ) : (
                  <Badge color="light">
                    $ {Math.round(item.price) * item.counter}
                  </Badge>
                )}
                {item.counter <= 0 ? (
                  <Button
                    color="primary"
                    id={item.title}
                    onClick={(e) => handleAdd(e)}
                  >
                    Add to cart
                  </Button>
                ) : (
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
                )}
              </Container>
            </Container>
          </ListGroupItem>
        </ListGroup>
      ))}
    </Container>
  );
}

export default MenuItems;
