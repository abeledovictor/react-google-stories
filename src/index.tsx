declare global {
  namespace JSX {
    interface IntrinsicElements {
      'amp-img': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'amp-story': any;
      'amp-story-grid-layer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'amp-story-page': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export { AmpStory } from './AmpStory'
export { AmpStoryPage } from './AmpStoryPage'
export { AmpStoryGridLayer } from './AmpStoryGridLayer'
export { AmpImg } from './AmpImg'