# React Material Icons

React wrapper around Google's [Material Design Icons](material.io/icons/) with no external dependencies. 😍

## Usage

```
yarn add https://github.com/mycujoo/material-icons
```

and then

```
import IconShare from 'material-icons/social/IconShare'

<IconShare />
```

And done! 🎉

### Format

All icons are prefixed with `Icon` and are in PascalCase.

```
import ${name} from 'material-icons/${category}/${name}'
```

### Finding the icon

Visit the [icon list](https://material.io/icons/) and import from the category the icon is in.

### Example

"3d rotation" icon in the "Action" category would be named `Icon3dRotation` and would be imported from `'material-icons/action/Icon3dRotation'`.

```
import Icon3dRotation from 'material-icons/action/Icon3dRotation'
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
```

### Building

```
yarn run build # OR node build.js
```

### Missing icons?

This library is using the [GitHub repository](https://github.com/google/material-design-icons) of the icons and building the components from that. If an icon is missing from there, then there is not much you can do. If the icon is present in there, then this library is out of date.

```
yarn upgrade material-design-icons
yarn run build # OR node build.js
```

..and now open a PR.

## Versioning

We don't really use semver for versioning. It's kinda like this:

- Anything that breaks import syntax is a major version.
- Any new icon is a minor version.
- Any update is a patch.
