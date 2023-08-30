import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': 'system-ui',
		'--theme-font-family-heading': 'system-ui',
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '4px',
		'--theme-rounded-container': '4px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '0 0 0',
		'--on-warning': '255 255 255',
		'--on-error': '255 255 255',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #e34453
		'--color-primary-50': '251 227 229', // #fbe3e5
		'--color-primary-100': '249 218 221', // #f9dadd
		'--color-primary-200': '248 208 212', // #f8d0d4
		'--color-primary-300': '244 180 186', // #f4b4ba
		'--color-primary-400': '235 124 135', // #eb7c87
		'--color-primary-500': '227 68 83', // #e34453
		'--color-primary-600': '204 61 75', // #cc3d4b
		'--color-primary-700': '170 51 62', // #aa333e
		'--color-primary-800': '136 41 50', // #882932
		'--color-primary-900': '111 33 41', // #6f2129
		// secondary | #4f3829
		'--color-secondary-50': '229 225 223', // #e5e1df
		'--color-secondary-100': '220 215 212', // #dcd7d4
		'--color-secondary-200': '211 205 202', // #d3cdca
		'--color-secondary-300': '185 175 169', // #b9afa9
		'--color-secondary-400': '132 116 105', // #847469
		'--color-secondary-500': '79 56 41', // #4f3829
		'--color-secondary-600': '71 50 37', // #473225
		'--color-secondary-700': '59 42 31', // #3b2a1f
		'--color-secondary-800': '47 34 25', // #2f2219
		'--color-secondary-900': '39 27 20', // #271b14
		// tertiary | #1f4c78
		'--color-tertiary-50': '221 228 235', // #dde4eb
		'--color-tertiary-100': '210 219 228', // #d2dbe4
		'--color-tertiary-200': '199 210 221', // #c7d2dd
		'--color-tertiary-300': '165 183 201', // #a5b7c9
		'--color-tertiary-400': '98 130 161', // #6282a1
		'--color-tertiary-500': '31 76 120', // #1f4c78
		'--color-tertiary-600': '28 68 108', // #1c446c
		'--color-tertiary-700': '23 57 90', // #17395a
		'--color-tertiary-800': '19 46 72', // #132e48
		'--color-tertiary-900': '15 37 59', // #0f253b
		// success | #44ea00
		'--color-success-50': '227 252 217', // #e3fcd9
		'--color-success-100': '218 251 204', // #dafbcc
		'--color-success-200': '208 250 191', // #d0fabf
		'--color-success-300': '180 247 153', // #b4f799
		'--color-success-400': '124 240 77', // #7cf04d
		'--color-success-500': '68 234 0', // #44ea00
		'--color-success-600': '61 211 0', // #3dd300
		'--color-success-700': '51 176 0', // #33b000
		'--color-success-800': '41 140 0', // #298c00
		'--color-success-900': '33 115 0', // #217300
		// warning | #0e77ca
		'--color-warning-50': '219 235 247', // #dbebf7
		'--color-warning-100': '207 228 244', // #cfe4f4
		'--color-warning-200': '195 221 242', // #c3ddf2
		'--color-warning-300': '159 201 234', // #9fc9ea
		'--color-warning-400': '86 160 218', // #56a0da
		'--color-warning-500': '14 119 202', // #0e77ca
		'--color-warning-600': '13 107 182', // #0d6bb6
		'--color-warning-700': '11 89 152', // #0b5998
		'--color-warning-800': '8 71 121', // #084779
		'--color-warning-900': '7 58 99', // #073a63
		// error | #525b81
		'--color-error-50': '229 230 236', // #e5e6ec
		'--color-error-100': '220 222 230', // #dcdee6
		'--color-error-200': '212 214 224', // #d4d6e0
		'--color-error-300': '186 189 205', // #babdcd
		'--color-error-400': '134 140 167', // #868ca7
		'--color-error-500': '82 91 129', // #525b81
		'--color-error-600': '74 82 116', // #4a5274
		'--color-error-700': '62 68 97', // #3e4461
		'--color-error-800': '49 55 77', // #31374d
		'--color-error-900': '40 45 63', // #282d3f
		// surface | #8f6891
		'--color-surface-50': '238 232 239', // #eee8ef
		'--color-surface-100': '233 225 233', // #e9e1e9
		'--color-surface-200': '227 217 228', // #e3d9e4
		'--color-surface-300': '210 195 211', // #d2c3d3
		'--color-surface-400': '177 149 178', // #b195b2
		'--color-surface-500': '143 104 145', // #8f6891
		'--color-surface-600': '129 94 131', // #815e83
		'--color-surface-700': '107 78 109', // #6b4e6d
		'--color-surface-800': '86 62 87', // #563e57
		'--color-surface-900': '70 51 71' // #463347
	}
};
