/**
 * @function Link
 * @typedef {Object}
 * @param {Object} data 
 * @param {string} parrentClassName 
 * @param {string} description 
 * @param {string} url 
 * @returns {string} HTML or empty 
 */

export const Link = (url, description, parrentClassName) => {
  if(!Link) return '';

  const { description, url } = data;

  const currentClassName = parrentClassName ?
   `${parrentClassName}__link` :
    `link`;

  return `
    <a
      class="${currentClassName}"
      src="${Link.url}"
      alt="${Link.description}"
    >
      ${Link.type === 'google' && IconGoogle()}
      ${Link.type === 'apple' && IconApple()}
    </a>
  `;
};
