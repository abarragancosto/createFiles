const fs = require('fs-extra');
const path = require('path');
const data = require('../filesToCopy/data');
const apl = require('../filesToCopy/apl');
const texts = require('../filesToCopy/textos');
const failTexts = require('../filesToCopy/failText');
const handlers = require('../filesToCopy/fileScreen');

module.exports = async function ({jsonPath, outputPath}) {

	const problemsData = await fs.readJson(path.resolve(jsonPath));

	outputPath = path.resolve(outputPath);

	await createDirIfNotExists(outputPath);

	const aplDir = path.resolve(outputPath, 'apl');
	const dataDir = path.resolve(outputPath, 'data');
	const handlersDir = path.resolve(outputPath, 'handlers');
	const textosDir = path.resolve(outputPath, 'textos');

	await createDirIfNotExists(aplDir);
	await createDirIfNotExists(dataDir);
	await createDirIfNotExists(handlersDir);
	await createDirIfNotExists(textosDir);

	const intents = [];
	const requires = [];

	for (let problemDifficult in problemsData) {

		const aplDifficultDir = path.resolve(aplDir, problemDifficult);
		await createDirIfNotExists(aplDifficultDir);

		const dataDifficultDir = path.resolve(dataDir, problemDifficult);
		await createDirIfNotExists(dataDifficultDir);

		const handlersDifficultDir = path.resolve(handlersDir, problemDifficult);
		await createDirIfNotExists(handlersDifficultDir);

		const textosDifficultDir = path.resolve(textosDir, problemDifficult);
		await createDirIfNotExists(textosDifficultDir);

		for (let problemName in problemsData[problemDifficult]) {

			problemName = problemName.toString();

			const aplProblemDir = path.resolve(aplDifficultDir, problemName);
			await createDirIfNotExists(aplProblemDir);

			const dataProblemDir = path.resolve(dataDifficultDir, problemName);
			await createDirIfNotExists(dataProblemDir);

			const handlersProblemDir = path.resolve(handlersDifficultDir, problemName);
			await createDirIfNotExists(handlersProblemDir);

			const textosProblemDir = path.resolve(textosDifficultDir, problemName);
			await createDirIfNotExists(textosProblemDir);

			const problemScreen = problemsData[problemDifficult][problemName];

			for (let screenName in problemScreen) {

				const dataTableImageSource = problemScreen[screenName]['dataTableImageSource'];
				const graphImageSource = problemScreen[screenName]['graphImageSource'];
				const firstTimeText = problemScreen[screenName]['firstTimeText'];
				const returnText = problemScreen[screenName]['returnText'];
				const failText = problemScreen[screenName]['failText'];
				const correctAnswer = problemScreen[screenName]['correctAnswer'];

				intents.push({
					"name": `${problemDifficult}${problemName}${screenName}Intent`,
					"slots": [],
					"samples": [
						`la solución es ${correctAnswer}`,
						`la respuesta es ${correctAnswer}`
					]
				});

				requires.push(`const ${problemDifficult}${problemName}${screenName} = require('./${problemDifficult}/${problemName}/${screenName}`);

				const aplContain = apl(dataTableImageSource);
				const aplPath = path.resolve(aplProblemDir, `${screenName}.json`);
				await fs.writeJson(aplPath, aplContain);

				const dataContain = data(graphImageSource);
				const dataPath = path.resolve(dataProblemDir, `${screenName}.json`);
				await fs.writeJson(dataPath, dataContain);

				const textsContain = texts(firstTimeText, returnText);
				const textPath = path.resolve(textosProblemDir, `${screenName}.js`);
				await fs.writeFile(textPath, textsContain, 'utf-8');

				const failTextsContain = failTexts(failText);
				const failTextPath = path.resolve(textosProblemDir, `${screenName}Fallo.js`);
				await fs.writeFile(failTextPath, failTextsContain, 'utf-8');

				const {
					normalScreen,
					failScreen
				} = handlers(screenName, problemName, graphImageSource, dataTableImageSource, problemDifficult);

				const normalScreenPath = path.resolve(handlersProblemDir, `${screenName}.js`);
				const failScreenPath = path.resolve(handlersProblemDir, `${screenName}Fallo.js`);

				await fs.writeFile(normalScreenPath, normalScreen, 'utf-8');
				await fs.writeFile(failScreenPath, failScreen, 'utf-8');

			}

		}
	}

	await fs.writeJson(path.resolve(outputPath, `model.json`), intents, 'utf-8');
	await fs.writeJson(path.resolve(outputPath, `require.json`), requires, 'utf-8');

	return true;
};

async function createDirIfNotExists(path) {
	return fs.ensureDir(path);
}
