import React from 'react'
import './globals';

declare let BoldReportViewerComponent: any;

var viewerStyle = {
    'height': '100%',
    'width': '100%'
};

const ReportPage = () => {
    return (
        <div style={viewerStyle}>
            <BoldReportViewerComponent
                id="reportviewer-container"
                reportServiceUrl={'https://demos.boldreports.com/services/api/ReportViewer'}
                reportPath={'~/Resources/docs/sales-order-detail.rdl'} >
            </BoldReportViewerComponent>
        </div>
    )
}

export default ReportPage