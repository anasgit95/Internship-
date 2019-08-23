import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table,Progress } from 'reactstrap';
import axios from 'axios'
class ButtonGroups extends Component {
    constructor(props) {
    super(props);

    this.state = {
     
        students:[]
    };

  
  }


  componentDidMount() {
  axios.get('/api/approuvees')
  .then((res)=>{
this.setState({students:res.data} );
console.log(this.state);
   })
}
  render() {
    return (
      <div className="animated fadeIn">


        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Combined All Table
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Etudiant </th>
                    <th>Date de début</th>
                    <th>Date de fin </th>
                    
                    <th>Encadrant </th>
                    <th>Projet</th>
                    <th>Status du projet</th>
                  </tr>
                  </thead>
                  <tbody>
                 {this.state.students.map(student=>
                 
                  <tr>
                    <td>{student.Student.firstname}</td>
                    <td>{student.start}</td>
                  <td>2012/01/01</td>

                    <td>Saleme ben Ammar </td>
                    <td>Encadrant</td>
                      <td>
                       <div className="clearfix">
                        <div className="float-left">
                          <strong>{student.percentage}</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="success" value={student.percentage} />
                    </td>
                  </tr>
                  )}
                 
                
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    );
  }
}







export default ButtonGroups;
