import { useEffect } from 'react';

const SITE_NAME = 'Ox Tours and Travels';
const DEFAULT_TITLE = `${SITE_NAME} — Chauffeur-Driven Vehicle Rental`;

/** Sets the browser tab title for a page; omit `title` for the home page. */
export const usePageTitle = (title?: string) => {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE_NAME}` : DEFAULT_TITLE;
  }, [title]);
};
