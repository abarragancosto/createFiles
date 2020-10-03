#!/usr/bin/env node

const createFiles = require('../src/createFiles');

require('yargs')
	.usage('$0 <cmd> [args]')
	.command(
		'createFiles [jsonPath, outputPath]',
		'Crea los ficheros necesarios para Alexa',
		yargs => {
			return yargs
				.option('jsonPath', {
					alias: 'j',
					demandOption: true,
					describe: 'JSON problems or paths to JSON reports',
					type: 'string'
				})
				.option('outputPath', {
					alias: 'o',
					demandOption: false,
					describe: 'Directorio donde se escribirán los ficheros',
					type: 'string',
					default: './'
				});
		},
		function ({ jsonPath, outputPath }) {
			createFiles({
				jsonPath,
				outputPath
			});
		}
	)
	.help()
	.demandCommand()
	.showHelpOnFail(true)
	.strict().argv;
