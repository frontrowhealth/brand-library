# brand-library

### *Frontrow branded widgets only exist for shopify & html as of Dec 7, 2023*

This project provides sample code for the Frontrow widgets that can be included on brand partners' websites.

Widgets:
1. Quantitative -- shows the number of providers that shared a product on their Frontrow page
2. Qualitative -- shows real reviews from providers that shared a product and details on how data is collected
3. Modal -- viewable by clicking the logo on the quantitative widget

Additional details provided in [this doc](https://docs.google.com/document/d/1hZhBG_1hGyUHoUMWNK-WXQBhqlTAjJpPaZHuGKhPCcU/edit?usp=sharing) including:
- How to create a temporary editor user
- Context on widgets

**Most CMSs (Shopify, Wordpress, Wix, etc.) can have a temporary editor user. Then our team can do the implementation! We would never publish to your live site, we can make the changes for you to review and you can publish them.**


## HTML

`./html` has a code snippet for all of the widgets. Consult the provided example or reach out to us for proper placement.

## Shopify

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

**If you have some products with both qualitative and quantitative data and some with only quantitative data, use the file suffixed with `-with-optional-qual`**

**If you are using a metafield, be sure to use the file suffixed with `with-metafield`**

1. Navigate to the "Online Store" section in the left hand navigation.
2. On the themes page, select the three dots icon and go to "Edit Code".
3. In the left hand navigation, find the section called snippets and click "Add a new snippet"
4. Name the file `frontrow-quant-widget.liquid`, enter just `frontrow-quant-widget` in the file name input box.
5. Copy and paste the code from the quantiative file specified in the bold details above into your new file in Shopify. Save.
6. Go back to the file directory on the left hand side of the page and search for `product.liquid`. You are looking for the main product page for your Shopify site. This file could be named `main–product.liquid`, `product.liquid`, or `product-template.liquid`.
7. Scroll down until you find the section above where you want the frontrow widget to be. For example, in the screen recording I found the 'title' section. Just below the section (likely ending in `</div>`)
8. Add this code snippet: `{% render 'frontrow-widget' %}`. This will include the widget in all product details pages where there is a value for the metafield we added at the beginning. Save the file.
    - If your product page is broken down into smaller components, you may need to add the snippet in another file. Find the correct file and, add this line: `{% render 'frontrow-widget' %}`.

#### Create stylesheet and javascript files
1. All necessary assets including scripts and stylesheets are included in each widget's code. No additional files are needed.

#### Add modal to site globally

1. In the file, `theme.liquid`, find the `<body>` section.
1. Inside that section, add the content of `/shopify/modal.html`.
1. Save all files and navigate out of the code editor back to the main page for your Shopify site.


#### Add qualitative code snippet to product details page
1. Go to "Customize" the site. And navigate to the desired product page.
1. Click in the visual editor where you want to add the qualitative data widget, likely just above the site footer. Select "Custom liquid".

**Frontrow will provide a version of this files that have the quotes and provider counts setup for each product**

1. Copy the code from `/shopify/qualitative-data-with-metafield.liquid` into the shopify editor "Custom liquid" section.
  - If you're aren't using a metafield, the file is called `/shopify/qualitative-data.liquid`


#### Preview widget on the store
1. You should see the quantitative data widget displayed under the product title (or wherever you chose to add the widget).
1. You can also verify that the widget doesn't show up on product pages that don't have a provider count.
1. Toggle between mobile and desktop views in the top right hand corner.
1. The link to "learn more" in the quantitative widget should link down to the provider testimonials section.
1. The Frontrow logo in the quantitative widget opens the modal. The link in the modal opens a new tab to Frontrow's general page.
1. The link at the bottom of the qualitative widget also links to Frontrow's general page in a new tab.
    - *If you created a copy of your theme, you can now publish it from the shopify dashboard.*

