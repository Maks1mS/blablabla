import React from 'react';
import { Box } from '@quarkly/widgets';
import atomize from '@quarkly/atomize';
import { useTabs } from './Tabs';

const TabPanel = ({
	children,
	tabId,
	...props
}) => {
	const {
		currentTabId
	} = useTabs();
	const isHidden = currentTabId !== tabId;
	return <Box tabIndex="0" hidden={isHidden} {...props}>
		{children}
	</Box>;
};

const propInfo = {
	tabId: {
		control: 'input'
	}
};
export default atomize(TabPanel)({
	name: 'TabPanel',
	propInfo
});