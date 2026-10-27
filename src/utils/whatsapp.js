const configuredNumber = import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, "") ?? "";

export const hasWhatsAppContact = /^\d{10,15}$/.test(configuredNumber);

export function createWhatsAppUrl(message) {
  if (!hasWhatsAppContact) {
    return null;
  }

  return `https://wa.me/${configuredNumber}?text=${encodeURIComponent(message)}`;
}