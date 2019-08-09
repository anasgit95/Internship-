import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table,Progress } from 'reactstrap';

class ButtonGroups extends Component {
  constructor(props) {
    super(props);

    this.state = {
          user:[],
 
    };
  }
  componentDidMount() {
  fetch('/api/user')
  .then(res=>res.json())
  .then(user=>this.setState({user},()=>console.log(' fetched..',user) ));
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
                
              
               
                  <tr>
                    <td>Aulus Agmundr</td>
                    <td>2012/01/21</td>
                    <td>2012/01/01</td>

                     <td>--</td>
                    <td>--</td>
                   <td>
                       <div className="clearfix">
                        <div className="float-left">
                          <strong>0%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2019 - Jul 10, 2019</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="warning" value="0" />
                    </td>
                  </tr>
                  
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
              
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
