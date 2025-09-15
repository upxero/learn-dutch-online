import A2NiveauDutchClient from "../client-component";

export const metadata = {
  title: "A2 Niveautest Nederlands",
  description:
    "Maak de A2 niveautest Nederlands online en verstuur je antwoorden direct naar je docent.",
};

type PageProps = {
  params: Promise<{ trainer: string }>;
};

export default async function A2NiveauDutchPage({ params }: PageProps) {
  const { trainer } = await params;
  return <A2NiveauDutchClient trainer={trainer} />;
}


