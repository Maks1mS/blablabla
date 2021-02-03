import React, { useState, createContext, useContext, useEffect } from 'react';
import { Box } from '@quarkly/widgets';
import atomize from '@quarkly/atomize';
const TabsContext = createContext({
	currentTabId: '',
	setTabId: () => {},
	align: 'start',
	orientation: 'Horizontal'
});
export const useTabs = () => useContext(TabsContext);

const Tabs = ({
	defaultTab,
	orientation,
	align,
	children,
	...props
}) => {
	const [currentTabId, setTabId] = useState(defaultTab);
	useEffect(() => {
		setTabId(defaultTab);
	}, [defaultTab]);
	const value = {
		currentTabId,
		setTabId,
		align,
		orientation
	};
	return <Box display="flex" flex-direction={orientation === 'Horizontal' ? 'column' : 'row'} height="300px" {...props}>
		      
		<TabsContext.Provider value={value}>
			        
			{children}
			      
		</TabsContext.Provider>
		    
	</Box>;
};

const propInfo = {
	defaultTab: {
		title: 'Default Tab',
		description: {
			en: 'The tabId of the initially selected tab when uncontrolled.'
		},
		control: 'input'
	},
	align: {
		title: 'Align',
		description: {
			en: 'The alignment of the tabs'
		},
		control: 'select',
		variants: ['start', 'center', 'end', 'full width']
	},
	orientation: {
		title: 'Orientation',
		description: {
			en: 'Orientation of tabs'
		},
		control: 'radio-group',
		variants: ['Vertical', 'Horizontal']
	}
};
const defaultProps = {
	align: 'start',
	orientation: 'Horizontal'
};
export default atomize(Tabs)({
	name: 'Tabs',
	description: {
		en: 'Tabs make it easy to explore and switch between different views.'
	},
	effects: {
		hover: ':hover'
	},
	propInfo
}, defaultProps);