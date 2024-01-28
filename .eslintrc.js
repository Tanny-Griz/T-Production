module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'amd': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'overrides': [
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-filename-extension': [2, {'extensions': ['.js', '.jsx', '.tsx']}],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'indent': ['error', 'tab'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'never'],
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-explicit-any': 'warn'
	},
	globals: {
		'__IS_DEV': true
	},
}
