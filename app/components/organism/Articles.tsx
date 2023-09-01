import { getDays } from "@/src/helper";
import Image from "next/image";
import CustomLink from "../atoms/CustomLink";
import { MediumType } from "@/src/types";
import axios from "axios";

export default async function Articles() {
  const mediumData: MediumType = await axios
    .get(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@laramo"
    )
    .then((res) => {
      if (res.data) {
        return res.data;
      }
      throw new Error("Failed to fetch data");
    });

  return (
    <>
      {mediumData && (
        <>
          <div className="flex flex-wrap gap-8 justify-center">
            {mediumData?.items.slice(0, 3).map((x, key: number) => {
              const daysPassed = getDays(x.pubDate);
              return (
                <a
                  href={x.link}
                  key={key}
                  className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 flex justify-center flex-col sm:flex-row items-center gap-4 hover:bg-zinc-50"
                >
                  <Image
                    width={100}
                    height={100}
                    alt="thumbnail"
                    className="rounded-md"
                    src={x.thumbnail}
                  />
                  <div className="flex gap-4 flex-col">
                    <div>
                      <p className="text-xl font-bold leading-none mr-1">
                        {x.title}
                      </p>
                      <time className="mb-1 text-sm text-light-accent dark:text-dark-accent font-semibold">
                        {daysPassed === 0
                          ? "today"
                          : daysPassed === 1
                          ? "1 day ago"
                          : daysPassed + " days ago"}
                      </time>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {x.categories.map((category: string, key: number) => {
                        return (
                          <span
                            key={key}
                            className="mr-2 text-sm font-medium bg-slate-100 p-1 rounded-md dark:text-dark-font dark:bg-dark-tertiary"
                          >
                            #{category}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          <CustomLink
            className="mx-auto"
            url={mediumData.feed.link}
            text="Read More"
          />
        </>
      )}
    </>
  );
}
