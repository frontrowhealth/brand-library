## Miracare setup

#### Create stylesheet
1. Navigate to the "Online Store" section in the left hand navigation.
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

#### Add quantitate code snippet to product details page
1. Back on the theme dashboard, go to "Customize" the site. And navigate to the desired product page.
1. Click in the visual editor where you want to add the widget, likely below the product title.
1. Copy the code from `./shopify/quantitative-widget.liquid` and paste it into the input box for "custom liquid".
1. Save and preview site.


#### Add provider testimonials code snippet to product details page
1. Click in the visual editor where you want to add the qualitative data widget, likely just above the site footer. Select "Custom liquid".
1. Copy the code from `./shopify/qualitative-data.liquid` and paste it into the input box for "custom liquid".
1. Save and preview site. Test that the link in the quantitative data snippet goes to the reviews section.
