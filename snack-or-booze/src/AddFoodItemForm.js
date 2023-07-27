import React, { useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";


const AddFoodItemForm = ({addSnack, addDrink}) => {

  const history = useHistory();

  const INITIAL_STATE = {
    select: "",
    name: "",
    description: "",
    recipe: "",
    serve: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.select === "Snack") {
      await addSnack(
        formData.name,
        formData.description,
        formData.recipe,
        formData.serve
      );
    } else {
      await addDrink(
        formData.name,
        formData.description,
        formData.recipe,
        formData.serve
      );
    }
    setFormData(INITIAL_STATE);
    history.push("/");
  };
  
  return (
    <section className="col-md-8">
      <Form onSubmit={handleSubmit} style={{ backgroundColor: "grey", padding: `${20}px` }}>
        <h3 style={{ color: "black", textAlign: "center" }}>
          Add a new snack or drink!
        </h3>
        <FormGroup>
          <Label for="select">Select type:</Label>
          <Input
            id="select"
            name="select"
            type="select"
            value={formData.select}
            onChange={handleChange}
          > <option></option>
            <option>Snack</option>
            <option>Drink</option>
          </Input>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            placeholder="enter item name"
            value={formData.name}
            onChange={handleChange}
          />
          <Label for="description">Description:</Label>
          <Input
            type="text"
            name="description"
            placeholder="enter item description"
            value={formData.description}
            onChange={handleChange}
          />
          <Label for="recipe">Recipe:</Label>
          <Input
            type="text"
            name="recipe"
            placeholder="enter item recipe"
            value={formData.recipe}
            onChange={handleChange}
          />
          <Label for="serve">Serve:</Label>
          <Input
            type="text"
            name="serve"
            placeholder="enter how item is served"
            value={formData.serve}
            onChange={handleChange}
          />

          <Button style={{ backgroundColor: "black", marginTop: `${10}px` }}>
            Submit item
          </Button>
        </FormGroup>
      </Form>
    </section>
  );
};

export default AddFoodItemForm;
