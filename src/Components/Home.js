import React from "react";
import Categories from "./Categories";
import MenuItems from "./MenuItems";
import { Container } from "reactstrap";
function Home() {
  return (
    <Container className="d-flex flex-row m-4">
      <Categories />
      <MenuItems />
    </Container>
  );
}

export default Home;
