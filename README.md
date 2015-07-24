# geoquery

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ut-data-maps/geoquery?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## About

GeoQuery will be an app that maps existing, open data, in combination with user provided data. In turn, these datasets and visualizations can be used to inform citizens and government officials so that they can make informed decisions.  For example, it may be used to determine where grocery stores and community farms should be incentivized to reduce food deserts.

## Development

GeoQuery is actively under development.  Feel free to clone a copy, make mods, and send in pull requests.

To get it up and running locally:
 1. Ensure you have a recent version of [git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed.
 2. Ensure you have a recent version of npm installed.  Note that npm may be installed directly, which is not recommended, or via a version manager, such as nvm, which is installed and from there a local version of npm can be installed(highly recommended).
    - direct [npm install](https://nodejs.org/download/) (not recommended)
    - via [NVM](https://github.com/creationix/nvm) (highly recommended) then `nvm install stable` and `nvm use stable`
 3. `git clone https://github.com/ut-data-maps/geoquery.git`
 4. `npm install`
 5. `npm start`
 6. navigate to [http://localhost:4200/](http://localhost:4200/).


### gun notes

When doing development, it is sometimes useful to wipe out all gun data.  To successfully wipe data three things must happen:
  - local server must be stopped
  - local 'data.json' file must be deleted
  - browser's local storage must be cleared (from the tab's dev tools console, run `localstorage.clear()`)

The order of the above doesn't matter, however it is recommended that the server be stopped first to ensure it doesn't replace a deleted 'data.json' file or the localstorage.  Once all three steps are completed, the server can be restarted.

For more information, refer to the [gun wiki](https://github.com/amark/gun/wiki) or ping the crew via the [gun gitter](https://gitter.im/amark/gun).