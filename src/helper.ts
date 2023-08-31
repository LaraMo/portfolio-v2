export const getDays = (pubDate: string) => {
  return Math.floor(
    (Date.parse(new Date().toUTCString()) - Date.parse(pubDate)) / 86400000
  );
};
