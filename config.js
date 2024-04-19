export const config = {
	connectorName: 'Perplexity Connector',
	models: [
		'sonar-small-chat',
		'sonar-small-online',
		'sonar-medium-chat',
		'sonar-medium-online',
		'mistral-7b-instruct',
		'mixtral-8x7b-instruct',
		'codellama-70b-instruct',
		'llama-3-70b-instruct',
		'llama-3-8b-instruct',
	],
	properties: [
		{
			id: 'max_tokens',
			name: 'Max Tokens',
			value: 2048,
			type: 'number',
		},
		{
			id: 'temperature',
			name: 'Temperature',
			value: 1,
			type: 'number',
		},
		{
			id: 'top_p',
			name: 'Top P',
			value: 1,
			type: 'number',
		},
		{
			id: 'top_k',
			name: 'Top K',
			value: 0,
			type: 'number',
		},
		{
			id: 'frequency_penalty',
			name: 'Frequency Penalty',
			value: 0.5,
			type: 'number',
		},
		{
			id: 'presence_penalty',
			name: 'Presence Penalty',
			value: 0.5,
			type: 'number',
		},
	],
	settings: [
		{
			id: 'API_KEY',
			name: 'API Key',
			value: '',
			type: 'string',
		},
	],
	description:
		'This connector allows you to access Preplexite AI API from within Prompt Mixer.',
	author: 'Prompt Mixer',
	iconBase64:
		'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjMxOTIgMi4xOTcwOEw4LjAwMDM1IDUuNTE5MDRIMTEuMzE5MlYyLjE5NzA4Wk0xMS4zMTkyIDIuMTk3MDhWMy4xMDY1Nk03Ljk5MjY2IDEuNzA4NDRWMTQuMjkxNk0xMS4zMTkyIDguODQwMjlMOC4wMDAzNSA1LjUxODM0TTExLjMxOTIgOC44NDAyOVYxMy42MDI3TDguMDAwMzUgMTAuMjgwN00xMS4zMTkyIDguODQwMjlMOCA1LjUxODM0TTExLjMxOTIgOC44NDAyOUwxMS4zMTg4IDEwLjI2MTVIMTIuNzQzMlY1LjUxODM0SDhNOC4wMDAzNSA1LjUxODM0VjEwLjI4MDdNOC4wMDAzNSA1LjUxODM0TDQuNjgxMiA4Ljg0MDI5TTguMDAwMzUgMTAuMjgwN0w0LjY4MTIgMTMuNjAyN1Y4Ljg0MDI5TTQuNjgxMiA4Ljg0MDI5TDQuNjgwODUgMTAuMjYxNUgzLjI1Njg1VjUuNTE4MzRIOE00LjY4MTIgOC44NDAyOUw4IDUuNTE4MzRNOCA1LjUxOTA0TDQuNjgwODUgMi4xOTcwOFY1LjUxOTA0SDhaIiBzdHJva2U9IiM2RjczN0EiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz4KPC9zdmc+Cg==',
};
