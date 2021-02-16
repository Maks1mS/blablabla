import React, { useEffect, useRef, useState } from 'react';
import Measure from 'react-measure';
import atomize from '@quarkly/atomize';
const SVG = atomize.svg();
const Line = atomize.line();
const Rect = atomize.rect();
const Ellipse = atomize.ellipse();
const Circle = atomize.circle();

const SVGShape = ({
	type,
	...props
}) => {
	const [dimensions, setDimensions] = useState({
		width: -1,
		height: -1
	});
	return <Measure client bounds margin onResize={clientRect => {
		console.log(clientRect);
		setDimensions(clientRect.client);
	}}>
		      
		{({
			measureRef
		}) => <SVG
			ref={measureRef}
			xmlns="http://www.w3.org/2000/svg"
			viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
			width="100%"
			height="100%"
			{...props}
		>
			          
			{type === 'Line' && <Line
				x1="-50"
				y1="50"
				x2="150"
				y2="50"
				stroke="black"
			/>}
			          
			{type === 'Circle' && <Circle cx="50%" cy="50" r="50" />}
			          
			{type === 'Ellipse' && <Ellipse cx="50%" cy="50%" rx={`${dimensions.width / 2}`} ry={`${dimensions.height / 2}`} />}
			          
			{['Square', 'Rectangle'].includes(type) && <Rect x="0" y="0" width="100" height="100" />}
			        
		</SVG>}
		    
	</Measure>;
};

const propInfo = {
	type: {
		title: 'Type',
		control: 'select',
		description: {
			en: ''
		},
		variants: ['Line', 'Ellipse', 'Circle', 'Rectangle', 'Square']
	}
};
const defaultProps = {};
export default atomize(SVGShape)({
	name: 'SVGShape',
	description: {
		en: 'SVGShape'
	},
	propInfo
}, defaultProps);