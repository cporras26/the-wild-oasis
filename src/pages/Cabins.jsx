import Heading from "../ui/Layout/Heading";
import Row from "../ui/Layout/Row";
import { useEffect, useState } from "react";
import { getCabins } from "../services/apiCabins.js";
import CabinTable from "../features/cabins/CabinTable.jsx";
import Button from "../ui/Button/Button.jsx";
import CreateCabinForm from "../features/cabins/CreateCabinForm.jsx";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />

        <Button onClick={() => setShowForm((show) => !show)}>
          Add new cabin
        </Button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
