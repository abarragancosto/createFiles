
const utils = require('../../../utils');

module.exports = {
	canHandle(handlerInput) {
		return utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.attributeIs('solucion','pasoInicioDistancias', handlerInput)
			&& utils.attributeIs('level', 'medio', handlerInput)
			&& utils.attributeIs('problem', 'problemaDos', handlerInput);
	},
	handle(handlerInput) {

		let filePath = 'medio/problemaDos/pasoUnoNodoFallo';

		let speakOutput = utils.getSpeakOutput(handlerInput, filePath);

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};