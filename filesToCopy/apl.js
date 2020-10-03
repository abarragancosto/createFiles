module.exports = function (imageSource) {
	return {
		"type": "APL",
		"version": "1.1",
		"settings": {},
		"theme": "light",
		"import": [
			{
				"name": "alexa-layouts",
				"version": "1.1.0"
			}
		],
		"resources": [
			{
				"description": "Stock color for the light theme",
				"colors": {
					"colorTextPrimary": "#074f65"
				}
			},
			{
				"description": "Stock color for the dark theme",
				"when": "${viewport.theme == 'dark'}",
				"colors": {
					"colorTextPrimary": "#074f65"
				}
			},
			{
				"description": "Standard font sizes",
				"dimensions": {
					"textSizeBody": 48,
					"textSizePrimary": 27,
					"textSizeSecondary": 23,
					"textSizeSecondaryHint": 25
				}
			},
			{
				"description": "Common spacing values",
				"dimensions": {
					"spacingThin": 6,
					"spacingSmall": 12,
					"spacingMedium": 24,
					"spacingLarge": 48,
					"spacingExtraLarge": 72
				}
			},
			{
				"description": "Common margins and padding",
				"dimensions": {
					"marginTop": 40,
					"marginLeft": 60,
					"marginRight": 60,
					"marginBottom": 40
				}
			}
		],
		"styles": {
			"textStyleBase": {
				"description": "Base font description; set color",
				"values": [
					{
						"color": "@colorTextPrimary"
					}
				]
			},
			"textStyleBase0": {
				"description": "Thin version of basic font",
				"extend": "textStyleBase",
				"values": {
					"fontWeight": "100"
				}
			},
			"textStyleBase1": {
				"description": "Light version of basic font",
				"extend": "textStyleBase",
				"values": {
					"fontWeight": "300"
				}
			},
			"mixinBody": {
				"values": {
					"fontSize": "@textSizeBody"
				}
			},
			"mixinPrimary": {
				"values": {
					"fontSize": "@textSizePrimary"
				}
			},
			"mixinSecondary": {
				"values": {
					"fontSize": "@textSizeSecondary"
				}
			},
			"textStylePrimary": {
				"extend": [
					"textStyleBase1",
					"mixinPrimary"
				]
			},
			"textStyleSecondary": {
				"extend": [
					"textStyleBase0",
					"mixinSecondary"
				]
			},
			"textStyleBody": {
				"extend": [
					"textStyleBase1",
					"mixinBody"
				]
			},
			"textStyleSecondaryHint": {
				"values": {
					"fontFamily": "Bookerly",
					"fontStyle": "italic",
					"fontSize": "@textSizeSecondaryHint",
					"color": "@colorTextPrimary"
				}
			}
		},
		"onMount": [],
		"graphics": {},
		"commands": {},
		"layouts": {},
		"mainTemplate": {
			"parameters": [
				"payload"
			],
			"items": [
				{
					"when": "${viewport.shape == 'round'}",
					"type": "Container",
					"direction": "column",
					"width": "100vw",
					"height": "100vh",
					"items": [
						{
							"type": "Image",
							"width": "100vw",
							"height": "100vh",
							"source": "${payload.bodyTemplate3Data.image.sources[0].url}",
							"scale": "fill",
							"align": "center",
							"overlayColor": "rgba(0, 0, 0, 0.6)",
							"position": "absolute"
						},
						{
							"type": "ScrollView",
							"width": "100vw",
							"height": "100vh",
							"item": [
								{
									"type": "Container",
									"direction": "column",
									"alignItems": "center",
									"paddingLeft": 30,
									"paddingRight": 30,
									"paddingBottom": 200,
									"items": [
										{
											"type": "AlexaHeader",
											"headerAttributionImage": "${payload.bodyTemplate3Data.logoUrl}",
											"headerTitle": "${payload.bodyTemplate3Data.title}"
										},
										{
											"type": "Text",
											"text": "<b>Calcular el camino mínimo de un nodo al resto de nodos</b>",
											"style": "textStylePrimary",
											"color": "#4dd2ff",
											"width": "90vw",
											"textAlign": "center"
										},
										{
											"type": "Text",
											"text": "<b>${payload.bodyTemplate3Data.textContent.title.text}</b>",
											"style": "textStyleBody",
											"width": "90vw",
											"textAlign": "center"
										},
										{
											"type": "Text",
											"text": "${payload.bodyTemplate3Data.textContent.subtitle.text}",
											"style": "textStylePrimary",
											"width": "90vw",
											"textAlign": "center"
										},
										{
											"type": "Text",
											"text": "${payload.bodyTemplate3Data.textContent.primaryText.text}",
											"paddingTop": 40,
											"style": "textStylePrimary",
											"width": "90vw",
											"textAlign": "center"
										},
										{
											"type": "Text",
											"text": "${payload.bodyTemplate3Data.textContent.bulletPoint.text}",
											"paddingTop": 50,
											"style": "textStylePrimary",
											"width": "90vw",
											"textAlign": "center"
										}
									]
								}
							]
						}
					]
				},
				{
					"type": "Container",
					"width": "100vw",
					"height": "100vh",
					"items": [
						{
							"type": "Image",
							"source": "${payload.bodyTemplate3Data.backgroundImage.sources[0].url}",
							"scale": "best-fill",
							"width": "100vw",
							"height": "100vh",
							"position": "absolute"
						},
						{
							"theme": "light",
							"headerTitle": "${payload.bodyTemplate3Data.title}",
							"headerAttributionImage": "${payload.bodyTemplate3Data.logoUrl}",
							"type": "AlexaHeader"
						},
						{
							"type": "Container",
							"width": "3000dp",
							"height": "50dp",
							"paddingLeft": "16dp",
							"paddingTop": "16dp",
							"paddingRight": "16dp",
							"paddingBottom": "16dp",
							"item": [
								{
									"type": "Text",
									"style": "textStylePrimary",
									"width": "1000",
									"textAlign": "center",
									"textAlignVertical": "center",
									"color": "#4d6eff",
									"text": "<b>Calcular el camino mínimo de un nodo al resto de nodos</b>"
								}
							]
						},
						{
							"type": "Container",
							"maxHeight": "350dp",
							"paddingLeft": 40,
							"paddingRight": 72,
							"direction": "row",
							"items": [
								{
									"type": "Image",
									"width": "40vw",
									"height": "45vh",
									"source": "${payload.bodyTemplate3Data.image.sources[0].url}",
									"scale": "contain",
									"align": "center"
								},
								{
									"type": "Image",
									"width": "550dp",
									"height": "300dp",
									"paddingLeft": "100",
									"paddingTop": "50",
									"source": imageSource,
									"scale": "contain",
									"align": "center"
								}
							],
							"grow": 1
						}
					]
				}
			]
		}
	}

};
