hurrycane product id = 437
pedal exerciser id = 438

brand id = 255

### Add metafield for products with reviews
frontrow-product-id

This will make sure that the link in the quant data goes to the right spot

### Add value for metafield
hurrycane product id = 437

### Update provider counts for both products
hurrycane = 506
pedal exerciser = 504

### Update quant widget
Replace code in frontrow-widget with the code in quant-data-with-optional-qual.liquid

### Add qual widget
Add above footer
In visual editor, add custom liquid

If there's no custom liquid option, add section in code with qual widget.

If all products based on one template, make sure to add line `{%- if product.metafields.custom.frontrow_product_id -%}`
