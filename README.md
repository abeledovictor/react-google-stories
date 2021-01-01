# react-google-stories BETA

### Easily add Google Stories to your React App
First API to play nicely with google stories

### Setup
- Add this script to your index.html file
```js
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-video"
        src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>
    <script async custom-element="amp-story"
        src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
```

**It's important to note that to have a valid AMP story, the body tag element must have only one AmpStory component; all other elements are contained in the AmpStory.**

#### Create react app setup example
If you had a new CRA project, you should need to
- `npx create-react-app my-google-stories-app`
- `cd my-google-stories-app`
- Install react-google-stories `yarn add react-google-stories`
- Remove the return code from _App.js_
- Paste this template:

```js
import { AmpStoryGridLayer, AmpStory, AmpStoryPage, AmpImg, AmpHeader, AmpParagraph } from 'react-google-stories'

function App() {
  return (
    <AmpStory
      title="Example title"
      publisher="Example publisher"
      publisher-logo-src="logo128.png"
      poster-portrait-src="3x4.jpg"
    >
      <AmpStoryPage id="first">
        <AmpStoryGridLayer template="fill">
          <AmpImg src="logo512.png" height="720" width="1280" layout="responsive" />
        </AmpStoryGridLayer>
        <AmpStoryGridLayer template="vertical">
            <AmpHeader level={1} title="Title 1" />
            <AmpParagraph text="Subtitle" />
        </AmpStoryGridLayer>
      </AmpStoryPage>

      <AmpStoryPage id="second">
        <AmpStoryGridLayer template="fill">
          <AmpImg src="logo512.png" height="720" width="1280" layout="responsive" />
        </AmpStoryGridLayer>
        <AmpStoryGridLayer template="vertical">
            <AmpHeader level={1} title="Title 2" />
            <AmpParagraph text="Subtitle" />
        </AmpStoryGridLayer>

      </AmpStoryPage>
    </AmpStory>
  );
}

export default App;
```

- Inside `public/index.html` file remove everything inside `body` tag and add `id="root"` to it: `<body id="root"></body>`

- Add the following scripts to head at `public/index.html` :

```html
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-video"
        src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>
    <script async custom-element="amp-story"
        src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
```

- WARNING: **Each AmpStoryPage should have a unique id**