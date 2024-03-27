import { News } from "@/types/newsTypes";
import React from "react";
import image1 from "../../public/assets/images/dc33760174d3f67737f6e318d0f118ff.jpeg";
import image2 from "../../public/assets/images/b6e3aeda879dc6f22f94711c788789b5.jpeg";
import image4 from "../../public/assets/images/f71497e0e3af85c77fa47046bb1f23cb.jpeg";
import image3 from "../../public/assets/images/b2fcf21c696811f745109da24a740d73.jpeg";
import Image from "next/image";
import SeeMoreBtn from "./UI/SeeMoreBtn";

const NewsCard = () => {
  const newsCard = [
    {
      id: 1,
      image: image1,
      title: "Sacramento River Cats",
      events: 48,
      sport_name: "Baseball",
    },
    {
      id: 2,
      image: image1,
      title: "Sacramento River Cats",
      events: 48,
      sport_name: "Baseball",
    },
    {
      id: 3,
      image: image1,
      title: "Sacramento River Cats",
      events: 48,
      sport_name: "Baseball",
    },
    {
      id: 4,
      image: image1,
      title: "Sacramento River Cats",
      events: 48,
      sport_name: "Baseball",
    },
  ];
  return (
    <div className="">
      <section className="border-b-[#738FFF] border-b-2 w-fit">
        <h3 className="text-2xl font-bold">Sports</h3>
      </section>
      <div className=" flex flex-wrap gap-3 my-5 md:justify-between justify-center">
        {newsCard.map((data: News) => (
          <div
            key={data.id}
            className="min-h-[32rem] w-fit
         p-2 shadow-md leading-5 bg-white"
          >
            <Image
              src={data.image}
              alt="any"
              width={400}
              height={400}
              className="h-[25rem]  w-72 object-cover "
            />
            <h3 className="text-lg font-semibold my-4">{data.title}</h3>
            <div className="p-1 bg-[#F7F7F8] w-full flex justify-between px-4 rounded">
              <section>
                <p className="text-[#525965] text-xs font-[400]">
                  Total Events
                </p>
                <p>{data.events} Events</p>
              </section>
              <section>
                <p className="text-[#525965] text-xs font-[400]">
                  Total Events
                </p>
                <p>{data.sport_name}</p>
              </section>
            </div>
          </div>
        ))}
        <div
          className="min-h-[32rem] w-[16rem]
         p-2 shadow-md leading-5 bg-white"
        >
          <div className="border border-[#006555] h-full">
            <section className="relative">
              <section className="absolute bg-black text-white py-1 px-3 text-xs right-0 font-semibold">
                <p>Add</p>
              </section>
              <Image
                src={image4}
                alt="any"
                width={400}
                height={400}
                className=" object-cover "
              />
            </section>

            <section className="px-4">
              <h3 className="text-xl font-semibold my-4">
                Advertisement Title
              </h3>
              <p className="text-sm ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Distinctio repudiandae cupiditate a ad laboriosam dicta
                molestias doloremque dolorem dignissimos, quaerat impedit vero
                officiis rerum, nam adipisci quam, nemo incidunt mollitia?
              </p>
            </section>
          </div>
        </div>
      </div>
      <SeeMoreBtn />
    </div>
  );
};

export default NewsCard;
