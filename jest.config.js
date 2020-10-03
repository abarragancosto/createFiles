module.exports = {
	verbose: true,
	coverageDirectory: 'coverage',
	coveragePathIgnorePatterns: ['<rootDir>/test/input', '<rootDir>/test/outputExpected', '<rootDir>/node_modules'],
	testMatch: ['<rootDir>/test/**/*.test.js'],
	testEnvironment: 'node',
	reporters: [ 'default', ['jest-junit', {outputDirectory: './report'}] ]
};
