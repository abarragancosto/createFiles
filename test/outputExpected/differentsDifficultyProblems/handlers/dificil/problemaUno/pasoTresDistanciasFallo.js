
const utils = require('../../../utils');

module.exports = {
	canHandle(handlerInput) {
		return utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.attributeIs('solucion','pasoTresCandidatos', handlerInput)
			&& utils.attributeIs('level', 'dificil', handlerInput)
			&& utils.attributeIs('problem', 'problemaUno', handlerInput);
	},
	handle(handlerInput) {

		let filePath = 'dificil/problemaUno/pasoTresDistanciasFallo';

		let speakOutput = utils.getSpeakOutput(handlerInput, filePath);

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
