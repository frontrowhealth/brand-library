import "./widget.css";

export default function QualitativeDataWidget() {
  return (
    <div className="frontrow-qual-data" id="frontrow-qual-data">
      <div className="fr-header">
          <h1 className="fr-title">
            What doctors told their patients about our product*
          </h1>
          <p>
            <span className="fr-pr-bold">*255</span> medical providers recently shared our product with patients. This data was collected by a 3rd party. Providers are never paid (in any way) to share our product. These providers remain anonymous because they are not publicly marketing our product. These were notes they wrote to their own patients, and do not constitute medical advice.
          </p>
      </div>

      <div className="fr-review-container">
        <div className="fr-tag-row">
          <div className="fr-tags">
            <div className="fr-tag"><i className="fa fa-check-circle"></i> Verified doctor</div>
            <div className="fr-tag">Not paid to share product</div>
          </div>

          <div className="doctor-details">Tallahassee, FL | September 2023</div>
        </div>

        <div className="fr-review-title">
          This program ensures that you're in the best possible health before conception, which can reduce pregnancy complications
        </div>

        <div className="fr-review-text">
          What many of my patients over the years have misunderstood about pregnancy is that a healthy pregnancy isn't just about reproductive health; it's about your overall health. Doveras is comprehensive, that’s why I like this for you all. It helps you make positive changes in your diet and lifestyle, manage stress, how to collaborate with your partner, etc., setting the stage for a successful pregnancy journey. This program ensures that you're in the best possible health before conception, which can reduce pregnancy complications, and lead to a healthier baby.
        </div>

        <div className="doctor-details-mobile">Tallahassee, FL | September 2023</div>
      </div>

      <div className="fr-review-container">
        <div className="fr-tag-row">
          <div className="fr-tags">
            <div className="fr-tag"><i className="fa fa-check-circle"></i> Verified doctor</div>
            <div className="fr-tag">Not paid to share product</div>
          </div>

          <div className="doctor-details">Austin, TX | September 2023</div>
        </div>

        <div className="fr-review-title">
          I like this program for you all because it’s personalized...
        </div>

        <div className="fr-review-text">
          I like this program for you all because it’s personalized, and each of your journeys will be different if you choose to have a family. For instance, if you have underlying medical conditions or are of advanced maternal age, Doveras will provide targeted advice to address potential challenges and risks. This tailored approach ensures that you're taking the most relevant steps to optimize your fertility and health, ultimately increasing the chances of a successful pregnancy.
        </div>

        <div className="doctor-details-mobile">Austin, TX | September 2023</div>
      </div>

      <div className="quant-data-mobile">
          <p>
            <span className="fr-pr-bold">*255</span> medical providers recently shared our product with patients.
          </p>
          <p>
            This data was collected by a 3rd party. Providers are never paid (in any way) to share our product. These providers remain anonymous because they are not publicly marketing our product. These were notes they wrote to their own patients, and do not constitute medical advice.
          </p>
      </div>
      <div className="fr-learn-more">
        <p>Learn more about <a className="fr-learn-more" href="https://thefrontrowhealth.com/overview/" target="_blank">Frontrow Health</a> and the full list of doctors they work with</p>
      </div>
    </div>
  );
};
