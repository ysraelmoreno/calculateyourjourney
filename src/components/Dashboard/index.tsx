import Summary from "../Summary";
import Table from "../Table";
import { DashboardContainer } from "./styles";

function Dashboard() {
  return (
    <DashboardContainer>
      <Summary />
      <Table />
    </DashboardContainer>
  );
}

export default Dashboard;
