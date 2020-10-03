const getPrevScreen = require('./getPrevScreen');
module.exports = function (screenName, problemName, graphImageSource, dataTableImageSource, level) {

const prevSreen = getPrevScreen(screenName);

	const normalScreen = `
const utils = require('../../../utils');

const screen = "${screenName}";

const dataTableImageSource = "${dataTableImageSource}";
const graphImageSource = "${graphImageSource}";

module.exports = {
\tcanHandle(handlerInput) {
\t\treturn (utils.requestTypeIs(handlerInput,'IntentRequest')
\t\t\t&& utils.intentNameIs(handlerInput, '${level}${problemName}${screenName}Intent')
\t\t\t&& utils.attributeIs('solucion', '${prevSreen}', handlerInput)
\t\t\t&& utils.attributeIs('level', '${level}', handlerInput)
\t\t\t&& utils.attributeIs('problem', '${problemName}', handlerInput))
\t\t\t|| (utils.requestTypeIs(handlerInput,'IntentRequest') &&
\t\t\t\tutils.intentNameIs(handlerInput,'volverSolucionIntent')
\t\t\t&& utils.attributeIs('solucion', screen, handlerInput)
\t\t\t&& utils.attributeIs('level', '${level}', handlerInput)
\t\t\t&& utils.attributeIs('problem', '${problemName}', handlerInput));
\t},
\thandle(handlerInput) {

\t\tlet filePath = \`${level}/${problemName}/\${screen}\`;

\t\tlet speakOutput = utils.getSpeakOutput(handlerInput, filePath);

\t\tutils.showAPLWithScreen(handlerInput, filePath);

\t\tutils.setAttributeWithValue("solucion", screen, handlerInput);

\t\tutils.sendMessageToWebSocket(speakOutput, graphImageSource, dataTableImageSource,  handlerInput);

\t\treturn handlerInput.responseBuilder
\t\t\t.speak(speakOutput)
\t\t\t.reprompt(speakOutput)
\t\t\t.getResponse();
\t}
};
`;

	const failScreen =  `
const utils = require('../../../utils');

module.exports = {
\tcanHandle(handlerInput) {
\t\treturn utils.requestTypeIs(handlerInput,'IntentRequest')
\t\t\t&& utils.attributeIs('solucion','${prevSreen}', handlerInput)
\t\t\t&& utils.attributeIs('level', '${level}', handlerInput)
\t\t\t&& utils.attributeIs('problem', '${problemName}', handlerInput);
\t},
\thandle(handlerInput) {

\t\tlet filePath = '${level}/${problemName}/${screenName}Fallo';

\t\tlet speakOutput = utils.getSpeakOutput(handlerInput, filePath);

\t\treturn handlerInput.responseBuilder
\t\t\t.speak(speakOutput)
\t\t\t.reprompt(speakOutput)
\t\t\t.getResponse();
\t}
};
`;
	return {
		normalScreen,
		failScreen
	};

};


