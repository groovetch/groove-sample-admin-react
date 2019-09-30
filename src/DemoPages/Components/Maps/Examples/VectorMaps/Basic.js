import React, {Fragment} from 'react';

import {
    ComposableMap,
    ZoomableGroup,
    Geographies,
    Geography,
} from "react-simple-maps"

import world from './Static/world-50m.json';
import colorDefault from './mapColor.js';

export default class VectorMapsBasic extends React.Component {

    render() {

        return (
            <Fragment>
                <div>
                    <ComposableMap
                        projectionConfig={{
                            scale: 205,
                            rotation: [-11, 0, 0],
                        }}
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                    >
                        <ZoomableGroup center={[0, 20]} disablePanning>
                            <Geographies geography={world}>
                                {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
                                    <Geography
                                        key={i}
                                        geography={geography}
                                        projection={projection}
                                        style={{
                                          ...colorDefault
                                        }}
                                    />
                                ))}
                            </Geographies>
                        </ZoomableGroup>
                    </ComposableMap>
                </div>
            </Fragment>
        )
    }
}