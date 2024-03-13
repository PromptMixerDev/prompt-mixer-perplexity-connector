import { config } from './config.js';

const API_KEY = 'API_KEY';

interface Message {
	role: 'system' | 'user' | 'assistant';
	content: string;
}

interface Completion {
	Content: string | null;
	TokenUsage: number | undefined;
}

interface ConnectorResponse {
	Completions: Completion[];
	ModelType: string;
}

interface PreplexiteResponse {
	id: string;
	model: string;
	created: number;
	usage: {
		prompt_tokens: number;
		completion_tokens: number;
		total_tokens: number;
	};
	object: string;
	choices: {
		index: number;
		finish_reason: string;
		message: {
			role: string;
			content: string;
		};
		delta: {
			role: string;
			content: string;
		};
	}[];
}

const mapToResponse = (outputs: PreplexiteResponse[]): ConnectorResponse => {
	return {
		Completions: outputs.map((output) => ({
			Content: output.choices[0].message.content,
			TokenUsage: output.usage.total_tokens,
		})),
		ModelType: outputs[0].model,
	};
};

async function main(
	model: string,
	prompts: string[],
	properties: Record<string, unknown>,
	settings: Record<string, unknown>,
): Promise<ConnectorResponse> {
	const apiKey = settings?.[API_KEY] as string;

	const messageHistory: Message[] = [];
	const outputs: PreplexiteResponse[] = [];

	try {
		for (const prompt of prompts) {
			messageHistory.push({ role: 'user', content: prompt });

			const response = await fetch(
				'https://api.perplexity.ai/chat/completions',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${apiKey}`,
					},
					body: JSON.stringify({
						model: model,
						messages: messageHistory,
						...properties,
					}),
				},
			);

			const data: PreplexiteResponse = await response.json();

			const assistantResponse = data.choices[0].message.content;

			messageHistory.push({ role: 'assistant', content: assistantResponse });

			outputs.push(data);
		}

		return mapToResponse(outputs);
	} catch (error) {
		console.error('Error in main function:', error);
		throw error;
	}
}

export { main, config };
