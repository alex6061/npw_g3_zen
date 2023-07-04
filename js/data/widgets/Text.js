/**
 * @function Text
 * @param {string} text
 * @param {string} parrentClassName 
 * @returns {string} Html or Empty
 */

 export const Text = (text, parrentClassName) => {
  if (text) return '';

  const currentClassName = parrentClassName 
    ? `${parrentClassName}__text` 
    : 'text';
    
    return `
      <p class="${currentClassName}">
        ${text.length > 0 ? text.map(t => Text(t, className)).join('') : ''}
      </p>
  `;
}
