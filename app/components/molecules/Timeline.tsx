import CustomLink from "../atoms/Link";
/**
 * Interface
 */
interface TimelineType {
  date: string;
  desc: string;
  title: string;
  learnMore?: {
    url: string;
    text: string;
  };
}
export default function Timeline({ events }: { events: TimelineType[] }) {
  return (
    <ol className="relative border-l border-gray-700 dark:text-dark-font dark:border-gray-200 max-w-3xl">
      {events.map((event, key) => {
        return (
          <li key={key} className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-light-accent rounded-full mt-1.5 -left-1.5 dark:bg-dark-accent"></div>
            <time className="mb-1 text-sm text-light-accent dark:text-dark-accent font-semibold">
              {event.date}
            </time>
            <h3 className="text-lg font-medium"> {event.title}</h3>
            <p className="mb-4 leading-7">{event.desc}</p>
            {event.learnMore && (
              <CustomLink
                url={event.learnMore.url}
                text={event.learnMore.text}
              />
            )}
          </li>
        );
      })}
    </ol>
  );
}
