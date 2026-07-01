# LibGuides Branding

See [Customizing the look & feel of your LibGuides system](https://ask.springshare.com/springboards/faq/1948).

To change:

- Login to LibApps at https://cca.libapps.com/libapps/login.php?site_id=2210
- Go to LibGuides > Admin > [Look & Feel](https://cca.libapps.com/libguides/settings/lookfeel)
- Edit the appropriate tab & section, e.g. "Page Footer", then Save
- If CSS or JS changes, use `npm run libguides-build` to build & minify the code
- You can either copy-paste it within `<script>` or `<style>` tags in the **Custom CSS/JS** sections or upload it under **Customization Files** on the **Custom JS/CSS** tab (_do not do both_)

A-Z has its own new ("beta") "Look & Feel" UI which also needs to be updated.

The new UI can use [page-footer.html](./page-footer.html) because it has an updated Bootstrap for us to build with. The old UI uses a minimal [simple-footer.html](./simple-footer.html).
