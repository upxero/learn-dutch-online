import Head from "next/head";

export default function ThankYouPage() {
  return (
    <>
      <Head>
        <title>Form Submission Successful | Learn Dutch Online</title>
        <meta name="description" content="Thank you for signing up. We'll get in touch with you shortly." />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-4">Thank you!</h1>
        <p className="mb-6 text-center max-w-md">
          Your form has been successfully submitted. We'll get in touch with you soon.
        </p>
        <a href="/" className="text-blue-600 hover:underline text-lg">
          ← Back to Home
        </a>
      </div>
    </>
  );
}
