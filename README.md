# [React Color Selector](https://github.com/myassir/react-color)

[![Npm Version][npm-version-image]][npm-version-url]
[![License][license-image]][license-url]

* **13 Different Pickers** - Sketch, Photoshop, Chrome and many more

* **Make Your Own** - Use the building block components to make your own

## Demo

![Demo](https://media.giphy.com/media/26FfggT53qE304CwE/giphy.gif)

[**Live Demo**](http://casesandberg.github.io/react-color/)

## Installation & Usage

```sh
npm install @myassir/react-color --save
```

### Include the Component

```js
import React from 'react'
import { SketchPicker } from '@myassir/react-color'

class Component extends React.Component {

  render() {
    return <SketchPicker />
  }
}
```
You can import `AlphaPicker` `BlockPicker` `ChromePicker` `CirclePicker` `CompactPicker` `GithubPicker` `HuePicker` `MaterialPicker` `PhotoshopPicker` `SketchPicker` `SliderPicker` `SwatchesPicker` `TwitterPicker` respectively.

> 100% inline styles via [ReactCSS](http://reactcss.com/)

[license-image]: http://img.shields.io/npm/l/@myassir/react-color.svg
[license-url]: LICENSE
[npm-version-image]: https://img.shields.io/npm/v/@myassir/react-color.svg
[npm-version-url]: https://www.npmjs.com/package/@myassir/react-color

### Credits
This package is originally a fork from [react-color](https://github.com/casesandberg/react-color) intended to fix the unresolved bugs & to add more features as the original project seems to be no more maintained.
