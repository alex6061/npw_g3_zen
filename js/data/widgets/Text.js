/**
 * @typedef {Object} Data
 * @property {string} text
 */

/**
 * @function Text
 * @param {Data} text
 * @param {string} parrentClassName 
 * @returns {string} Html or Empty
 */

 export const Text = (texts, parrentClassName) => {
  if(Object.keys(texts) !== 1) return '';

  const currentClassName = parrentClassName 
    ? `${parrentClassName}__text` 
    : 'text';
    
    return `
      <p class="${currentClassName}">
        ${texts.length > 0 ? texts.map((text) => Text(text, className)).join('') : ''}
      </p>
  `;
}
