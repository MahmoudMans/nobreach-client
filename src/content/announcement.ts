// NB_ANNOUNCEMENT_BAR_V1
// Slim bar shown above the header on every page.
// To retire it, set active to false. To announce something new, change the
// id as well, so visitors who closed the previous bar see the new one.
import { getEvent } from "@/content/events";

export type Announcement = {
  id: string;
  active: boolean;
  label: string;
  message: string;
  shortMessage: string;
  details: string[];
  href: string;
  cta: string;
  shortCta: string;
};

const cr4ckout3 = getEvent("cr4ckout-3-0");

export const announcement: Announcement = {
  id: "cr4ckout-3-registration",
  active: Boolean(cr4ckout3?.registrationUrl),
  label: "CR4CKOUT 3.0",
  message: "Registration is now open",
  shortMessage: "registration is open",
  details: cr4ckout3
    ? [cr4ckout3.year, cr4ckout3.location].filter(
        (value) => value && !/classified/i.test(value)
      )
    : [],
  href: cr4ckout3?.registrationUrl ?? "/cr4ckout",
  cta: "Register now",
  shortCta: "Register"
};
