/**
 * @function Image
 * @typedef {Object} Data
 * @property {string} type
 * @property {url} type
 * @param {Data} data
 * @param {string} parrentClassName
 * @returns {string} HTML or empty
 */

export const Image = (data, parrentClassName) => {
  if (!Object.keys(data).length === 2) return '';

  const currentClassName = parrentClassName 
    ? `${parrentClassName}__image` 
    : `image`;

    return `
      <img
        class="${currentClassName}"
        src="${url}"
      />
    `;
};
