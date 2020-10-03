
const utils = require('../../../utils');

const screen = "pasoUnoDistancias";

const dataTableImageSource = "https://i.ibb.co/QnhWZgw/paso-Uno-Distancias-P2.png";
const graphImageSource = "https://i.ibb.co/qs3B61w/grafo-dirigido.png";

module.exports = {
	canHandle(handlerInput) {
		return (utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.intentNameIs(handlerInput, 'medioproblemaDospasoUnoDistanciasIntent')
			&& utils.attributeIs('solucion', 'pasoUnoCandidatos', handlerInput)
			&& utils.attributeIs('level', 'medio', handlerInput)
			&& utils.attributeIs('problem', 'problemaDos', handlerInput))
			|| (utils.requestTypeIs(handlerInput,'IntentRequest') &&
				utils.intentNameIs(handlerInput,'volverSolucionIntent')
			&& utils.attributeIs('solucion', screen, handlerInput)
			&& utils.attributeIs('level', 'medio', handlerInput)
			&& utils.attributeIs('problem', 'problemaDos', handlerInput));
	},
	handle(handlerInput) {

		let filePath = `medio/problemaDos/${screen}`;

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
