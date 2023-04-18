import { transformTool } from '@he3-kit/utils';
import beautify from 'js-beautify';
import { minify } from 'csso';
const prettifyCSS = (inputValue: string) =>
  beautify.css(inputValue, {
    indent_size: 2,
  });

const minifyCSS = (inputValue: string) => minify(inputValue).css;

const sampleData = `:root {
  --surface-color: #e9e9e9;
  --curve: 40;
}

* {
  box-sizing: border-box;
}

body {
  font-family: 'Noto Sans JP', sans-serif;
  background-color: #fef8f8;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 4rem 5vw;
  padding: 0;
  list-style-type: none;
}

.card {
  position: relative;
  display: block;
  height: 100%;
  border-radius: calc(var(--curve) * 1px);
  overflow: hidden;
  text-decoration: none;
}`;

export default transformTool({
  inputLang: 'CSS',
  outputLang: 'CSS',
  sampleData: sampleData,
  inputHandler: prettifyCSS,
  resultHandler: minifyCSS,
});
