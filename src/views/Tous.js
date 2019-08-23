import React, { Component } from 'react';
import axios from 'axios';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class ButtonDropdowns extends Component {
  constructor(props) {
    super(props);

    this.state = {
          customers:[],
    
    };
  }
  componentDidMount() {
  axios.get('/api/User')
  .then((res)=>{
this.setState({customers:res.data} );
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
                    <th>Date de demande</th>
                    <th>Encadrant </th>
                    <th>Projet</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                        {this.state.customers.map(customers=> 

                  <tr>
                    <td>{customers.firstname}</td>
                    <td>{customers.updatedAt}</td>
                    <td>Ammar Salem</td>
                    <td>no</td>

                    <td>
                      <Badge color="success">Terminer</Badge>
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

export default ButtonDropdowns;


	