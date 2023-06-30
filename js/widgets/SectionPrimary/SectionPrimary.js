import {Title} from './../../' // доделать
import {Text} from './../../'  // доделать
import {Image} from './../../'  // доделать
import {BrandLink} from './../../'  // доделать
import {Link} from '...//...//./' // доделать

/**@typedef {import('../../../_temp/Schema/Title.types').SectionPrimaty} Data */

/**
 * @function SectionPrimary
 * @param {Data} data
 * @returns {string}
 */

export const SectionPrimary = (data) => {
  const dataKeys = Object.keys(data).length

  if (dataKeys.length !== 4 && dataKeys.length !== 5) return '' ;
  
  const {name, title, texts, image, links} = data;

  const className = name 
    ? name 
    : 'section-primaty';

  return `
    <section class="${className}">
      ${title ? Title(className) : ''}
      ${texts.length > 0 ? texts.map((text) => Text(text, className)).join('') : ''} 
      ${image ? Image(image) : ''}
      ${links.length > 0 ? links.map((link) => Link(link, className)).join('') : ''}
    </section>
  `;

};

