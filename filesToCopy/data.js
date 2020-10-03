module.exports = function (imageSource) {

	return {
		"bodyTemplate3Data": {
			"type": "object",
			"objectId": "bt3Sample",
			"backgroundImage": {
				"contentDescription": null,
				"smallSourceUrl": null,
				"largeSourceUrl": null,
				"sources": [
					{
						"url": "https://i.ibb.co/drJ8RRS/fondo-TFGSin-Nombre.png",
						"size": "small",
						"widthPixels": 0,
						"heightPixels": 0
					},
					{
						"url": "https://i.ibb.co/drJ8RRS/fondo-TFGSin-Nombre.png",
						"size": "large",
						"widthPixels": 0,
						"heightPixels": 0
					}
				]
			},
			"title": "<tt> <tt> <tt> <tt> <tt> Aprendiendo Dijkstra",
			"color": "#074f65",
			"image": {
				"contentDescription": null,
				"smallSourceUrl": null,
				"largeSourceUrl": null,
				"sources": [
					{
						"url": imageSource,
						"size": "small",
						"widthPixels": 0,
						"heightPixels": 0
					},
					{
						"url": imageSource,
						"size": "large",
						"widthPixels": 0,
						"heightPixels": 0
					}
				]
			},
			"textContent": {
				"primaryText": {
					"type": "PlainText",
					"text": " <tr /> <tr /> • Para ello, debemos calcular los caminos mínimos parcialmente. En cada etapa debemos hacer:<br /> <tr /> <tr /> • Tomar el camino mínimo de los disponibles <br /> <tr /> <tr /> • Recalcular los demás: min(caminoActual, camino por el camino mínimo tomado)"
				}
			},
			"logoUrl": "https://i.ibb.co/s6BVB8M/iconoAPP.png",
			"hintText": "Try, \"Alexa, search for blue cheese\""
		}
	};
};
