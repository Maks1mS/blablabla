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
	return <Box role="tabpanel" hidden={isHidden} {...props}>
		    
		{children}
		  
	</Box>;
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
export default atomize(TabPanel)({
	name: 'TabPanel',
	description: {
		ru: 'Контейнер для ресурсов связанных с Tab, где каждый Tab содержиться в Tablist. Должен располагаться внутри TabPanels'
	},
	propInfo
});