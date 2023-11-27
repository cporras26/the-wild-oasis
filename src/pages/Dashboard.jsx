import Heading from "../ui/Layout/Heading";
import Row from "../ui/Layout/Row";
import DashboardLayout from "../features/dashboard/DashboardLayout.jsx";
import DashboardFilter from "../features/dashboard/DashboardFilter.jsx";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>

      <DashboardLayout />
    </>
  );
}

export default Dashboard;
