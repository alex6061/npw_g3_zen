/**
 * @function Link
 * @typedef {Object}
 * @property {Data} data
 * @param {Object} url 
 * @param {string} parrentClassName 
 * @param {string} description 
 * @returns {string} HTML or empty 
 */

export const Link = (url, description, parrentClassName) => {
  if(!data) return '';

  const { description, url, link } = data;

  const currentClassName = parrentClassName 
    ? `${parrentClassName}__link` 
    : `link`;

  return `
    <a
      class="${currentClassName}"
      src="${link.url}"
      alt="${link.description}"
    >
      ${Link.type === 'google' && IconGoogle()}
      ${Link.type === 'apple' && IconApple()}
    </a>
  `;
};
