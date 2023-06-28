/**
 * @typedef {Object} Data
 * @property {string} type
 * @property {url} type
 */

/**
 * @function Image
 * @param {Data} data
 * @param {string} parrentClassName
 * @return {string} HTML or empty
 */

export const Image = (data, parrentClassName) => {
  if (Object.keys(data).length !== 2) return '';

  const { image } = data;

  const currentClassName = parrentClassName 
    ? `${parrentClassName}__image`    
    : `image`;

  return `
    <img
      class="${currentClassName}"
      src="${image.url}"
      alt="${image.description}"
    />
  `;
};