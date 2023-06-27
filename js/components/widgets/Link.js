/**
 * @typedef {Object} Data
 * @property {string} type
 * @property {string} url
 */

/**
 * @function Link
 * @param {Data} data
 * @param {string} parrentClassName
 * @returns {string} HTML or empty
 */

export const Link = (data, parrentClassName) => {
  if (Object.keys(data).length !== 2) return '';

  const { type, url } = data.links;

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
