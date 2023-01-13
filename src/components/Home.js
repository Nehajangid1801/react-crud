import React from "react";
import { Button, Table } from "react-bootstrap";
import Empolyees from "./Employees";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link,useNavigate} from "react-router-dom";

function Home() {

    let history = useNavigate();

    const handleEdit = (id, name, age) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', age);
        localStorage.setItem('Id', id);
    }

    const handleDelete= (id) =>{
        var index = Empolyees.map(function (e){
            return e.id
        }).indexOf(id);

        Empolyees.splice(index,1);
        history('/');
    }


  return (
    <>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead className="bg-dark text-white" >
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions   </th>
            </tr>
          </thead>
          <tbody>
            {Empolyees && Empolyees.length > 0
              ? Empolyees.map((item) => {
                  return (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Age}</td>
                      <td> 
                      <Link to={'/edit'} >
                      <Button className="bg-warning text-dark" onClick={()=> handleEdit(item.id, item.Name, item.Age)}>Edit</Button>
                      </Link>
                      &nbsp;
                      <Button className="bg-danger" onClick={()=> handleDelete(item.id)}>Delete</Button>
                      </td>
                    </tr>
                  );
                })
              : "No Data Availabe"}
          </tbody>
        </Table>
        <br/>
        <Link  to={'/create'}>
        <Button size="lg">Create</Button>
        </Link>
      </div>
    </>
  );
}

export default Home;
