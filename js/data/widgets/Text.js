/**
 * @typedef {Object} text
 */

/**
 * @function Text
 * @param {string} text 
 * @param {string} parrentClassName 
 * @returns {string} Html or Empty
 */

const Text = (texts, parrentClassName) => {
  if(Object.keys(texts) !== 2) return '';

  const currentClassName = parrentClassName 
    ? `${parrentClassName}__text` 
    : 'text';

  return `
    <p class="${currentClassName}">${}</p>
  `;
};
