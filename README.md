# `onAwesome`

A _smol_ library that responds to the word "awesome" being typed into the browser. It also exports a lower level `onWord` function that can be used to respond to any word.

## How to Use

First, you'll want to install the library:

```bash
npm i on-awesome
```

Then, in your application, you can use it like so:

```js
import { onAwesome } from "on-awesome";

onAwesome(() => {
  alert('You typed the word "awesome"!');
});
```

## API

It returns some utilities to help you manage awesome state:

```js
import { onAwesome } from "on-awesome";

const { cleanUp, isAwesome, reset } = onAwesome(() => {
  alert('You typed the word "awesome"!');
});
```

Here's what each function does:

- `cleanUp` - Removes the event listener that was added to the document.
- `isAwesome` - Returns a boolean indicating whether or not the word "awesome" has been typed.
- `reset` - Resets the state of the library so that it can be used again.

## Usage in a React App

If you're using this library in a React app, you'll want to use the `useEffect` hook to clean up the event listener when the component unmounts:

```js
import { useEffect } from "react";
import { onAwesome } from "on-awesome";

const AwesomeComponent = () => {
  useEffect(() => {
    const { cleanUp } = onAwesome(() => {
      alert('You typed the word "awesome"!');
    });
    return cleanUp;
  }, []);

  return <div>Awesome!</div>;
};
```

## Contributing

You're awesome and I want to collaborate with you! Please feel free to open an issue and we can go from there.
