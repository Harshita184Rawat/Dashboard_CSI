import React from 'react';
import { SparklineTooltip, Inject, SparklineComponent } from '@syncfusion/ej2-react-charts';

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
    {/* Syncfusion documentation to get info about the props use in the components */ }
    return (
        < SparklineComponent
            id={id}
            height={height}
            width={width}
            lineWidth={1}
            valueType="Numeric"
            fill={color}
            border={{ color: currentColor, width: 2 }}
            dataSource={data}
            xName='x'
            yName='y'
            tooltipSettings={{
                visible: true,
                format: '${x} : data ${y}',
                trackLineSettings: {
                    visible: true
                }
            }}

        >
            <Inject services={[SparklineTooltip]} />

        </SparklineComponent >
    )
}

export default SparkLine