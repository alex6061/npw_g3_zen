/**
 * @function Image
 * @typedef {Object} Image
 * @property {string} sourse
 * @property {string} description
 * @param {Image} image 
 * @param {string} parrenClassName 
 * @returns {string} HTML or empty
 */

export const Image = (image,parrenClassName) => {
  if(!Image) return '';

  const currentClassName = parrenClassName ?
    `${parrenClassName}__image` :
    'image';

  return `
    <img
      class="${currentClassName}"
      href="${image.sourse}"
      alt="${image.description}"
    >
  `;
};