/**
 * @typedef {Object} Data
 * @property {string} url
 * @property {string} description
 */

/**
 * @function Image
 * @param {Data} data
 * @param {string} parrentClassName
 * @return {string} HTML or empty
 */

export const Image = (data, parrentClassName) => {
  if (Object.keys(data).length !== 2) return '';

  const { url, description } = data;

  const currentClassName = parrentClassName 
    ? `${parrentClassName}__image`    
    : `image`;

  return `
    <img
      class="${currentClassName}"
      src="${url}"
      alt="${description}"
    />
  `;
};
