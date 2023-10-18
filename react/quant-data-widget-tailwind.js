// this uses the tailwind library for css classes
// make sure to install and import tailwind into the project

export default function WidgetWithTailwind() {
  return (
    <div class="my-10 max-w-[450px] rounded-md border-2 border-forrest-500 bg-[#d7d8c4] p-4 text-sm leading-6 text-forrest-700 md:absolute md:bottom-0 md:right-4">
      <em class="rounded-md bg-white px-1.5 py-1">255</em>
      <span class="font-bold">medical providers</span> recently shared this with patients, and were not paid to do so!
      <a href="#frontrow-qual-data" class="underline">
        Hear why they shared this product with patients
      </a>
    </div>
  );
};
