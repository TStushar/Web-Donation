import peacock from "../assets/peacock.png";
import krishna_banner_img from "../assets/krishna_banner_Mask-1.png";

export default function Quotes() {
  return (
    // img container
    <div
      className="flex flex-col xl:flex-row sm:pr-20 px-8 py-4 bg-cover bg-center"
      style={{
        backgroundImage: `url(${krishna_banner_img}) `,
      }}
    >
      {/* left container */}
      <div className="flex flex-col gap-4 py-20 sm:py-40 px-6 sm:px-12">
        <h1 className="text-2xl sm:text-5xl font-bold">
          Quotes To Know More About Lord Krishna
        </h1>

        {/* quotes and logo */}
        <div className="py-8 px-4 flex flex-col gap-4 w-full">
          {/* 1 */}
          <div className="flex flex-row sm:flex-row gap-2 items-end justify-center relative">
            {/* peacock feather logo */}
            <img
              src={peacock}
              alt="peacock feather"
              className="min-w-[35px] min-h-[88px]"
            />

            {/* content */}
            <div className="flex flex-col gap-4 py-4">
              <h3 className="text-lg sm:text-xl font-semibold">
                Bhagavad Gita 2.40
              </h3>
              <p>
                In this endeavour of offering service to Lord Krishna, you get
                eternal credit, and a little service offer to Lord Krishna can
                protect one from the most dangerous type of fear.
              </p>
            </div>
            <div className="absolute bottom-0 left-2 right-0 border-b-2 border-black " />
          </div>

          {/* 2 */}
          <div className="flex flex-row sm:flex-row gap-2 items-end justify-center relative">
            {/* peacock feather logo */}
            <img
              src={peacock}
              alt="peacock feather"
              className="min-w-[35px] min-h-[88px]"
            />

            {/* content */}
            <div className="flex flex-col gap-4 py-4">
              <h3 className="text-lg sm:text-xl font-semibold">
                Srimad Bhagavatam 2.7.17, Srila Prabhupada
              </h3>
              <p>
                By giving everything to the cause of the Lord, one does not lose
                anything, but he gains everything that he could never otherwise
                expect.
              </p>
            </div>
            <div className="absolute bottom-0 left-2 right-0 border-b-2 border-black " />
          </div>

          {/* 3 */}
          <div className="flex flex-row sm:flex-row gap-2 items-end justify-center relative">
            {/* peacock feather logo */}
            <img
              src={peacock}
              alt="peacock feather"
              className="min-w-[35px] min-h-[88px]"
            />

            {/* content */}
            <div className="flex flex-col gap-4 py-4">
              <h3 className="text-lg sm:text-xl font-semibold">
                Srimad Bhagavatam 10.11.11
              </h3>
              <p>
                For anything offered to Krishna with love and affection, Krishna
                can reciprocate many millions of times over, both materially and
                spiritually.
              </p>
            </div>
            <div className="absolute bottom-0 left-2 right-0 border-b-2 border-black " />
          </div>
        </div>
      </div>

      {/* right container */}
      <div className="hidden xl:block xl:w-[50vw] xl:h-[100vh]"></div>
    </div>
  );
}
