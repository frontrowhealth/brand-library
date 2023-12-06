Follow steps in readme for shopify
- Add provider count metafield
- Add provider count to product
- Create css file
- Add styles to site header
```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
{{ 'frontrow.css' | asset_url | stylesheet_tag }}
```
- Add qualitative and quantitative widget in visual editor
- Test


### Updates on Dec 6
- Widgets are added in visual editor
- To remove widget from a specific product, edit the provider count metafield
  - If it doesn't exist, the widgets should not be shown
- To add to a new product, add provider count and potentially add to page through visual editor if it's not using the same product template that already has the widgets setup
