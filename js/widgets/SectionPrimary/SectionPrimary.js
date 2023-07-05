import{Title} from './../../components/Title/Title.js'
import{Link} from './../../components/Link/Link.js'

/**@typedef {import('./SectionPrimary.types').SectionPrimaty} Data  */

/**
 * @function SectionPrimary
 * @param {Data} data
 * @returns {string} 
 */

export const SectionPrimary = (data) => {

  const dataKeys = Object.keys(data);

  if (dataKeys.length !== 4 && dataKeys.length !== 5) return '';

  const{ name, title, links } = data;

  const { appleLink, googleLink } = links;

  const className = name
    ? name
    : 'section-primary';

  return `
    <section class="${className}">
      ${title ? Title(title, className) : ''}
      ${appleLink ? Link(appleLink) : ''}
      ${googleLink ? Link(googleLink) : ''}
    </section>
  `;
};
