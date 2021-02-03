import React from 'react';
import { Box } from '@quarkly/widgets';
import atomize from '@quarkly/atomize';

const TabPanels = ({
	children,
	...props
}) => <Box {...props}>
	{children}
</Box>;

export default atomize(TabPanels)({
	name: 'TabPanels',
	description: {
		ru: 'Контейнейр с TabPanel. Этот компонент должен располагаться внутри Tabs'
	}
});