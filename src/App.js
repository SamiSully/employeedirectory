import React, { useEffect, useState } from "react";
import "./App.css";
import Employees from "./components/Employees/Employees";
import EmployeeItem from "./components/Employees/EmployeeItem";
import Navbar from "./components/Navbar/Navbar";
import Search from "./components/Search/Search";
import axios from "axios";
import API from "./utils/API";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@test.com",
      phone: "423-234-2443",
      location: "Edmonds, WA",
      position: "Software Engineer",
      birthday: "12.1.1982",
    },
    {
      id: 2,
      name: "George Frank",
      email: "george.frank@test.com",
      phone: "565-453-8845",
      location: "Seattle, WA",
      position: "Software Manager",
      birthday: "8.12.1965",
    },
    {
      id: 3,
      name: "Harriet Smith",
      email: "harriet.smith@test.com",
      phone: "678-688-7878",
      location: "Edmonds, WA",
      position: "Sales Representitive",
      birthday: "6.22.1979",
    },
    {
      id: 4,
      name: "Wayne Day",
      email: "wayne.day@test.com",
      phone: "234-444-1232",
      location: "Lynnwood, WA",
      position: "Intern",
      birthday: "11.21.1999",
    },
    {
      id: 5,
      name: "Leonard Boots",
      email: "leonard.boots@test.com",
      phone: "123-454-9900",
      location: "Seattle, WA",
      position: "Software Engineer",
      birthday: "5.4.1980",
    },
    {
      id: 6,
      name: "River Druppar",
      email: "River.Druppar@test.com",
      phone: "345-567-6456",
      location: "Shoreline, WA",
      position: "Front-End Developer",
      birthday: "2.26.1992",
    },
    {
      id: 7,
      name: "Dean Robinson",
      email: "dean.robinson@test.com",
      phone: "787-687-7777",
      location: "Mountlake Terrace, WA",
      position: "Receptionst",
      birthday: "4.01.1971",
    },
    {
      id: 8,
      name: "Maurice Beck",
      email: "maurice.beck@test.com",
      phone: "334-333-4554",
      location: "Brier, WA",
      position: "CEO",
      birthday: "12.09.1956",
    },
    {
      id: 9,
      name: "Ruben Byrd",
      email: "ruben.byrd@test.com",
      phone: "234-234-4234",
      location: "Bellvue, WA",
      position: "Sales Representitive",
      birthday: "7.30.1965",
    },
    {
      id: 10,
      name: "Crystal Phillips",
      email: "crystal.phillips@test.com",
      phone: "666-655-5656",
      location: "Seattle, WA",
      position: "Software Engineer",
      birthday: "3.19.1989",
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
      <Search />
      <div class="row justify-content-center buttons">
        <div class="col-sm-2">
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block"
            onClick={() => handleClick("name")}
          >
            {" "}
            name
          </button>
        </div>
        <div class="col-sm-2">
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block"
            onClick={() => handleClick("phone")}
          >
            phone
          </button>
        </div>
        <div class="col-sm-2">
          {" "}
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block"
            onClick={() => handleClick("email")}
          >
            email
          </button>
        </div>
        <div class="col-sm-2">
          {" "}
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block"
            onClick={() => handleClick("location")}
          >
            location
          </button>
        </div>
        <div class="col-sm-2">
          {" "}
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block"
            onClick={() => handleClick("position")}
          >
            department
          </button>
        </div>
        <div class="col-sm-2">
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block"
            onClick={() => handleClick("birthday")}
          >
            birthday
          </button>
        </div>
      </div>

      {employees &&
        employees.map((employee) => (
          <div class="row justify-content-center tableStyle">
            <div class="col-sm-2">{employee.name}</div>
            <div class="col-sm-2">{employee.phone}</div>
            <div class="col-sm-2">{employee.email}</div>
            <div class="col-sm-2">{employee.location}</div>
            <div class="col-sm-2">{employee.position}</div>
            <div class="col-sm-2">{employee.birthday}</div>
          </div>
        ))}
    </div>
  );
};

export default App;
