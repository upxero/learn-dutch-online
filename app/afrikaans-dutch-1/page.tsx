// app/afrikaans-dutch-1/page.tsx
import dynamic from "next/dynamic";

export const metadata = {
  title: "Beginners Nederlands – voor Afrikaans sprekers",
  description: "Overzicht van de cursus Nederlands voor Afrikaanssprekenden. Leer stap voor stap met sessies en huiswerkopdrachten.",
};

const AfrikaansDutchClient = dynamic(() => import("./client-component"), { ssr: false });

export default function Page() {
  return <AfrikaansDutchClient />;
}
