module.exports = function (firstTimeText) {
	return `module.exports = {
\tfirstTime() {
\t\treturn '${firstTimeText}';
\t}
};
`
};
