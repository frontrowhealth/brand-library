In wordpress, go to pages > home page

In the editor, there should be a visual and text tab. Select the text tab. Find the spot in the code where you want to add the widget.

If this isn't possible, use the script to add it on load time. This as well as other styles, need to be added to the head section of the site. The qualitative data widget should be able to be added through the editor since it's not in the slider component.

This can be achived by:
If they have a plugin (ie: WPCode, Head Footer Injections), then you'd look for that plugin on the left-hand side of the WP dashboard and paste it in the <head> option.

If they don't have a plugin and / or don't want to install one, you will have to add it manually. For that, click on Appearance > Theme File Editor > header.php

Locate the closing head tag </head> and just paste the script above it.

The negative of the direct code editing solution is that a theme change or update will likely overwrite any changes.

To avoid this, css can be added in the additional css section when customizing the site. However this doesn't resolve the need for the icons link in the header and the optional script to add the widget to the page if that route is required.

Maybe we can save that image icon so the link isn't required (assuming no other script is required).
