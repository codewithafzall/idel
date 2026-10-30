// One-time flag that lets the thank-you page know a real form submission just happened.
// Prevents refreshes, back/forward and direct visits from counting as extra conversions.
export const LEAD_FLAG = "idel_lead_submitted";
export const THANK_YOU_PATH = "/thank-you/";

export const goToThankYou = (source) => {
  try {
    sessionStorage.setItem(LEAD_FLAG, source || "website");
  } catch (e) {}

  // Full page load (not client-side routing) so Google Ads / GTM tags fire on the thank-you page
  window.location.assign(THANK_YOU_PATH);
};
