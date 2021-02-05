import atomize from '@quarkly/atomize';
import { Box } from '@quarkly/widgets';
import React, { useEffect } from 'react';
import { useTabs } from './SimpleTabs';

const SimpleTab = ({
	tabId,
	...props
}) => {
	const {
		addTab,
		currentTab,
		removeTab
	} = useTabs();
	useEffect(() => {
		addTab(tabId);
		return () => removeTab(tabId);
	}, [tabId]);
	const isHidden = currentTab !== tabId;
	return <Box role="tabpanel" hidden={isHidden} {...props} />;
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
const defaultProps = {
	tabId: ''
};
export default atomize(SimpleTab)({
	name: 'SimpleTab',
	description: {
		en: 'SimpleTab'
	},
	propInfo
}, defaultProps);