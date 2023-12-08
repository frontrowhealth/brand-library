# brand-library

### *Frontrow branded widgets only exist for shopify as of Dec 7, 2023*

This project provides sample code for the Frontrow widgets that can be included on brand partners' websites.

Widgets:
1. Quantitative -- shows the number of providers that shared a product on their Frontrow page
2. Qualitative -- shows real reviews from providers that shared a product and details on how data is collected

If you only want to use the quantitative data, refer to the code and documentation in [this link](https://github.com/frontrowhealth/brand-library/tree/widget-v1) instead.

Additional details provided in [this doc](https://docs.google.com/document/d/1hZhBG_1hGyUHoUMWNK-WXQBhqlTAjJpPaZHuGKhPCcU/edit?usp=sharing) including:
- How to create a temporary editor user
- Context on widgets

**Most CMSs (Shopify, Wordpress, Wix, etc.) can have a temporary editor user. Then our team can do the implementation! We would never publish to your live site, we can make the changes for you to review and you can publish them.**

The sample-screenshots folder in this project shows the widgets in the context of the different platforms code is provided for.

The quantitative data widget has sample code for:
- HTML & CSS
- ReactJS with CSS or tailwind
- Shopify
- Framer
- Wordpress (with elementor plugin)

The qualitative data widget has sample code for:
- HTML & CSS
- Shopify

**Mobile & desktop versions**

All versions account for differences between the desktop and mobile experiences. There are slight styling and copy changes between the 2 versions so it's important to include all code for whichever version is being used.

*Feel free to make changes to the styling and/or copy for both mobile and desktop. The code provided tested well on user tests done by Frontrow's design team.


## HTML (Quant & Qual)

`./html` has a code snippet for the quantitative data. Put this code near the title or star rating for your product. Copy the css into the designated area for your site.

The qualitative data snippet is also provided in `./html`. Put this snippet at the bottom of your site. The link in the first widget will link to the reviews section. Be sure to copy the qualitative widget css into your site too.

#### Add access to font awesome icons
In the `<head>` section of your site, paste the following line of code:
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```

## Shopify (Quant & Qual)

**Create a copy of your theme if you want to edit without affecting the live site. When all changes are done, the copied theme can be published.**

In addition to the widget, there is code for the modal and code for handling the interaction between the widget and modal (script). All code is located in `./shopify`.

In order to add the custom widget to a shopify store, follow these steps:

#### Add metafield definition for provider count

*You can skip this step if you already have the quantitative widget setup.*

1. Login to the Shopify admin portal.
2. Select "Settings" from the navigation on the left side of the page.
3. In the new pop up window, scroll down on the left side navigation and select "Custom Data".
4. Select "Products".
5. In the top right hand corner, click, "Add definition".
6. Create a new metafield definition, called `frontrow-provider-count` and add the type integer. A description, minimum value, and maximum value are not required.
7. Click "Save".


#### Add metafield definition

*You can skip this step if all of your products have BOTH quantiative and qualitative data.*

1. Add another definition called, `frontrow-no-reviews` with type "Single line string"
1. Click "Save".
1. Exit out of the settings modal.


#### Add provider count metafield values for targeted products

*You can skip this step if you already have the quantitative widget setup.*

1. Navigate to the "Products" section in the left hand navigation.
2. Select the product you want to add a provider count for.
3. Scroll to the bottom of the page. Add the value in the new metafield input. Save the product.
4. Repeat this process for any other products you have the provider count for.

#### Add metafield value for products that have no provider testimonials

*You can skip this step if all of your products have BOTH quantiative and qualitative data.*

1. Navigate to the "Products" section in the left hand navigation.
2. Select a product that has ONLY quantitative data.
3. Scroll to the bottom of the page. Add the value `true` in the new metafield input. Save the product.
1. Repeat this process for any products that have ONLY quantitative data.

#### Add quantitative code snippet to product details page

**If you have some products with both qualitative and quantitative data and some with only quantitative data, use the file suffixed with `-with-optional-qual` in the respective `no-modal` folder or `with-modal` folder.**

**If you are using a metafield, be sure to use the file suffixed with `with-metafield` in the respective `no-modal` folder or `with-modal` folder.**

1. Navigate to the "Online Store" section in the left hand navigation.
2. On the themes page, select the three dots icon and go to "Edit Code".
3. In the left hand navigation, find the section called snippets and click "Add a new snippet"
4. Name the file `frontrow-quant-widget.liquid`, enter just `frontrow-quant-widget` in the file name input box.
5. Copy and paste the code from the quantiative file specified in the bold details above into your new file in Shopify. Save.
6. Go back to the file directory on the left hand side of the page and search for `product.liquid`. You are looking for the main product page for your Shopify site. This file could be named `main–product.liquid`, `product.liquid`, or `product-template.liquid`.
7. Scroll down until you find the section above where you want the frontrow widget to be. For example, in the screen recording I found the 'title' section. Just below the section (likely ending in `</div>`)
8. Add this code snippet: `{% include 'frontrow-widget' %}`. This will include the widget in all product details pages where there is a value for the metafield we added at the beginning. Save the file.
    - If your product page is broken down into smaller components, you may need to add the snippet in another file. Find the correct file and, add this line instead: `{% render 'frontrow-widget' %}`.

#### Create stylesheet and javascript files
1. In the left navigation, look for the "Assets" folder and select "Add a new asset". Click the second tab to create a new file with the extension `css`.
1. Call the file `frontrow.css`.
1. Copy the contents of `/shopify/with-modal/frontrow.css` in the new file. Save.
    - Use `shopify/no-modal/frontrow.css` if you aren't adding the modal.
1. Add another asset, new file with extension `js`. Call the file `frontrow.js`
    - Skip this step if you aren't adding the modal.
1. Copy the contents of `/shopify/frontrow.js` into the new file. Save.


#### Add styles and javascript files to header
1. Search in the file explorer for `theme.liquid`. We are looking for the `<head>` section of your site.
1. In the `<head>` section, add the following lines of code:
(the last line is only required if you added the modal)
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
{{ 'frontrow.css' | asset_url | stylesheet_tag }}
<script src="{{ 'frontrow.js' | asset_url }}" defer="defer"></script>
```

#### Add modal to site globally

*only required if you're using the modal*

1. In the same file, `theme.liquid`, find the `<body>` section.
1. Inside that section, add the content of `/shopify/with-modal/modal.html`.
1. Save all files and navigate out of the code editor back to the main page for your Shopify site.


#### Add qualitative code snippet to product details page
1. Go to "Customize" the site. And navigate to the desired product page.
1. Click in the visual editor where you want to add the qualitative data widget, likely just above the site footer. Select "Custom liquid".

**Frontrow can provide a version of these files that have the quotes, provider counts, and styles updated to your own styling and product specifications. Ignore these steps if you have a custom version provided.**
1. Copy the code from `./shopify/qualitative-data.liquid` into a new file on your desktop. Find the TODOs in the file and input the proper values.
    - *You can use the code in `./shopify/qualitative-data-with-metafield.liquid` if you have a metafield for the provider count.*
    - Provider count
    - Reviewer location & date (repeat for second review)
    - Review title & description (repeat for second review)
1. At this point you can also change the background color or other styles to match your own branding. Fonts will automatically match your global font.
1. If you have more than 2 reviews, copy the section with `class="fr-review-container"` and paste below the other `class="fr-review-container"`s. Make sure to input the right data again.

**Resume directions here if you have a custom version provided.**
1. Copy the code from the edited file or the provided version of the qualitative data snippet into the shopify editor "Custom liquid" section.


#### Preview widget on the store
1. You should see the quantitative data widget displayed under the product title (or wherever you chose to add the widget).
1. You can also verify that the widget doesn't show up on product pages that don't have a provider count.
1. Toggle between mobile and desktop views in the top right hand corner.
1. The link in the quantitative widget should link down to the provider testimonials section.
1. If you're using the modal, verify that the "Frontrow Health" link at the bottom of the reviews section opens the modal.
1. If you have some products with just quantitative data, verify that the link opens to correct content. Either the modal or a new tab to Frontrow's overview page.
    - *If you created a copy of your theme, you can now publish it from the shopify dashboard.*


## Wix

Please reach out to get more guidance how to implement this widget on a wix site. We haven't yet found a good way to share code snippets for wix.

Temporary edit access can be provided to a Frontrow engineer to make the changes themselves if that is preferred by the client.

## React (Quant only)

1. Copy the component from `./react/widget.js` or `./react/widget-with-tailwind.js` depending on if you use tailwind or not.
1. If you're not using tailwind, copy the styles from `./react/widget.css` into the desired stylesheet.


## Framer (Quant only)

1. Add the provided copy to your site where you want the widget to be.
2. In the side panel:
    - Make the number and "medical providers" copy bold
    - Make the number a different color, a non-black brand color is perfect
3. Create an override for the text section by selecting Code Override in the side panel
4. Create a new file called frontrow and paste the contents of `framer/frontrow.tsx` into the new file, making sure to delete the default code that was created upon creating the file
5. Back in the editor, select the new file and the function `someCssOverride`
    - This override file will add the tile behind the text. Feel free to change the `background` property in that file to match your brand colors
6. Save a preview by publishing a preview or pressing the "play" button in the top right hand corner
7. Repeat these steps and reuse the override file & function if you have the widget on any other pages

## Wordpress (with elementor; Quant only)

1. In the elementor editor, click to add a new section where you want the snippet to be.
2. Search for html in the elements panel
3. Select the html type
4. Copy the code from `./wordpress/widget.html` in the code section
5. In the next tab, Advanced, scroll to the bottom and select "Custom CSS"
6. Copy the code from `./wordpress/widget.css` in the code section
7. You should see the widget as intended. Feel free to change colors to match your own branding at this point.
    - You can also drag and drop the widget to another spot on the page if you need.


## Screenshots

### React & css
#### Mobile

<img src="./sample-screenshots/css-mobile.png" height="200px"/>

#### Desktop
<img src="./sample-screenshots/css-desktop.png" height="200px"/>

### React & tailwind
#### Mobile
<img src="./sample-screenshots/tailwind-mobile.png" height="200px"/>

#### Desktop
<img src="./sample-screenshots/tailwind-desktop.png" height="200px"/>

### HTML & css
#### Mobile

<img src="./sample-screenshots/html-mobile.png" height="200px"/>

#### Desktop
<img src="./sample-screenshots/html-desktop.png" height="100px"/>

### Shopify
#### Mobile

<img src="./sample-screenshots/shopify-mobile.png" height="300px"/>

#### Desktop
<img src="./sample-screenshots/shopify-desktop.png" height="200px"/>
