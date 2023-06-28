/**
 * @typedef {Object} Data
 * @property {string} url
 */

/**
 * @function Link
 * @param {Data} data
 * @param {string} parrentClassName
 * @returns {string} HTML or empty
 */


export const Link = (data, parrentClassName) => {
  if (Object.keys(data).length !== 1) return '';

  const { url } = data;

  const currentClassName = parrentClassName
    ? `${parrentClassName}__link`
    : `link`;

  return `
    <a
      class="${currentClassName}"
      href="${url}"
    >
      ${type === 'google' ? IconGoogle() : IconApple()}
    </a>
  `;
};
