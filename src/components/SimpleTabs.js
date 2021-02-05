import React, { createContext, useState, useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import atomize from '@quarkly/atomize';
import { Box, Button } from '@quarkly/widgets';
import { useOverrides } from '@quarkly/components';

const append = (array, element) => element ? [...array, element] : array;

const remove = (array, element) => {
	const index = array.indexOf(element);
	if (index !== -1) array.splice(index, 1);
	return array;
};

const getNextNode = (node, mode) => {
	const first = {
		next: node.parentNode.children[0],
		previous: node.parentNode.lastChild
	}[mode];
	let nextNode = node;

	do {
		nextNode = nextNode[`${mode}ElementSibling`] || first;
	} while (nextNode.disabled);

	return nextNode;
};

const getNextElement = {
	ArrowLeft: node => getNextNode(node, 'previous'),
	ArrowRight: node => getNextNode(node, 'next'),
	Home: t => {
		const node = t.parentNode.children[0];
		return node.disabled ? getNextNode(node, 'next') : node;
	},
	End: t => {
		const node = t.parentNode.lastChild;
		return node.disabled ? getNextNode(node, 'previous') : node;
	}
};
const overrides = {
	Tab: {
		kind: 'Button',
		props: {
			children: 'Tab'
		}
	}
};
const TabsContext = createContext({
	currentTab: '',
	addTab: () => {},
	removeTab: () => {}
});
export const useTabs = () => useContext(TabsContext);

const SimpleTabs = ({
	defaultTab,
	...props
}) => {
	const [currentTab, setCurrentTab] = useState(defaultTab);
	const [tabs, setTabs] = useState([]);
	const tabsRef = useRef([]);
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides);
	useEffect(() => {
		setCurrentTab(defaultTab);
	}, [defaultTab]);
	const addTab = useCallback(tab => {
		tabsRef.current = append(tabsRef.current, tab);

		if (window.location.hash === tab) {
			setCurrentTab(tab);
		}

		setTabs(tabsRef.current);
	});
	const removeTab = useCallback(tab => {
		tabsRef.current = remove(tabsRef.current, tab);
		setTabs(tabsRef.current);
	});
	const value = {
		currentTab,
		removeTab,
		addTab
	};

	const onKeyDown = e => {
		const {
			target,
			key
		} = e;

		if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(key)) {
			return;
		}

		e.preventDefault();
		const nextElement = getNextElement[key](target);
		nextElement.focus();
		nextElement.click();
	};

	const buttons = useMemo(() => tabs.map((tab, i) => {
		const onClick = () => setCurrentTab(tab);

		const selected = currentTab === tab;
		return <Button
			key={i}
			role="tab"
			tabIndex="-1"
			aria-selected={selected}
			onClick={onClick}
			{...override('Tab', `Tab ${tab}`, selected && 'Tab :active')}
		/>;
	}), [tabs, override]);
	return <Box {...rest}>
		    
		<Box onKeyDown={onKeyDown} role="tablist">
			      
			{buttons}
			    
		</Box>
		    
		<Box>
			      
			<TabsContext.Provider value={value}>
				        
				{children}
				      
			</TabsContext.Provider>
			    
		</Box>
		  
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
const defaultProps = {
	defaultTab: ''
};
export default atomize(SimpleTabs)({
	name: 'SimpleTabs',
	description: {
		en: 'SimpleTabs'
	},
	propInfo,
	overrides
}, defaultProps);