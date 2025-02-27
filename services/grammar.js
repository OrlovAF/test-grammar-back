const findIncorrectWords = async (text) => {
  const apiKey = process.env.API_KEY;
  const prompt = 'Find grammatical errors in this text and write only the incorrect words separated by a comma: ';

  const result = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [ 
        { 
          role: 'user', 
          content: `${prompt}"${text}"`
        }
      ],
      max_tokens: 100,
      temperature: 0,
    }),
  });

  const data = await result.json();
  return data.choices.at(0).message.content.trim().split(', ')
}

module.exports = {
  findIncorrectWords
} 