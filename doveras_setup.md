## Setup directions

*__I provided the tailwind version of the snippet the last time we setup the widgets with you. I haven't provided that this time but if you have trouble converting, let me know and we can help out.__*

Reach out to gillian@thefrontrowhealth.com with any questions

### Link to our font

Each file includes a link to our font. This only needs to be on the site once. I'd recommend putting it in the `<head>` section, it can then be removed from the top of each widget file.
```
<link rel="stylesheet" href="https://use.typekit.net/ncy3pbi.css">
```

### Quantitative data

Update the code for the quantitative widget that appears in the header of both product pages with the code in `./quant-widget.html`

The widget will appear below the "Take the first step" button.
  - If you want the widget to appear where it was before, in the bottom right corner, uncomment lines 24-28 of `./quant-widget.html` and delete line 21.
  - This _does not_ account for smaller screensizes so make sure to add breakpoints as needed to put the widget inline with the other content in that section.
    - Breakpoints _are_ added for the content within the widget: font/logo size, etc.
### Modal

We now have a modal! When the logo in the quantiative data widget is clicked, a modal will open with additional information about Frontrow.

All of the code is provided in `./modal.html`. This code just needs to be somewhere on the site when the page is loaded. I'd recommend including it in the same component as the quantitative widget.

### Qualitative data/provider testimonials

Update the code for the provider testimonials by copy and pasting the code from `./qual-widget-preprgnancy.html` and `./qual-widget-ivf.html` for each product.

The provider testimonials are the same for both products but the link on line 380 is different so that we can track which product users are visiting our site from.

Either file can be reused for both products if you input a variable for the `utm_medium` id number.
- IVF `utm_medium` = 400
- Prepregnancy `utm_medium` = 399
