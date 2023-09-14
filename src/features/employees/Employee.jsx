export const Employee = (props) => {
  return (
    <li>
      <strong>
        {props.name.first} {props.name.last}{" "}
      </strong>
    </li>
  );
};
