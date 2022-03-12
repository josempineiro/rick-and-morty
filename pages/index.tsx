import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import classNames from "classnames";

const pages = [
  {
    href: "/game",
    text: "Game",
    rate: "2",
    color: "bg-[#01B4C6]",
  },
  {
    href: "/episodes",
    text: "Episodes",
    rate: "1",
    color: "bg-[#97ce4c]",
  },
  {
    href: "/locations",
    text: "Locations",
    rate: "1",
    color: "bg-[#FFF874]",
  },
  {
    href: "/characters",
    text: "Characters",
    rate: "2",
    color: "bg-[#BEE5FD]",
  },
  {
    href: "/quotes",
    text: "Quotes",
    rate: "2",
    color: "bg-[#F675DA]",
  },
  {
    href: "/about",
    text: "About",
    rate: "1",
    color: "bg-[#917C5D]",
  },
];

function Home() {
  return (
    <>
      <Head>
        <title>Rick and Morty - Funny Application</title>
      </Head>
      <div className="w-full h-full justify-center sm:h-auto p-4 py-16 sm:p-8">
        <div className="max-w-6xl	mx-auto grid grid-cols-2 sm:grid-cols-3 gap-8">
          {pages.map((page, index) => (
            <Link key={page.href} href={page.href}>
              <a
                className={classNames(
                  page.rate === "2"
                    ? "block aspect-w-1 sm:aspect-w-2 aspect-h-1 sm:aspect-h-1 col-span-1 sm:col-span-2"
                    : "block aspect-w-1 sm:aspect-w-1 aspect-h-1 col-span-1"
                )}
              >
                <div
                  className={`rounded-xl ${page.color} shadow-lg flex items-center justify-center`}
                >
                  {page.text}
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

Home.Layout = Fragment;

export default Home;
