import baseTheme from '@littleplusbig/gatsby-theme-faqs-prismic/src/gatsby-plugin-theme-ui';

export default {
  ...baseTheme,
  fonts: {
    ...baseTheme.fonts,
    body: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
    heading: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  },
  colors: {
    ...baseTheme.colors,
    
    black: 'white',                 // title text
    text: 'white',                  // question text
    answerText: 'white',            // answer text
 
    offWhite: '#614e87',            // front card
    primaryLight: '#796d92',        // middle card
    primary: '#9a8fb0',             // back card

    primaryDark: '#181b21',         // background of the top section
    answerBackground: '#181b21',    // background of the Q/A section

    controlBackground: '#5b4a7e',
    controlBackgroundHover: '#2D235F',
    controlBackgroundActive: '#2D235F',
    controlBorder: '#5b4a7e',
    controlBorderHover: '#2D235F',
    controlBorderActive: '#2D235F',
  },
};

