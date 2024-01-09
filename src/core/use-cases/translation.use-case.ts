import { GptTranslationResponse } from 'neron-lib';

export const translationUseCase = async (data: {
  prompt: string;
  sourceLanguage: string;
  targetLanguage: string;
}) => {
  const { prompt, sourceLanguage, targetLanguage } = data;

  try {
    const resp = await fetch(`${import.meta.env.VITE_GPT_API}/translations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, sourceLanguage, targetLanguage }),
    });

    if (!resp.ok) throw new Error('No se pudo realizar la traducción');

    const data = (await resp.json()) as GptTranslationResponse;

    console.log({ data });

    return {
      ok: true,
      input: data.input,
      output: data.output,
    };
  } catch (error) {
    console.log(error);
    return { ok: false };
  }
};
