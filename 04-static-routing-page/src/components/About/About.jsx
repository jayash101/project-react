import React from "react";

function About() {
  return (
    <section className="mx-auto flex w-2/3 justify-between py-16">
      <figure className="aspect-video w-1/2 overflow-hidden rounded [transition:all_400ms_ease] hover:[box-shadow:0_0_1vw]">
        <img
          src="https://images.pexels.com/photos/405202/pexels-photo-405202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image"
          className="h-full w-full object-cover [transition:all_500ms_ease] hover:scale-125 hover:contrast-150"
        />
      </figure>

      <article className="flex w-2/5 flex-col gap-4 text-center">
        <h1 className="text-4xl font-bold">
          React development is carried out by passionate developers
        </h1>

        <p className="mt-4 text-sm text-gray-700">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis
          voluptatem accusantium nemo perspiciatis delectus atque autem!
          Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur!
          Officiis id consequatur atque doloremque!
        </p>

        <p className="text-sm text-gray-700">
          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
          expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur
          quam mollitia.
        </p>
      </article>
    </section>
  );
}

export default About;
