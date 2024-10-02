import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="flex flex-col gap-32 py-4">
      <article className="part1 mx-auto mt-8 flex max-w-7xl justify-evenly p-16">
        <figure>
          <img
            className="w-[25vw]"
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="image1"
          />
        </figure>

        <aside className="flex w-2/3 flex-col items-end justify-evenly">
          <h2 className="flex flex-col items-end text-5xl font-bold">
            Download Now
            <span className="text-4xl">Lorem Ipsum</span>
          </h2>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg bg-orange-700 p-3 text-lg text-white hover:bg-red-500"
          >
            <svg
              fill="white"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
            </svg>
            Download now
          </Link>
        </aside>
      </article>

      <article className="part2 mx-auto mb-8 flex flex-col gap-4">
        <figure>
          <img
            className="w-48 sm:w-96"
            src="https://i.ibb.co/2M7rtLk/Remote1.png"
            alt="image2"
          />
        </figure>

        <h1 className="py-10 text-center text-2xl font-medium">
          Lorem Ipsum Yojo
        </h1>
      </article>
    </section>
  );
}

export default Home;
