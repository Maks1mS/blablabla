import React, { useEffect, useState, useMemo } from 'react';
import { Box, Button } from '@quarkly/widgets';
import atomize from '@quarkly/atomize';

const SimpleTabs = ({
	children,
	defaultTab,
	...props
}) => {
	const [currentTab, setTab] = useState(defaultTab);
	useEffect(() => {
		setTab(defaultTab);
	}, [defaultTab]);
	const buttons = useMemo(() => React.Children.map(children, child => {
		if (!React.isValidElement(child) || child.key === '.$placeholder') {
			return;
		}

		console.log(child);
		/*
    const onClick = () => {
      setTab(child.props.tabId)
    }
  */

		return <Button>
			{JSON.stringify(child.props)}
		</Button>;
	}), [children]);
	return <Box {...props}>
		      
		<Box>
			        
			{buttons}
			      
		</Box>
		      
		{children}
		    
	</Box>;
};

const propInfo = {
	defaultTab: {
		title: 'Default Tab',
		description: {
			en: 'The tabId of the initially selected tab when uncontrolled.'
		},
		control: 'input'
	}
};
const defaultProps = {};
export default atomize(SimpleTabs)({
	title: 'SimpleTabs',
	description: {
		en: 'SimpleTabs'
	},
	propInfo
}, defaultProps);