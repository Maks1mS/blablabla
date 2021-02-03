import React, { useRef } from 'react';
import atomize from '@quarkly/atomize';
import { Box } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { useTabs } from './Tabs';
const overrides = {
	'Tab': {
		kind: 'Box'
	},
	'Unselected Tab': {
		kind: 'Box'
	},
	'Selected Tab': {
		kind: 'Box'
	}
};

const Tab = ({
	tabId,
	...props
}) => {
	const ref = useRef();
	const {
		setTabId,
		currentTabId,
		align
	} = useTabs();
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides);
	const selected = currentTabId === tabId;

	const onClick = () => {
		ref.current.scrollIntoView({
			block: 'nearest',
			behavior: 'smooth'
		});
		setTabId(tabId);
	};

	return <Box
		ref={ref}
		flex={align === 'full width' ? '0 1 100%' : '0 0 auto'}
		role="tab"
		tabIndex="-1"
		cursor="pointer"
		aria-selected={selected}
		onClick={onClick}
		{...rest}
	>
		    
		<Box {...override('Tab', `${selected ? 'Selected' : 'Unselected'} Tab`)}>
			      
			{children}
			    
		</Box>
		  
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
export default atomize(Tab)({
	name: 'Tab',
	descrition: {
		ru: 'Вкладка (кнопка), представляющая из себя механизм для выбора вкладки необходимой пользователю. Должен располагаться внутри TabList'
	},
	propInfo,
	overrides
});