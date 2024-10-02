import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const GitInfo = ({ title, value, color }) => {
  return (
    <p className={`px-4 py-2 text-sm ${color}`}>
      {title}: &nbsp;{value}
    </p>
  );
};

const Github = () => {
  const data = useLoaderData();

  // const [data, setData] = useState([]);
  //   useEffect(() => {
  //     apiCall();
  //   }, []);

  return (
    <section className="flex flex-col bg-neutral-200 [box-shadow:0_0_1vw_gray_inset]">
      <article className="my-12 flex justify-center gap-8">
        <figure className="h-1/6 w-1/6 overflow-hidden rounded-full border bg-cyan-200">
          <img
            src={data.avatar_url ? data.avatar_url : ""}
            alt="githubProfile"
            className="h-full w-full object-cover selection:select-none"
            draggable={false}
          />
        </figure>

        <h3 className="w-fit content-center px-2 text-3xl font-bold capitalize">
          <p>{data.name}</p>

          <p className="text-lg font-medium lowercase">@{data.login}</p>

          <div className="mt-4 grid w-fit grid-cols-3 gap-4 text-center text-lg font-normal text-white">
            <GitInfo
              title={"Followers"}
              value={data.followers ? data.followers : 0}
              color="bg-gray-500"
            />

            <GitInfo
              title={"Following"}
              value={data.following ? data.following : 0}
              color="bg-teal-500"
            />

            <GitInfo
              title={"Repositories"}
              value={data.public_repos ? data.public_repos : 0}
              color="bg-slate-500"
            />

            <GitInfo
              title={"Gists"}
              value={data.public_gists ? data.public_gists : 0}
              color="bg-fuchsia-500"
            />
          </div>
        </h3>
      </article>
    </section>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/jayash101");
  return response.json();
};
