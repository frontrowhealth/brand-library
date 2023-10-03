// this is a sample react component for a widget showing how many
// providers have added a product to their Frontrow Health page

import "./widget.css";

export default function Widget() {
  return (
    <div className="frontrow-container">
      <p>
        <span className="fr-num-value">240</span>{' '}
        <span className="fr-bold">medical providers </span>
        <span className="fr-text" />
        <a href="https://thefrontrowhealth.com/overview/" className="fr-link" target="_blank">
          Learn more from our partner
        </a>
      </p>
    </div>
  );
};
