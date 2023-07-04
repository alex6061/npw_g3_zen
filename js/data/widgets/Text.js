/**
 * @function Text
 * @param {string} texts
 * @param {string} parrentClassName 
 * @returns {string} Html or Empty
 */

 export const Text = (texts, parrentClassName) => {
  if (texts) return '';

  const currentClassName = parrentClassName 
    ? `${parrentClassName}__text` 
    : 'text';
    
    return `
      <p class="${currentClassName}">
        ${texts.length > 0 ? texts.map((text) => Text(text, className)).join('') : ''}
      </p>
  `;
}
