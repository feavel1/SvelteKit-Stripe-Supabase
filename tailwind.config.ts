/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss';

import { skeleton } from '@skeletonlabs/tw-plugin';
import { myCustomTheme } from './my-custom-theme';

import { join } from 'path';

module.exports = {
	// 1. Apply the dark mode class setting:
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},
	plugins: [
		// 3. Append the Skeleton plugin to the end of this list
		require('@tailwindcss/forms'),
		skeleton({
			themes: {
				// Register each theme within this array:
				preset: ['skeleton', 'modern', 'crimson'],
				custom: [myCustomTheme]
			}
		})
	]
} satisfies Config;
