import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table,Progress } from 'reactstrap';

class ButtonGroups extends Component {
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
                    <td>Vishnu Serghei</td>
                    <td>2012/01/01</td>
                   <td>2012/01/01</td>

                    <td>Member</td>
                    <td>Staff</td>

                    <td>
                      <Badge color="success">Terminer</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Zbyněk Phoibos</td>
                    <td>2012/02/01</td>
                  <td>2012/01/01</td>

                    <td>Encadrant</td>
                    <td>Encadrant</td>
                      <td>
                       <div className="clearfix">
                        <div className="float-left">
                          <strong>50%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="success" value="50" />
                    </td>
                  </tr>
                  <tr>
                    <td>Einar Randall</td>
                    <td>2012/02/01</td>
                      <td>2012/01/01</td>

                     <td>--</td>
                    <td>--</td>
                  <td>
                       <div className="clearfix">
                        <div className="float-left">
                          <strong>90%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="success" value="90" />
                    </td>
                  </tr>
                  <tr>
                    <td>Félix Troels</td>
                    <td>2012/03/01</td>
                    <td>2012/01/01</td>

                    <td>Member</td>
                    <td>Monseiur </td>
                    <td>
                       <div className="clearfix">
                        <div className="float-left">
                          <strong>35%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="warning" value="35" />
                    </td>
                  </tr>
                  <tr>
                    <td>Aulus Agmundr</td>
                    <td>2012/01/21</td>
                    <td>2012/01/01</td>

                     <td>--</td>
                    <td>--</td>
                   <td>
                       <div className="clearfix">
                        <div className="float-left">
                          <strong>50%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="success" value="50" />
                    </td>
                  </tr>
                    <tr>
                    <td>Aulus Agmundr</td>
                    <td>2012/01/21</td>
                    <td>2012/01/01</td>

                    <td>Staff</td>
                    <td>Staff</td>

                   <td>
                       <div className="clearfix">
                        <div className="float-left">
                          <strong>20%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="danger" value="20" />
                    </td>
                  </tr>
                    <tr>
                    <td>Aulus Agmundr</td>
                    <td>2012/01/21</td>
                   <td>2012/01/01</td>

                    <td>Staff</td>
                    <td>M mm </td>
                    <td>
                       <div className="clearfix">
                        <div className="float-left">
                          <strong>50%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="success" value="50" />
                    </td>
                  </tr>
                    <tr>
                    <td>Aulus Agmundr</td>
                    <td>2012/01/21</td>
                    <td>2012/01/01</td>

                    <td>Staff</td>
                    <td>Staff</td>
                   <td>
                       <div className="clearfix">
                        <div className="float-left">
                          <strong>20%</strong>
                        </div>
                        <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div>
                      </div>
                      <Progress className="progress-xs" color="warning" value="20" />
                    </td>
                  </tr>  
                  <tr>
                    <td>Aulus Agmundr</td>
                    <td>2012/01/21</td>
                    <td>2012/01/01</td>

                    <td>Staff</td>
                    <td>Staff</td>

                    <td>
                      <Badge color="success">Terminer</Badge>
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
