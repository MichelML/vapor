[![Build Status](https://img.shields.io/travis/coveo/styleguide.svg?style=flat-square)](https://travis-ci.org/coveo/styleguide)
[![dev-dependencies](https://img.shields.io/david/dev/coveo/styleguide.svg?style=flat-square)](https://github.com/coveo/styleguide/blob/master/package.json)
[![license](http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/coveo/styleguide/blob/master/LICENSE)

# Coveo UI Styleguide

Coveo Styleguide is a collection of UI components used in Coveo's Administration Console. All components and their documentation is [available here](http://coveo.github.io/styleguide/)

Available on npm:

	npm install coveo-styleguide
	
Also available on our cdn :

	static.cloud.coveo.com/styleguide/v1.x.y/css/CoveoStyleGuide.css

> The project is at its early stages, some components can still have _lots_ of breaking changes.

# Contributing
Make sure you have Node JS and NPM installed.
Run `npm install` to get the required dependencies.

###Dependencies
Coveo Styleguide uses [jQuery](https://jquery.com/) and [Underscore](http://underscorejs.org/) for the more complex components. Tested with jQuery 2.1.4 and Underscore 1.8.3

### Building
To build the dist folder and export it into the docs folder, simply run `gulp docs`.

### Running documentation locally
1. If necessary install bundler `gem install bundler` (sudo may be needed)
2. Install needed gems `bundle install`
3. From the project root directory, run `bundle exec jekyll serve` in the command line.
4. Open `http://localhost:4000/styleguide/` in your browser, and voila!

### Test locally without publishing
To easily test the result locally without publishing a new package at each build:

1. Create a [npm link](https://docs.npmjs.com/cli/link) of your local repository.
2. In your project (i.e. adminV8), use that link to get the new package `npm link coveo-styleguide`
3. Rebuild your project, you will then see your changes applied.


### Publishing on npm
Once you're proud of your contribution, push your changes to GitHub (in a branch or in a fork to be reviewed by the team). Once merged in `master`, all you need is to bump the version and re-[publish the package on npm](https://docs.npmjs.com/getting-started/publishing-npm-packages):

> This requires an [npm account](https://www.npmjs.com/signup) with permission to publish to [coveo-styleguide](https://www.npmjs.com/package/coveo-styleguide). Create an account if you don't have one and ask our team for publish access.

1. Install [npm-release](https://github.com/phuu/npm-release) `npm install -g npm-release`
2. `npm-release patch`

### Library
If you prefer simply referencing the generated styleguide in one of your project,
you can run `gulp` and retrieve the files in the `/dist` folder.

# Thanks
Coveo Styleguide cherry picks from these awesome UI Libraries

* [Bootstrap](https://github.com/twbs/bootstrap)
* [BassCss](https://github.com/basscss/basscss)
* [ResetCss](http://meyerweb.com/eric/tools/css/reset/)

# License
Coveo StyleGuide is distributed under [MIT license](https://github.com/Coveo/styleguide/blob/master/LICENSE).
