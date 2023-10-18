export default function QualitativeDataWidget() {
  return (
    <div className="flex px-2.5 py-10 md:px-14 md:py-[80px] flex-col items-center gap-6 bg-[#EAEEE4]" id="frontrow-qual-data">
      <div className="flex flex-col items-center gap-4 mb-2">
        <h1 className="text-center font-serif text-3xl md:text-4xl font-bold color-[#355756]">
          What doctors told their patients about our product*
        </h1>
        <p className="hidden md:block color-[#355756]">
          <span className="font-bold">*255</span> medical providers recently shared our product with patients. This data was collected by a 3rd party. Providers are never paid (in any way) to share our product. These providers remain anonymous because they are not publicly marketing our product. These were notes they wrote to their own patients, and do not constitute medical advice.
        </p>
      </div>

      <div className="flex flex-col p-4 pb-6 md:p-8 md:pb-12 items-start gap-8 rounded-2xl border bg-white">
        <div className="flex flex-col items-start md:items-center md:flex-row justify-between w-full gap-4">
          <div className="flex flex-row gap-4">
            <div className="flex py-3 px-4 items-center gap-2 rounded-lg bg-[#ECF6F0] text-center text-xs md:text-sm"><i className="fa fa-check-circle"></i> Verified doctor</div>
            <div className="flex py-3 px-4 items-center gap-2 rounded-lg bg-[#ECF6F0] text-center text-xs md:text-sm">Not paid to share product</div>
          </div>

          <div className="opacity-80 text-right text-sm hidden md:block">Tallahassee, FL | September 2023</div>
        </div>

        <div className="text-base md:text-lg font-medium color-[#0F1834]">
          This program ensures that you're in the best possible health before conception, which can reduce pregnancy complications
        </div>

        <div className="font-sm mt-[-8px] color-[#424242]">
          What many of my patients over the years have misunderstood about pregnancy is that a healthy pregnancy isn't just about reproductive health; it's about your overall health. Doveras is comprehensive, that’s why I like this for you all. It helps you make positive changes in your diet and lifestyle, manage stress, how to collaborate with your partner, etc., setting the stage for a successful pregnancy journey. This program ensures that you're in the best possible health before conception, which can reduce pregnancy complications, and lead to a healthier baby.
        </div>

        <div className="block md:hidden text-left font-sm mt-[-8px]">Tallahassee, FL | September 2023</div>
      </div>

      <div className="flex flex-col p-4 pb-6 md:p-8 md:pb-12 items-start gap-8 rounded-2xl border bg-white">
        <div className="flex flex-col items-start md:items-center md:flex-row justify-between w-full gap-4">
          <div className="flex flex-row gap-4">
            <div className="flex py-3 px-4 items-center gap-2 rounded-lg bg-[#ECF6F0] text-center text-xs md:text-sm"><i className="fa fa-check-circle"></i> Verified doctor</div>
            <div className="flex py-3 px-4 items-center gap-2 rounded-lg bg-[#ECF6F0] text-center text-xs md:text-sm">Not paid to share product</div>
          </div>

          <div className="opacity-80 text-right text-sm hidden md:block">Austin, TX | September 2023</div>
        </div>

        <div className="text-base md:text-lg font-medium color-[#0F1834]">
          I like this program for you all because it’s personalized...
        </div>

        <div className="font-sm mt-[-8px] color-[#424242]">
          I like this program for you all because it’s personalized, and each of your journeys will be different if you choose to have a family. For instance, if you have underlying medical conditions or are of advanced maternal age, Doveras will provide targeted advice to address potential challenges and risks. This tailored approach ensures that you're taking the most relevant steps to optimize your fertility and health, ultimately increasing the chances of a successful pregnancy.
        </div>

        <div className="block md:hidden text-left font-sm mt-[-8px]">Austin, TX | September 2023</div>
      </div>

      <div className="block md:hidden text-left text-xs color-[#355756]">
        <p className="mb-2">
          <span className="font-bold">*255</span> medical providers recently shared our product with patients.
        </p>
        <p>
          This data was collected by a 3rd party. Providers are never paid (in any way) to share our product. These providers remain anonymous because they are not publicly marketing our product. These were notes they wrote to their own patients, and do not constitute medical advice.
        </p>
      </div>

      <div className="text-center mt-2 text-sm md:text-base">
        <p>Learn more about <a className="inline-block font-bold underline" href="https://thefrontrowhealth.com/overview/" target="_blank">Frontrow Health</a> and the full list of doctors they work with</p>
      </div>
    </div>
  );
};
