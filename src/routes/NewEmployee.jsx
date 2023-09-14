import { useDispatch } from "react-redux";
import {
  addEmployee,
  getRandomUser,
} from "../features/employees/employeeSlice";
const NewEmployee = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" id="first" placeholder="Förnamn" />
      <input type="text" id="last" placeholder="Efternamn" />
      <button
        onClick={() => {
          let first = document.querySelector("#first").value;
          let last = document.querySelector("#last").value;
          let data = {
            name: {
              first: first,
              last: last,
            },
          };
          dispatch(addEmployee(data));
        }}
      >
        Add employee
      </button>

      <button onClick={() => {
        dispatch(getRandomUser())
      }}>Add random employee</button>
    </div>
  );
};

export default NewEmployee;
