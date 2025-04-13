import { config, fields } from '@keystatic/core';

const isProduction = process.env.NODE_ENV === 'production';

export default config({
	cloud: {
		project: 'luke-bennett/thatsferntastic',
	},
	ui: {
		brand: {
			name: '@thatsferntastic',
			mark: () => {
				return <img src="/avatar.jpg" alt="" style={{ borderRadius: 9999, width: 48 }} />;
			},
		},
	},
	storage: isProduction ? { kind: 'cloud' } : { kind: 'local' },
	singletons: {
		homepage: {
			label: 'Homepage',
			path: 'content/homepage',
			schema: {
				title: fields.text({
					label: 'Title',
					validation: { isRequired: true },
				}),
				bio: fields.markdoc({
					label: 'Bio',
				}),
				links: fields.array(
					fields.object({
						label: fields.text({ label: 'Label' }),
						url: fields.text({
							label: 'URL',
							validation: { isRequired: true },
						}),
					}),
					{
						label: 'Links',
						itemLabel: (props) => props.fields.label.value,
					},
				),
			},
		},
	},
});
