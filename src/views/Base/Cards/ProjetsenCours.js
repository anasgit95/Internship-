import React, { Component } from 'react';
import { Badge, Card, CardBody, CardFooter, CardHeader, Col, Row, Collapse, Fade ,Button} from 'reactstrap';
import { AppSwitch } from '@coreui/react';
import axios from 'axios'
class Cards extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
        projects:[]
    };

  
  }
componentDidMount() {
  axios.get('/api/Encadrant')
  .then((res)=>{
this.setState({projects:res.data} );
console.log(this.state);
   })
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
         <Row> 
                             {this.state.projects.map(project=>

           <Col xs="12" sm="6" md="4">
            <Fade timeout={this.state.timeout} in={this.state.fadeIn}>
            <Card className="border-warning">
                <CardHeader>
                    {project.name}               
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
                     {project.description}
                  </CardBody>
                </Collapse>
              </Card>
            </Fade>
          </Col>
             
        )}           </Row>     

                    </Row>
      </div>
    );
  }
}

export default Cards;
