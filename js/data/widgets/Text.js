/**
 * @typedef {Object} text
 * @property  {string} content
 */

/**
 * @function Text
 * @param {string} text
 * @param {string} parrentClassName 
 * @returns {string} Html or Empty
 */

 export const Text = (text, parrentClassName) => {
  if (!text) return '';

  const currentClassName = parrentClassName 
    ? `${parrentClassName}__text` 
    : 'text';

  const { content } = text;

  return `
    <p class="${currentClassName}">${text}</p>
  `;
}
