/* eslint-disable */
import React from 'react'
import '../src/globals';
//Report designer source
import '@boldreports/javascript-reporting-controls/Scripts/bold.report-viewer.min';
import '@boldreports/javascript-reporting-controls/Content/material/bold.reports.all.min.css';
//Data-Visualization
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.bulletgraph.min';
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.chart.min';
//Reports react base
import '@boldreports/react-reporting-components/Scripts/bold.reports.react.min';


declare let BoldReportViewerComponent: any;

var viewerStyle = {
    'height': '700px',
    'width': '100%'
};

const ViewPage = () => {

    var parameters = [{
        name: 'isim',
        values: ['xxx'],
        nullable: false
    }];

    return (

        <div style={viewerStyle}>
            <BoldReportViewerComponent id="reportviewer-container"

                reportServiceUrl={'http://130.0.9.2:7100/Viewer'}
                parameters={parameters}
                reportPath={'abi.rdl'}
            >
            </BoldReportViewerComponent>
        </div>
    )
}

export default ViewPage