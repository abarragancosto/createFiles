
const utils = require('../../../utils');

const screen = "pasoUnoNodo";

const dataTableImageSource = "https://i.ibb.co/5TqrNvR/paso-Uno-Nodo-P3.png";
const graphImageSource = "https://i.ibb.co/PWdcJKs/grafoP3.png";

module.exports = {
	canHandle(handlerInput) {
		return (utils.requestTypeIs(handlerInput,'IntentRequest')
			&& utils.intentNameIs(handlerInput, 'dificilproblemaUnopasoUnoNodoIntent')
			&& utils.attributeIs('solucion', 'pasoInicioDistancias', handlerInput)
			&& utils.attributeIs('level', 'dificil', handlerInput)
			&& utils.attributeIs('problem', 'problemaUno', handlerInput))
			|| (utils.requestTypeIs(handlerInput,'IntentRequest') &&
				utils.intentNameIs(handlerInput,'volverSolucionIntent')
			&& utils.attributeIs('solucion', screen, handlerInput)
			&& utils.attributeIs('level', 'dificil', handlerInput)
			&& utils.attributeIs('problem', 'problemaUno', handlerInput));
	},
	handle(handlerInput) {

		let filePath = `dificil/problemaUno/${screen}`;

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
