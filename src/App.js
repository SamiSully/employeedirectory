import React, { useEffect, useState } from "react";
import "./App.css";
import Employees from "./components/Employees/Employees";
import EmployeeItem from "./components/Employees/EmployeeItem";
import Navbar from "./components/Navbar/Navbar";
import axios from "axios";

const App = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@test.com",
      phone: "423-234-2443",
      birthday: "12.1.1982",
    },
    {
      id: 2,
      name: "George Frank",
      email: "george.frank@test.com",
      phone: "565-453-8845",
      birthday: "8.12.1965",
    },
    {
      id: 3,
      name: "Harriet Smith",
      email: "harriet.smith@test.com",
      phone: "678-688-7878",
      birthday: "6.22.1979",
    },
  ]);

  const [sort, setSort] = useState(null);
  // state = {

  const populateEmployees = () => {
    return axios.get("https://randomuser.me/api/?results=20");
  };

  useEffect(() => {
    populateEmployees();
    setSort(false);
    setSort(true);
  }, [employees]);

  // componentDidMount() {
  //   fetch("https://randomuser.me/api/?results=20")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((result) => {
  //       console.log(result);
  //       this.setState({ result: result });
  //     });
  // }

  const handleClick = (key_to_sort) => {
    setSort(true);
    console.log("Clicked");

    let sorted = employees.sort((a, b) =>
      a[key_to_sort].localeCompare(b[key_to_sort])
    );
    console.log(sorted);
    setEmployees(sorted);
    setSort(key_to_sort);

    console.log(
      employees.sort((a, b) => a[key_to_sort].localeCompare(b[key_to_sort]))
    );
  };

  return (
    <div className="App">
      <Navbar />
      <button onClick={() => handleClick("name")}> name</button>
      <button onClick={() => handleClick("phone")}>phone</button>
      <button onClick={() => handleClick("email")}>email</button>

      {employees &&
        employees.map((employee) => (
          <div>
            <div>
              {employee.name} {employee.phone} {employee.email}
            </div>
          </div>
        ))}
    </div>
  );
};

export default App;
