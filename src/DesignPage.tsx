

/* eslint-disable */
import React from 'react';
import './globals';
import './App.css';
//Report designer source
import '@boldreports/javascript-reporting-controls/Scripts/bold.report-designer.min';
import '@boldreports/javascript-reporting-controls/Scripts/bold.report-viewer.min';
import '@boldreports/javascript-reporting-controls/Content/material/bold.reports.all.min.css';
import '@boldreports/javascript-reporting-controls/Content/material/bold.reportdesigner.min.css';
//Data-Visualization
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.bulletgraph.min';
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.chart.min';
//Reports react base
import '@boldreports/react-reporting-components/Scripts/bold.reports.react.min';
declare let BoldReportDesignerComponent: any;


var designerStyle = {
    'height': '700px',
    'width': '100%'
};


const DesignPage = () => {
    return (

        <div style={designerStyle}>
            <BoldReportDesignerComponent
                id="reportdesigner_container"
                serviceUrl={'http://130.0.9.2:7100/Designer'}>
            </BoldReportDesignerComponent>
        </div>

    )
}

export default DesignPage