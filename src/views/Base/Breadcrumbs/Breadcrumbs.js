import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade,Button} from 'reactstrap';
import { AppSwitch } from '@coreui/react'

class Breadcrumbs extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
          customers:[],
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }
  componentDidMount() {
  fetch('/api/customers')
  .then(res=>res.json())
  .then(customers=>this.setState({customers},()=>console.log('customers fetched..',customers) ));
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
             <Button href="http://localhost:3000/Alerts#/notifications/project"block color="primary">Ajouter Un projet</Button>
             <br/>
           </Col>
        </Row>
        
        <Row>
  
                 <Row> 

         {this.state.customers.map(customer=>
           <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
            <Card className="border-danger">
                <CardHeader>
                  {customer.ProjectName}              
                   <div className="card-header-actions">
                    {/*eslint-disable-next-line*/}
                    <a href="#" className="card-header-action btn btn-setting"><i className="icon-settings"></i></a>
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-minimize" data-target="#collapseExample" onClick={this.toggle}><i className="icon-arrow-up"></i></a>
                    {/*eslint-disable-next-line*/}
                    <a className="card-header-action btn btn-close" onClick={this.toggleFade}><i className="icon-close"></i></a>
                  </div>
                </CardHeader>
                <Collapse isOpen={this.state.collapse} id="collapseExample">
                  <CardBody>
                                        {customer.ProjectDescription}              

                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
           
               )}
        </Row>
           
       </Row>
        
     

      </div>
    );
  }
}


export default Breadcrumbs;
