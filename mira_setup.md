## Miracare setup

#### Add metafield definition
1. Login to the Shopify admin portal.
1. Select "Settings" from the navigation on the left side of the page.
1. In the new pop up window, scroll down on the left side navigation and select "Custom Data".
1. Select "Products".
1. In the top right hand corner, click, "Add definition".
1. Create a new metafield definition, called `frontrow-provider-count` and add the type integer. A description, minimum value, and maximum value are not required.
1. Click "Save".
1. Exit out of the settings modal.


#### Add provider count metafield values for targeted products
1. Navigate to the "Products" section in the left hand navigation.
1. Select the product you want to add a provider count for.
1. Scroll to the bottom of the page. Add the value in the new metafield input. Save the product.
1. Repeat this process for any other products you have the provider count for.


#### Create stylesheet
1. From the dashboard, navigate to the "Online Store" section in the left hand navigation.
1. On the themes page, select the three dots icon and go to "Edit Code".
1. In the left navigation, look for the "Assets" folder and select "Add a new asset". Click the second tab to create a new file with the extension `css`.
1. Call the file `frontrow.css`.
1. Copy the contents of `/shopify/frontrow.css` into the new file. Save.
1. Search in the file explorer for `theme.liquid`. We are looking for the `<head>` section of your site.
1. In the `<head>` section, add the following lines of code:
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
{{ 'frontrow.css' | asset_url | stylesheet_tag }}
```


#### Add code snippet to product details page
1. In the left hand navigation, find the section called snippets and click "Add a new snippet"
1. Name the file `frontrow-widget.liquid`, enter just `frontrow-widget` in the file name input box.
1. Copy and paste the code from `./shopify/quantitative-widget.liquid` from this project into your new file in Shopify. Save.
1. Go back to the file directory on the left hand side of the page and search for `product.liquid`. You are looking for the main product page for your Shopify site. This file could be named `main–product.liquid`, `product.liquid`, or `product-template.liquid`.
1. Scroll down until you find the section above where you want the frontrow widget to be. For example, below the title.
1. Add this code snippet: `{% include 'frontrow-widget' %}`. This will include the widget in all product details pages where there is a value for the metafield we added at the beginning. Save the file.
1. Navigate out of the code editor back to the main page for your Shopify site.


#### Add provider testimonials code snippet to product details page
1. Back on the theme dashboard, go to "Customize" the site. And navigate to the desired product page.
1. Click in the visual editor where you want to add the qualitative data widget, likely just above the site footer. Select "Custom liquid".
1. Copy the code from `./shopify/qualitative-data.liquid` and paste it into the input box for "custom liquid".
1. Save and preview site. Test that the link in the quantitative data snippet goes to the reviews section.
