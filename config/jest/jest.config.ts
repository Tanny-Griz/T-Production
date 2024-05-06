export default {
	clearMocks: true,
	coveragePathIgnorePatterns: [
		'\\\\node_modules\\\\',
	],
	moduleFileExtensions: [
		'js',
		'jsx',
		'ts',
		'tsx',
		'json',
		'node',
	],
	moduleDirectories: [
		'node_modules',
	],
	testMatch: [
		'<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
	],
	rootDir: '../../',
	// testMatch: [
    
	// ]
}