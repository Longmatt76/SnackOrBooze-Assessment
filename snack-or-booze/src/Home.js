import React from "react";
import { Card, CardBody, CardText, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Home({snacks, drinks}) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <CardText>
            <h3>Snack options: {snacks.length}</h3>
            <h3>Drink options: {drinks.length}</h3>
            <p>Follow the navbar links to see what's on todays menu!</p>
          </CardText>
         <Link to={"/addItem"}><Button>Add Menu Item</Button></Link>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
