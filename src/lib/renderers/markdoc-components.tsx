import { fields } from '@keystatic/core';
import { cloudImage } from '@keystatic/core/content-components';
import type { Config } from '@markdoc/markdoc';
import { CloudImage } from './cloud-image';

export const markdocComponents = {
	'cloud-image': cloudImage({
		label: 'Image',
	}),
};

export const reactComponents = {
	CloudImage,
};

const tags = {
	'cloud-image': 'CloudImage',
} satisfies Record<keyof typeof markdocComponents, keyof typeof reactComponents>;

export const markdocConfig: Config = {
	...fields.markdoc.createMarkdocConfig({
		components: markdocComponents,
		render: {
			tags,
		},
	}),
};
