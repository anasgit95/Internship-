import React, { Component } from 'react';
import {  Card, Image ,Popup,Button} from 'semantic-ui-react'
import { CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

import 'semantic-ui-css/semantic.min.css'
class  CardExampleGroups extends Component {
   constructor(props) {
    super(props);

    this.state = {
       modal: false,
      large: false,
      small: false,
      primary: false,
      success: false,
      warning: false,
      danger: false,
      info: false,
          user:[],
 
    };
        this.toggle = this.toggle.bind(this);

  }
    toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  componentDidMount() {
  fetch('/api/user')
  .then(res=>res.json())
  .then(user=>this.setState({user},()=>console.log('customers fetched..',user) ));
}

 sayHello() {

  }

 
   render() {
    return (

   <Card.Group>
   <Row>
            {this.state.user.map(user=>

           <Col xs="12" sm="6" md="4">

       
    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
        <Card.Header>Anas Zayene</Card.Header>
        <Card.Meta>EPI SOUSSE </Card.Meta>
        <Card.Description>
          Je suis a la recherche d'un stage d ete 
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
                     <Button basic color ='green' onClick={this.toggle} className="mr-1">Voir le profil</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                  <ModalHeader toggle={this.toggle}>Anas Zayene</ModalHeader>
                  <ModalBody>
                         <Image floated='left' size='small' circular src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />

                    <p> <strong> Lettre de motivation :  </strong> Je suis bien anas Zayene etuidant a  . </p>
                   <p> <strong> Technologie utiliser </strong> : react node js </p> 
                   <p> <strong> ECOLE </strong> : EPI SOUSSE </p>
                   <p> <strong> DATE </strong> : 05/09/2019 </p>


                  </ModalBody>
                  <ModalFooter>
                    <Button color="green" onClick={this.toggle}>Accepter </Button>{' '}
                    <Button color="red" onClick={this.toggle}>Cancel</Button>
                  </ModalFooter>
                </Modal>
          <Button basic color='red'>
            Rejeter
          </Button>

        </div>

      </Card.Content>
    </Card>
  <p> </p>

     </Col>
)}         
  </Row>

  </Card.Group>
);
  }
}




const inlineStyle = {
  modal : {
    marginTop: '20px !important',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};
export default CardExampleGroups;