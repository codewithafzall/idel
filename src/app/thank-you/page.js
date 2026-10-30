import ThankYou from "./ThankYou";
import { LEAD_FLAG } from "../lib/lead";

export const metadata = {
  title: "Thank You - IDEL",
  description: "Thank you for getting in touch with IDEL.",
  robots: {
    index: false,
    follow: false,
  },
};

// Runs during HTML parsing, before the Google Ads / GTM scripts load (afterInteractive).
// No flag = not a fresh submission (refresh, back/forward, bookmark, direct URL) -> send home
// before any tag fires. Valid flag = consume it and push one conversion event for GTM.
const guardScript = `
(function () {
  try {
    var source = sessionStorage.getItem("${LEAD_FLAG}");
    if (!source) {
      document.documentElement.style.visibility = "hidden";
      window.location.replace("/");
      return;
    }
    sessionStorage.removeItem("${LEAD_FLAG}");
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "lead_form_submit", form_location: source });
  } catch (e) {}
})();
`;

const page = () => {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: guardScript }} />
      <ThankYou />
    </>
  );
};

export default page;
