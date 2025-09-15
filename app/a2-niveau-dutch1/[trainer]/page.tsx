import A2NiveauDutchClient from "../client-component";

export const metadata = {
  title: "A2 Niveautest Nederlands",
  description: "Maak de A2 niveautest Nederlands online en verstuur je antwoorden direct naar je docent.",
};

export default function A2NiveauDutchPage({ params }: { params: { trainer: string } }) {
  return <A2NiveauDutchClient trainer={params.trainer} />;
}

