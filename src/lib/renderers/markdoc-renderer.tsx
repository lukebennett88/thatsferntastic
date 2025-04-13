import Markdoc, { type Node } from '@markdoc/markdoc';
import * as React from 'react';
import { markdocConfig, reactComponents } from './markdoc-components';

type MarkdocRendererProps = {
	node: Node;
};

export function MarkdocRenderer({ node }: MarkdocRendererProps) {
	const errors = Markdoc.validate(node, markdocConfig);
	if (errors.length > 0) throw new Error('Invalid content');
	const renderableTreeNode = Markdoc.transform(node, markdocConfig);

	return Markdoc.renderers.react(renderableTreeNode, React, {
		components: reactComponents,
	});
}
