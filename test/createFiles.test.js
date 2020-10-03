const fs = require('fs-extra');
const path = require('path');
const createFiles = require('../src/createFiles');

describe('Comprobación correcto funcionamiento generador de ficheros', function () {

	beforeEach(async function () {
		await cleanEnv();
	});

	afterEach(async function () {
		await cleanEnv();
	});

	test('Debería generar todos los ficheros correctamente cuando es introducido un único problema de nivel difícil', async function () {
		const jsonPath = path.resolve('test', 'input', 'oneHardDifficultyProblem.json');
		const outputPath = path.resolve('test', 'output', 'oneHardDifficultyProblem');

		const comparatorResult = await createFiles({jsonPath, outputPath});
		expect(comparatorResult).toBe(true);

		const expected = await fs.readdir(path.resolve('test', 'outputExpected', 'oneHardDifficultyProblem'));
		const actual = await fs.readdir(path.resolve('test', 'output', 'oneHardDifficultyProblem'));
		expect(actual).toEqual(expected);
	});

	test('Debería generar todos los ficheros correctamente cuando son introducidos varios problemas de nivel medio', async function () {
		const jsonPath = path.resolve('test', 'input', 'twoMediumDifficultyProblems.json');
		const outputPath = path.resolve('test', 'output', 'twoMediumDifficultyProblems');

		const comparatorResult = await createFiles({jsonPath, outputPath});
		expect(comparatorResult).toBe(true);

		const expected = await fs.readdir(path.resolve('test', 'outputExpected', 'twoMediumDifficultyProblems'));
		const actual = await fs.readdir(path.resolve('test', 'output', 'twoMediumDifficultyProblems'));
		expect(actual).toEqual(expected);
	});

	test('Debería generar todos los ficheros correctamente cuando son introducidos varios problemas de distinto nivel', async function () {
		const jsonPath = path.resolve('test', 'input', 'differentsDifficultyProblems.json');
		const outputPath = path.resolve('test', 'output', 'differentsDifficultyProblems');

		const comparatorResult = await createFiles({jsonPath, outputPath});
		expect(comparatorResult).toBe(true);

		const expected = await fs.readdir(path.resolve('test', 'outputExpected', 'differentsDifficultyProblems'));
		const actual = await fs.readdir(path.resolve('test', 'output', 'differentsDifficultyProblems'));
		expect(actual).toEqual(expected);
	});

	test('Debería intentar generar los distintos directorios de problemas correspondientes a los datos introducidos', async function () {
		const jsonPath = path.resolve('test', 'input', 'differentsFailsDifficultyProblems.json');
		const outputPath = path.resolve('test', 'output', 'differentsFailsDifficultyProblems');

		const comparatorResult = await createFiles({jsonPath, outputPath});
		expect(comparatorResult).toBe(true);

		const expected = await fs.readdir(path.resolve('test', 'outputExpected', 'differentsFailsDifficultyProblems'));
		const actual = await fs.readdir(path.resolve('test', 'output', 'differentsFailsDifficultyProblems'));
		expect(actual).toEqual(expected);
	});

	async function cleanEnv () {
		await fs.emptyDir(path.resolve('test', 'output'));
	}
});
