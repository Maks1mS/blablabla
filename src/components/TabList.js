import React, { useRef } from 'react';
import atomize from '@quarkly/atomize';
import { Box } from '@quarkly/widgets';
import { useTabs } from './Tabs';
const alignConvert = {
	start: 'flex-start',
	end: 'flex-end',
	center: 'center',
	'full width': 'center'
};

const TabList = ({
	children,
	...props
}) => {
	const {
		align
	} = useTabs();
	const ref = useRef(null);

	const goNext = (node, mode) => {
		const first = {
			'next': ref.current.children[0],
			'previous': ref.current.lastChild
		}[mode];
		let nextNode = node;

		do {
			nextNode = (nextNode.parentNode[`${mode}ElementSibling`] || first).firstChild;
		} while (nextNode.disabled);

		return nextNode;
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
		let getNextElement = {
			ArrowLeft: node => goNext(node, 'previous'),
			ArrowRight: node => goNext(node, 'next'),
			Home: () => {
				let node = ref.current.children[0].firstChild;
				return node.disabled ? goNext(node, 'next') : node;
			},
			End: () => {
				let node = ref.current.lastChild.firstChild;
				return node.disabled ? goNext(node, 'previous') : node;
			}
		}[key];
		let nextElement = getNextElement(target);
		nextElement.focus();
		nextElement.click();
	};

	return <Box
		ref={ref}
		role="tablist"
		display="flex"
		justify-content={alignConvert[align]}
		border-bottom="solid 2px rgb(186, 186, 186)"
		onKeyDown={onKeyDown}
		{...props}
	>
		    
		{children}
		  
	</Box>;
};

export default atomize(TabList)({
	name: 'TabList',
	description: {}
});