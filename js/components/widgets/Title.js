/**
 * @property {string} priority
 * @property {string} text
 */

/**
 * @function Title
 * @typedef {Object} Title
 * @param {Title} data 
 * @param {string} parrentClassName 
 * @returns {string} HTML or empty
 */

export const Title = (data, parrentClassName) => {
  if (!Object.keys(data).length === 2) return '';

  const { priority, content } = data;

  const currentClassName = parrentClassName 
    ? `${parrentClassName}__title`
    : 'title';

  switch(priority) {
    default: return `<h1 class="${currentClassName}>${content}</h1>"`;
    case 2: return `<h2 class="${currentClassName}>${content}</h2>"`;
    case 3: return `<h3 class="${currentClassName}>${content}</h3>"`;
    case 4: return `<h4 class="${currentClassName}>${content}</h4>"`;
    case 5: return `<h5 class="${currentClassName}>${content}</h5>"`;
    case 6: return `<h6 class="${currentClassName}>${content}</h6>"`;
  }
}