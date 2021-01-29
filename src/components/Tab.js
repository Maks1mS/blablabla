import React from 'react';
import atomize from '@quarkly/atomize';
import { Box, Button } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';
import { useTabs } from './Tabs';
const overrides = {
	'Tab text': {
		kind: 'Button',
		props: {
			children: 'Tab text'
		}
	}
};

const Tab = ({
	tabId,
	...props
}) => {
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	const {
		setTabId,
		currentTabId,
		align
	} = useTabs();
	const selected = currentTabId === tabId;

	const onClick = () => {
		setTabId(tabId);
	};

	const fullWidthStyles = {
		width: '100%'
	};
	const selectedStyles = {
		'border-bottom': 'solid 2px black',
		'margin-bottom': '-2px',
		tabIndex: 0
	};
	return <Box {...align === 'full width' && fullWidthStyles} {...rest}>
		<Button
			role="tab"
			tabIndex="-1"
			aria-selected={selected}
			color="black"
			background="none"
			border-radius="0"
			onClick={onClick}
			{...align === 'full width' && fullWidthStyles}
			{...selected && selectedStyles}
			{...override('Tab text')}
		/>
	</Box>;
};

const propInfo = {
	tabId: {
		control: 'input'
	}
};
export default atomize(Tab)({
	name: 'Tab',
	effects: {
		selected: 'selected'
	},
	overrides,
	propInfo
});