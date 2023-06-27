import data from './../data.js';

/**
 * @typedef {Object} Data
 * @property {string} type
 */

/**
 * @function Text
 * @param {data} text
 * @param {string} parrentClassName 
 * @returns {string} Html or Empty
 */

 export const Text = (texts, parrentClassName) => {
  if(Object.keys(texts) !== 2) return '';

  const currentClassName = parrentClassName 
    ? `${parrentClassName}__text` 
    : 'text';
    
    return `
      <p class="${currentClassName}">
        ${texts.length > 0 ? texts.map((text) => Text(text, className)).join('') : ''}
      </p>
  `;
}
