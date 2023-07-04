import{Title} from './../../components/Title/Title.js'
import{Link} from './../../components/Link/Link.js'
// import{Image} from './../../components/Image/Image.js' доделать

/**@typedef {import('./SectionPrimary.types').SectionPrimaty} Data  */

/**
 * @function SectionPrimary
 * @param {Data} data
 * @returns {string} 
 */


export const SectionPrimary = (data) => {
  const dataKeys = Object.keys(data);

  if(dataKeys.length !== 4 || dataKeys.length !== 5) return '';

  const{name, title, texts, links, image} = data;

  const className = name
    ? name
    : 'section-primary';

  return `
    <section class="${className}">
      ${title ? Title(title, className) : ''}
      ${texts.length > 0 ? texts.map((text) => Text(text,className)).join('') : ''}
      ${image ? Image(image, className)  : ''}
      ${links.length > 0 ? links.map((link) => Link(link, className)).join('') : ''}
    </section>
  `;
};