import atomize from '@quarkly/atomize';
import { Box } from '@quarkly/widgets';
import React, { useEffect, useRef, useMemo } from 'react';
import { useTabs } from './SimpleTabs';

const SimpleTab = ({ ...props
}) => {
	const ref = useRef();
	const {
		addTab,
		currentTab,
		removeTab
	} = useTabs();
	const tabId = props.tabId || props['data-qid'];
	useEffect(() => {
		addTab(tabId);
		return () => removeTab(tabId);
	}, [tabId]);
	const isHidden = currentTab !== tabId;
	return <Box ref={ref} role="tabpanel" hidden={isHidden} {...props} />;
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
	name: 'SimpleTab',
	description: {
		en: 'Контейнер для ресурсов связанных с вкладкой. Должен располагаться внутри SimpleTabs'
	},
	propInfo
});