const formatter = new Intl.RelativeTimeFormat();

export const getDays = (pubDate: string) => {
  const deltaDays =
    (new Date(pubDate).getDate() - Date.now()) / (1000 * 3600 * 24);
  return formatter.format(Math.round(deltaDays), "days");
};
