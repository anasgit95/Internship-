import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class BrandButtons extends Component {
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
                    <th>Ecole </th>
                    <th>CV</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                  <tbody>
                <tr>
                    <td>Zbyněk Phoibos</td>
                    <td>2012/02/01</td>
                    <td>--</td>
                    <td>--</td>

                    <td>
                      <Badge color="danger">non selectionner</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Zbyněk Phoibos</td>
                    <td>2012/02/01</td>
                    <td>--</td>
                    <td>--</td>

                    <td>
                      <Badge color="danger">non selectionner</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Einar Randall</td>
                    <td>2012/02/01</td>
                    <td>--</td>
                    <td>--</td>
                    <td>
                      <Badge color="danger">non selectionner</Badge>
                    </td>
                  </tr>
                 <tr>
                    <td>Zbyněk Phoibos</td>
                    <td>2012/02/01</td>
                    <td>--</td>
                    <td>--</td>

                    <td>
                      <Badge color="danger">non selectionner</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Aulus Agmundr</td>
                    <td>2012/01/21</td>
                     <td>--</td>
                    <td>--</td>
                     <td>
                      <Badge color="danger">Non selectionner</Badge>
                    </td>
                  </tr>
                     <tr>
                    <td>Zbyněk Phoibos</td>
                    <td>2012/02/01</td>
                    <td>--</td>
                    <td>--</td>

                    <td>
                      <Badge color="danger">non selectionner</Badge>
                    </td>
                  </tr>
                    <tr>
                    <td>Zbyněk Phoibos</td>
                    <td>2012/02/01</td>
                    <td>--</td>
                    <td>--</td>

                    <td>
                      <Badge color="danger">non selectionner</Badge>
                    </td>
                  </tr>
                    <tr>
                    <td>Aulus Agmundr</td>
                    <td>2012/01/21</td>
                    <td>Staff</td>
                    <td>Staff</td>

                    <td>
                      <Badge color="danger">Non selectionner</Badge>
                    </td>
                  </tr>  
                   <tr>
                    <td>Zbyněk Phoibos</td>
                    <td>2012/02/01</td>
                    <td>--</td>
                    <td>--</td>

                    <td>
                      <Badge color="danger">non selectionner</Badge>
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

export default BrandButtons;
