/**@typedef {import('./Link.types.ts').Link} Data*/

/**
 * @function Link
 * @param {Data} data
 * @param {string} parrentClassName
 * @returns {string} HTML or empty
 */

export const Link = (data, parrentClassName) => {
  if (Object.keys(data).length !== 2) return '';

  const { url, description } = data;

  const currentClassName = parrentClassName
    ? `${parrentClassName}__link`
    : `link`;

  return `
    <a
      class="${currentClassName}"
      href="${url}"
    >
      ${description === 'google' ? 'icon Google' : 'icon Apple'}
    </a>
  `;
};
