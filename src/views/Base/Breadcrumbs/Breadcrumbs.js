import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade,Button} from 'reactstrap';
import { AppSwitch } from '@coreui/react'

class Breadcrumbs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="12">
             <Button href="http://localhost:3000/Alerts#/notifications/alerts"block color="primary">Ajouter Un projet</Button>

           </Col>
        </Row>
        
       <Row> 
       <p> </p>
       </Row>
        
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-success">
              <CardHeader>
                   Projet
                   <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a href="#" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                    {/*eslint-disable-next-line*/}
                
                  </div>  
              </CardHeader>
              <CardBody>
                Description du projet
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-danger">
              <CardHeader>
                Projet
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a href="#" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                    {/*eslint-disable-next-line*/}
                
                  </div>
              </CardHeader>
              <CardBody>
                Description du projet
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-warning">
              <CardHeader>
                Nom du projet
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a href="#" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                    {/*eslint-disable-next-line*/}
                
                  </div>
              </CardHeader>
              <CardBody>
                 Description du projet
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-success">
              <CardHeader>
                Nom du projet
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a href="#" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                    {/*eslint-disable-next-line*/}
                
                  </div>
              </CardHeader>
              <CardBody>
              Description du projet
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-warning">
              <CardHeader>
                Card title
               <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a href="#" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                    {/*eslint-disable-next-line*/}
                
                  </div>
              </CardHeader>
              <CardBody>
                Description du projet
              </CardBody>
            </Card>
          </Col>
           <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-success">
              <CardHeader>
                Nom du projet
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a href="#" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                    {/*eslint-disable-next-line*/}
                
                  </div>
              </CardHeader>
              <CardBody>
              Description du projet
              </CardBody>
            </Card>
          </Col>

        </Row>
         <Row>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-success">
              <CardHeader>
                   Projet
                   <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a href="#" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                    {/*eslint-disable-next-line*/}
                
                  </div>  
              </CardHeader>
              <CardBody>
                Description du projet
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-danger">
              <CardHeader>
                Projet
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a href="#" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                    {/*eslint-disable-next-line*/}
                
                  </div>
              </CardHeader>
              <CardBody>
                Description du projet
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-warning">
              <CardHeader>
                Nom du projet
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a href="#" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                    {/*eslint-disable-next-line*/}
                
                  </div>
              </CardHeader>
              <CardBody>
                 Description du projet
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-success">
              <CardHeader>
                Nom du projet
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a href="#" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                    {/*eslint-disable-next-line*/}
                
                  </div>
              </CardHeader>
              <CardBody>
              Description du projet
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-warning">
              <CardHeader>
                Card title
               <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a href="#" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                    {/*eslint-disable-next-line*/}
                
                  </div>
              </CardHeader>
              <CardBody>
                Description du projet
              </CardBody>
            </Card>
          </Col>
           <Col xs="12" sm="6" md="4">
            <Card className="text-white bg-success">
              <CardHeader>
                Nom du projet
                  <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a href="#" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                    {/*eslint-disable-next-line*/}
                
                  </div>
              </CardHeader>
              <CardBody>
              Description du projet
              </CardBody>
            </Card>
          </Col>

        </Row>
      </div>
    );
  }
}


export default Breadcrumbs;
