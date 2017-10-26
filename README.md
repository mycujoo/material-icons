# React Material Icons

React wrapper around Google's [Material Design Icons](material.io/icons/) with no external dependencies. 😍

## Usage

```
yarn add https://github.com/mycujoo/material-icons
```

and then

```
import { IconShare } from 'material-icons/social'

<IconShare />
```

And done! 🎉

#### ES6

```
const IconsSocial = require('material-icons/social')
const IconShare = IconsSocial.IconShare

// or
const IconShare = require('material-icons/social').IconShare
```

### Format

All icons are prefixed with `Icon` and are in PascalCase.

```
import { ${name} as Icon } from 'material-icons/${category}'
```

### Finding the icon

Visit the [icon list](https://material.io/icons/) and import from the category the icon is in.

### Example

"3d rotation" icon in the "Action" category would be named `Icon3dRotation` and would be imported from `'material-icons/action'`.

```
import { Icon3dRotation } from 'material-icons/action'
```

👌

## Contributing or hacking away

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- node ^6

### Setting up

```
git clone https://github.com/mycujoo/material-icons
cd material-icons
yarn
npm run build OR node build.js
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. Anything that breaks import syntax is a major version.
