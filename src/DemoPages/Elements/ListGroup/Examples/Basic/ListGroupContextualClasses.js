import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class ListGroupContextualClasses extends React.Component {
  render() {
    return (
      <ListGroup>
        {/* <ListGroupItem color="primary">Cras justo odio</ListGroupItem>
        <ListGroupItem color="secondary">Cras justo odio</ListGroupItem> */}
        <ListGroupItem color="success">Cras justo odio</ListGroupItem>
        <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
        <ListGroupItem color="danger">Porta ac consectetur ac</ListGroupItem>
        {/* <ListGroupItem color="focus">Cras justo odio</ListGroupItem>
        <ListGroupItem color="alternate">Cras justo odio</ListGroupItem>
        <ListGroupItem color="light">Cras justo odio</ListGroupItem>
        <ListGroupItem color="dark">Cras justo odio</ListGroupItem> */}
      </ListGroup>
    );
  }
}
