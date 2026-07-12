import './WhatsAppButton.css';

/**
 * WhatsAppButton
 * Floating action button linking to WhatsApp with a pre-filled message.
 * Update WHATSAPP_NUMBER to the real business number (international
 * format, no + or spaces) before deploying.
 */
const WHATSAPP_NUMBER = '18005550199';
const DEFAULT_MESSAGE = "Hi PrimeHomes! I'd like to learn more about your properties.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" aria-hidden="true" />
    </a>
  );
}
