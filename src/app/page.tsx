import LandingRuntime from "./LandingRuntime";

export default function Home() {
  return (
    <>
      <form
        name="ios-waitlist"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="hidden" name="form-name" value="ios-waitlist" />
        <p className="hidden"><input name="bot-field" /></p>
        <input type="email" name="email" required />
      </form>
      <LandingRuntime />
    </>
  );
}
