let mix = require('laravel-mix');
require('laravel-mix-purgecss');

/*
 Set the public path where packed files are located
 */
mix.setPublicPath('public');

/*
 Build CSS and purge unused CSS
 */
mix.sass('src/sass/styles.scss', 'public/css')
  .purgeCss({
    globs: [
      path.join(__dirname, 'src/**/*.*')
    ],
    extensions: ['html', 'js'],
    whitelistPatterns: [],
  });
  
/*
 Build and bundle javascript files.
 Finally copy index.html file
 */
mix.js('src/js/main.js', 'public/js')
  .copy('src/index.html', 'public/index.html')
  .copy('src/cookie.html', 'public/cookie.html')
  .copy('src/impressum.html', 'public/impressum.html')
  .copy('src/imgs/', 'public/imgs/')
  .copy('src/css/bootstrap.css', 'public/css/bootstrap.css')
  .copy('src/fonts/', 'public/fonts/')
  .copy('src/js/snow.js', 'public/js/snow.js')
  .copy('src/pages', 'public');


mix.browserSync({
  "serveStatic": [
    "./public"
  ],
  "files": [
    "./public"
  ]
});