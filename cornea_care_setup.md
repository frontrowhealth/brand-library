## Setup qualitative and quantitative data for Corena Care products

### HTML

Use the code in `/html`.

Add the quant-widget code under the Reviews star rating on the PDP.

Be sure to change the provider count on line 3 to match the current provider count [here](https://app.thefrontrowhealth.com/provider/IALAM2/all?sort=featured&healthBrands=117).

If you are adding the quantitative data to a product that doesn't have provider testimonials, use: `/html/quant-widget.html`. For products with provider testimonials, use: `/html/quant-widget-with-testimonials.html`. The products below have provider testimonials:
- Omega 3
- Eye Vitamins & Minerals

These products have quantitative data but no provider testimonials:
- Eyelid Hygiene All Rounder
- Hyaluronic Acid

For the products that have provider testimonials, add the code snippet to the PDP under the consumer reviews section like in this [mock up](https://www.figma.com/proto/bHwIdt5zNdWEXN5sRfnxqT/Providers-Shared-PDP-%5BProduct%5D?node-id=2915-2989&scaling=min-zoom&page-id=2915%3A2975&starting-point-node-id=2915%3A2976).
- Omega 3: `html/qual-widget-omega.html`
- Eye Vitamins & Minerals: `html/qual-widget-eye-vitamin.html`

Add the styling for both widgets to the `<head>` section of your site.
- `html/qual-widget-css.html`
- `html/quant-widget-css.html`

Also add this line to the `<head>` section of your site:
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```
This will make the icon(s) accessible that are in the provider testimonials section.


### Shopify

If you are using shopify, please refer to the directions in `README.md` under "Shopify" and use the code in `shopify/no-modal/`. The code in the shopify directory **has not** been updated with Cornea's styling, doctor quotes, or provider counts. Copy the css and html code from `html/` into the respective files or reach out to gillian@thefrontrowhealth.com for help.

The directions in the readme will walk you through how to add a variable for the provider count, setup the quantitative data, setup the qualitative data, and setup any styles.

Since Cornea Care has both products with and without both qualitative and quantitative data, use `shopify/no-modal/quant-data-with-optional-qual.liquid`. This will require adding a second metafield definition and a value to the products that DONNOT have provider testimonials with the value `true`.

Repeat the steps for creating the `frontrow-provider-count` metafield, name the field: `frontrow-no-reviews` and add the value `true` to any products that have a provider count but no testimonials.
