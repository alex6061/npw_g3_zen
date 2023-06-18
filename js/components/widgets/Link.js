/**
 * @function Link
 * @typedef {Object} Data
 * @property {string} type
 * @property {string} url
 * @param {Data} data
 * @param {string} parrentClassName
 * @returns {string} HTML or empty
 */

export const Link = (data, parrentClassName) => {
  if (!Object.keys(data).length === 2) return "";
  const { type, link } = data;

  const currentClassName = parrentClassName
    ? `${parrentClassName}__link`
    : `link`;

  return `
    <a
      class="${currentClassName}"
      src="${url}"
    >
      ${type === "google" ? IconGoogle() : IconApple()}
    </a>
  `;
};
