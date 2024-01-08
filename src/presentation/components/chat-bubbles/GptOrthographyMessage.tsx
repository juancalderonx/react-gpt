import { ReactNode } from "react";

interface Props {
  userScore: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
  message: string;
}

export const GptOrthographyMessage = ({
  userScore,
  errors,
  message,
}: Props) => {
  return (
    console.log({ userScore, errors, message }),
    console.log({ typeof: typeof errors }),
    (
      <div className="col-start-1 col-end-9 p-3 rounded-lg">
        <div className="flex flex-row items-start">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-600 flex-shrink-0">
            G
          </div>
          <div className="relative ml-3 text-sm bg-black bg-opacity-25 pt-3 pb-2 px-4 shadow rounded-xl">
            <h3 className="text-3xl">Puntaje: {userScore}%</h3>
            <p>{message}</p>

            {Object.keys(errors).length === 0 ? (
              <p>No se encontraron errores, perfecto!</p>
            ) : (
              <>
                <h3 className="text-2xl">Errores encontrados</h3>
                <ul>
                  {Object.values(errors).map((error, i) => (
                    <li key={i}>{error as ReactNode}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
};
