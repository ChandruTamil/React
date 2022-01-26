import React,{useRef, useState, useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Map.css";
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from '@tomtom-international/web-sdk-maps';


export default function Map() {
  const mapElement = useRef();
  const [mapLongitude, setMapLongitude] = useState(78.076607);
  const [mapLatitude, setMapLatitude] = useState(10.960078);
  const [mapZoom, setMapZoom] = useState(13);
  const [map, setMap] = useState({});
  const MAX_ZOOM = 20;

  const updateMap = () => {
    map.setCenter([parseFloat(mapLongitude), parseFloat(mapLatitude)]);
    map.setZoom(mapZoom);
  };
  const increaseZoom = () => {
    if (mapZoom < MAX_ZOOM) {
      setMapZoom(mapZoom + 1);
    }
    updateMap()
  };
  
  const decreaseZoom = () => {
    if (mapZoom > 1) {
      setMapZoom(mapZoom - 1);
    }
    updateMap()
  };
  
  useEffect(() => {
    let map = tt.map({
      key: "DaUPxPN9CvKI0JVX7mItpVpMim1aTBWH",
      container: mapElement.current,
      center: [mapLongitude, mapLatitude],
      zoom: mapZoom
    });
    setMap(map);
    return () => map.remove();
  }, [mapLongitude,mapLatitude,mapZoom]);
  return (
    <div>
    <Row>
      <Col xs={2}>
    <strong>Map Options</strong>
    <Form>
        <Form.Group size="sm" controlId="longitude">
          <Form.Label>Longitude</Form.Label>
          <Form.Control
            type="number"
            value={mapLongitude}
            onChange={(e) => setMapLongitude(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="sm" controlId="latitude">
          <Form.Label>Latitude</Form.Label>
          <Form.Control
            type="number"
            value={mapLatitude}
            onChange={(e) => setMapLatitude(e.target.value)}
          />
        </Form.Group>
        <br />
        <strong>Zoom</strong>
        <ButtonGroup aria-label="Basic example" className="btngrp">
            <Button variant="secondary" className="btngrpleft" onClick={increaseZoom}>+</Button>
            <Button variant="secondary" className="btngrpright" onClick={decreaseZoom}>-</Button>
        </ButtonGroup>
      </Form>
      </Col>
      <Col xs={10}>
      <div ref={mapElement} className="mapDiv"></div>
      </Col>
      </Row>
      </div>
  );
}