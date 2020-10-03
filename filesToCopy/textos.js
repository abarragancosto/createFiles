module.exports = function (firstTimeText, returnText) {
	return `module.exports = {
\tfirstTime() {
\t\treturn '${firstTimeText}';
\t},
\twithVolverIntent() {
\t\treturn '${returnText}';
\t}
};
`
};
