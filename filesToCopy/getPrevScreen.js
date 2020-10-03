module.exports = function (screenName) {

	if (screenName === 'pasoCuatroCandidatos') {
		return 'pasoCuatroNodo'
	}
	if (screenName === 'pasoCuatroDistancias') {
		return 'pasoCuatroCandidatos'
	}
	if (screenName === 'pasoCuatroNodo') {
		return 'pasoTresDistancias'
	}
	if (screenName === 'pasoDosCandidatos') {
		return 'pasoDosNodo'
	}
	if (screenName === 'pasoDosDistancias') {
		return 'pasoDosCandidatos'
	}
	if (screenName === 'pasoDosNodo') {
		return 'pasoUnoDistancias'
	}
	if (screenName === 'pasoInicioCandidatos') {
		return 'pasoInicioNodo'
	}
	if (screenName === 'pasoInicioDistancias') {
		return 'pasoInicioCandidatos'
	}
	if (screenName === 'pasoTresCandidatos') {
		return 'pasoTresNodo'
	}
	if (screenName === 'pasoTresDistancias') {
		return 'pasoTresCandidatos'
	}
	if (screenName === 'pasoTresNodo') {
		return 'pasoDosDistancias'
	}
	if (screenName === 'pasoUnoCandidatos') {
		return 'pasoUnoNodo'
	}
	if (screenName === 'pasoUnoDistancias') {
		return 'pasoUnoCandidatos'
	}
	if (screenName === 'pasoUnoNodo') {
		return 'pasoInicioDistancias'
	}

	return 'VACIO'

};
