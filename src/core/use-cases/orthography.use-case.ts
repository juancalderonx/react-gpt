// import type { OrthographyResponse } from "../../interfaces";

export const orthographyUseCase = async (prompt: string) => {
  try {
    console.log({ url: `${import.meta.env.VITE_GPT_API}/orthography-check` });
    const response = await fetch(
      `${import.meta.env.VITE_GPT_API}/orthography-check`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      }
    );

    if (!response.ok) {
      console.log("NO SE PUDO");
      throw new Error("No se pudo realizar la corrección");
    }

    // const data = (await response.json()) as OrthographyResponse;
    const data = await response.json();
    console.log({ data });

    return { ok: true, ...data };
  } catch (error) {
    return {
      ok: false,
      userScore: 0,
      errors: [],
      message: "No se pudo realizar la corrección",
    };
  }
};
