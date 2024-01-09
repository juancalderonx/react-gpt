import { ProsConsResponse } from '../../interfaces/pros-cons.response';

export const prosConsUseCase = async (prompt: string) => {
  try {
    const resp = await fetch(
      `${import.meta.env.VITE_GPT_API}/pros-cons-discusser`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      },
    );

    if (!resp.ok) throw new Error('No se pudo realizar la comparación');

    const data = (await resp.json()) as ProsConsResponse;

    return {
      ok: true,
      ...data,
    };
  } catch (error) {
    return {
      ok: false,
      content: 'Error',
      message: 'No se pudo realizar la comparación',
    };
  }
};
