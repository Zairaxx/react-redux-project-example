import { useSelector } from "react-redux";
import { Employee } from "./Employee";

export const EmployeeList = () => {
  const { employees } = useSelector((state) => state.employees);
  return (
    <div>
      <ul>
        {employees.map((employee, i) => (
          <Employee {...employee} />
        ))}
      </ul>
    </div>
  );
};
