import { Employee } from "../features/employees/Employee";
import { EmployeeList } from "../features/employees/EmployeeList";


const Home = () => {
  return (
    <>
      <h2>List of employees:</h2>
      <EmployeeList />
      
    </>
  );
};

export default Home;
