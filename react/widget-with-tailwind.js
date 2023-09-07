// this uses the tailwind library for css classes
// make sure to install and import tailwind into the project

export default function WidgetWithTailwind() {
  return (
    <div className="w-full p-4 bg-[#F8FBF9] rounded-lg gap-2 text-neutral-800 mt-4 mb-4">
      <p>
        <span className="w-10 h-[22px] px-1.5 py-1 bg-white rounded shadow border border-[#DAE8DF] justify-center items-center gap-2.5 inline-flex text-center font-bold">240</span>{' '}
        <span className="font-bold">medical providers</span>
        <span className="leading-normal hidden md:inline"> recently shared this with patients, and were not paid to do so! </span>
        <span className="leading-normal md:hidden"> shared this with patients, and were not paid to do so! </span>
        <a href="https://thefrontrowhealth.com/overview/" className="underline leading-normal block md:flex">Learn more from our partner</a>
      </p>
    </div>);
};
