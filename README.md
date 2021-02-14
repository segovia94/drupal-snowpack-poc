# Drupal and Snowpack proof of concept

This is a theme to demonstrate using [Snowpack](https://www.snowpack.dev/) inside of Drupal.

It is assumed that this theme will be inside a Drupal project running on its own local server like `my-site.local`.

To enable the Snowpack development server, first add the following into your `settings.php` (preferably `settings.local.php`) file.
```
$settings['hot_module_replacement'] = TRUE;
```

Next, install the required Node modules from the theme directory with:
```
npm install
```

Finally, start up the Snowpack development server:
```
npm start
```

Currently the Hot Module Replacement only does page reloads due to
[https://www.snowpack.dev/guides/hmr#enable-hmr%3A-custom-server](https://www.snowpack.dev/guides/hmr#enable-hmr%3A-custom-server)
