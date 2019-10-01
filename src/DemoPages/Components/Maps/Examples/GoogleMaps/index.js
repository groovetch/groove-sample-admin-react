import React, {Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import GoogleMapReact from 'google-map-react';

import {
    Row, Col,
    Card, CardBody,
    CardTitle
} from 'reactstrap';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMapsExample extends React.Component {
    static defaultProps = {
        center: {
            lat: 10.771396,
            lng: 106.700423
        },
        zoom: 12
    };
    render() {

        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Row>
                        <Col md="12">
                            <Card className="main-card mb-3">
                                <CardBody>
                                    <CardTitle>
                                        Basic
                                    </CardTitle>
                                    <div style={{ height: '100vh', width: '100%' }}>
                                        <GoogleMapReact
                                            bootstrapURLKeys={{ key: 'AIzaSyAZoLx4H1HW6rWIqZwmO5OzzOxlJiXfOVk' }}
                                            defaultCenter={this.props.center}
                                            defaultZoom={this.props.zoom}
                                        >
                                            <AnyReactComponent
                                                lat={10.771396}
                                                lng={106.700423}
                                                text={''}
                                            />
                                        </GoogleMapReact>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}

export default GoogleMapsExample;
