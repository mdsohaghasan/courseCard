import Image from "next/image";
import photo1 from "./img/course-1.png";
import photo2 from "./img/course-2.png";
import photo3 from "./img/course-3.png";

export default function Home() {
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-5">

        <div className="rounded-xl shadow-lg hover:scale-105 hover:duration-500 ease-in-out">
          <Image
            className="rounded-t-xl"
            src={photo1}
            alt="course thumbnail"
            width={570}
            height={514}
          ></Image>
          <div className="p-3 my-2">
            <h1 className="text-lg ">This is a one line title</h1>
            <p>
              Two line paragraph Lorem ipsum dolor sit amet, consectetur
            </p>
            <div className="flex justify-between mt-2">
              <span>
                <del>$1050</del>
              </span>
              <span className="text-primary">$750</span>
              <span className="bg-secondary rounded-2xl px-2	">
                You Save $250
              </span>
            </div>
          </div>
          <hr className="border-[#C9C9C9]"></hr>

          <div className="flex p-3 ">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#878787]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="pl-2 text-[#878787]">10 hrs</p>
            </div>
            <div className="flex px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-[#878787]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
              <p className="pl-2 text-[#878787]">308</p>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#878787]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
              <p className="pl-2 text-[#878787]">17</p>
            </div>
          </div>
        </div>

        
        <div className="rounded-xl shadow-lg hover:scale-105 hover:duration-500 ease-in-out">
          <Image
            className="rounded-t-xl"
            src={photo1}
            alt="course thumbnail"
            width={570}
            height={514}
          ></Image>
          <div className="p-3 my-2">
            <h1 className="text-lg ">This is a one line title</h1>
            <p>
              Two line paragraph Lorem ipsum dolor sit amet, consectetur
            </p>
            <div className="flex justify-between mt-2">
              <span>
                <del>$1050</del>
              </span>
              <span className="text-primary">$750</span>
              <span className="bg-secondary rounded-2xl px-2	">
                You Save $250
              </span>
            </div>
          </div>
          <hr className="border-[#C9C9C9]"></hr>

          <div className="flex p-3 ">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#878787]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="pl-2 text-[#878787]">10 hrs</p>
            </div>
            <div className="flex px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-[#878787]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
              <p className="pl-2 text-[#878787]">308</p>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#878787]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
              <p className="pl-2 text-[#878787]">17</p>
            </div>
          </div>
        </div>

        
        <div className="rounded-xl shadow-lg hover:scale-105 hover:duration-500 ease-in-out">
          <Image
            className="rounded-t-xl"
            src={photo1}
            alt="course thumbnail"
            width={570}
            height={514}
          ></Image>
          <div className="p-3 my-2">
            <h1 className="text-lg ">This is a one line title</h1>
            <p>
              Two line paragraph Lorem ipsum dolor sit amet, consectetur
            </p>
            <div className="flex justify-between mt-2">
              <span>
                <del>$1050</del>
              </span>
              <span className="text-primary">$750</span>
              <span className="bg-secondary rounded-2xl px-2	">
                You Save $250
              </span>
            </div>
          </div>
          <hr className="border-[#C9C9C9]"></hr>

          <div className="flex p-3 ">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#878787]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="pl-2 text-[#878787]">10 hrs</p>
            </div>
            <div className="flex px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-[#878787]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
              <p className="pl-2 text-[#878787]">308</p>
            </div>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#878787]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                />
              </svg>
              <p className="pl-2 text-[#878787]">17</p>
            </div>
          </div>
        </div>

        
        

        
      

        

        
      </div>
    </section>
  );
}
