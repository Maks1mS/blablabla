import atomize from '@quarkly/atomize';
import { Box } from '@quarkly/widgets';
import React from 'react';

const SimpleTab = props => {
	return <Box {...props} />;
};

const propInfo = {
	tabId: {
		title: 'Tab ID',
		description: {
			en: 'The ID of the TabPanel to show when clicked.'
		},
		control: 'input'
	}
};
export default atomize(SimpleTab)({
	title: 'SimpleTab',
	propInfo
});