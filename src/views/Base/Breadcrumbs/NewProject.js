import React, { Component } from 'react';
import Modals from '../../Notifications/Modals/Modals'
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';
import axios from 'axios';

class NewProject extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      ProjectName:'',
      technlogie:'',
      description:'',
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }
handleChange(e) {
   this.setState({ [e.target.name] : e.target.value });
   console.log(this.state);  
}
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }
  handleSubmit(event) {
    event.preventDefault();
   const { ProjectName,description} = this.state;

    axios.post("api/formdata",{ProjectName,description})
    .then(response => {
     console.log('sent' );
    })
    .catch(error=>
    {
      console.log(error)
    }
             
      )
  }
  render() {
    return (
      <div className="animated fadeIn">
       
        <Row>
          <Col xs="14" md="12">
          <Card>
              <CardHeader>
                <strong>Nouveau Projet</strong> 
              </CardHeader>
              <CardBody>
                <Form onSubmit={this.handleSubmit.bind(this)} encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="text-input">Nom du Projet</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="text-input" value={this.state.ProjectName} name="ProjectName" placeholder="Création d'un site web .. "   onChange={this.handleChange.bind(this)} />
                      <FormText color="muted">  le nom doit etre significatif</FormText>
                    </Col>
                  </FormGroup>
                 
                 
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Date de début </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input" placeholder="date" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input">Date de fin </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="date-input" name="date-input" placeholder="date" />
                    </Col>
                  </FormGroup>
                    <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="date-input"> technlogie utiliser  </Label>
                    </Col>
                    <Col xs="12" md="9">
                     <Modals/>
                     </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="textarea-input">Description du projet </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="textarea" name="description" id="textarea-input" rows="8"
                             placeholder="L'idée de ce projet est de ........"  onChange={this.handleChange.bind(this)}  />
                    </Col>
                  </FormGroup>
              
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="file-multiple-input">Ajouter une fichier <Badge> Facultatif </Badge>  </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="file" id="file-multiple-input" name="file-multiple-input" multiple />
                    </Col>
                  </FormGroup>
                  <FormGroup row hidden>
                    <Col md="3">
                      <Label className="custom-file" htmlFor="custom-file-input">Custom file input</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Label className="custom-file">
                        <Input className="custom-file" type="file" id="custom-file-input" name="file-input" />
                        <span className="custom-file-control"></span>
                      </Label>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">

                    </Col>
                     
                        <Col md="3">
                                        <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>

                         <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>

                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
         
            </Card>

             </Col>
        </Row>
      </div>
    );
  }
}

export default NewProject;
