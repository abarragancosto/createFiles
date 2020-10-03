
const utils = require('../../../utils');

module.exports = {
	canHandle(handlerInput) {
		return utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.attributeIs('solucion','pasoDosDistancias', handlerInput)
			&& utils.attributeIs('level', 'medio', handlerInput)
			&& utils.attributeIs('problem', 'problemaUno', handlerInput);
	},
	handle(handlerInput) {

		let filePath = 'medio/problemaUno/pasoTresNodoFallo';

		let speakOutput = utils.getSpeakOutput(handlerInput, filePath);

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
