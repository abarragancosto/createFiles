
const utils = require('../../../utils');

const screen = "pasoUnoDistancias";

const dataTableImageSource = "https://i.ibb.co/5L2qZ0c/uno-Distancias.png";
const graphImageSource = "https://i.ibb.co/xG0Pb4d/enunciado.png";

module.exports = {
	canHandle(handlerInput) {
		return (utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.intentNameIs(handlerInput, 'medioproblemaUnopasoUnoDistanciasIntent')
			&& utils.attributeIs('solucion', 'pasoUnoCandidatos', handlerInput)
			&& utils.attributeIs('level', 'medio', handlerInput)
			&& utils.attributeIs('problem', 'problemaUno', handlerInput))
			|| (utils.requestTypeIs(handlerInput,'IntentRequest') &&
				utils.intentNameIs(handlerInput,'volverSolucionIntent')
			&& utils.attributeIs('solucion', screen, handlerInput)
			&& utils.attributeIs('level', 'medio', handlerInput)
			&& utils.attributeIs('problem', 'problemaUno', handlerInput));
	},
	handle(handlerInput) {

		let filePath = `medio/problemaUno/${screen}`;

		let speakOutput = utils.getSpeakOutput(handlerInput, filePath);

		utils.showAPLWithScreen(handlerInput, filePath);

		utils.setAttributeWithValue("solucion", screen, handlerInput);

		utils.sendMessageToWebSocket(speakOutput, graphImageSource, dataTableImageSource,  handlerInput);

		return handlerInput.responseBuilder
			.speak(speakOutput)
			.reprompt(speakOutput)
			.getResponse();
	}
};
