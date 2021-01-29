import React from 'react';
import { Box } from '@quarkly/widgets';
import atomize from '@quarkly/atomize';

const TabPanels = ({
	children,
	...props
}) => {
	return <Box {...props}>
		{children}
	</Box>;
};

export default atomize(TabPanels)({
	name: 'Tab',
	description: {}
});