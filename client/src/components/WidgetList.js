import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Widget from './Widget';


const WidgetList = (props) => {
  const data = props.data;
  let widgets = data.map((widget) => (
    <Col key={widget.id}>
      <Widget title={widget.title} value={widget.value} key={widget.id} />
    </Col>
  ));
  return (
    <div>
      <Container className="container pt-4 border border-white rounded rounded-sm mt-5 bg-white text-center">
        <h1>Expected returns</h1>
        <Row>{widgets}</Row>
      </Container>
    </div>
  );
};

export default WidgetList;
