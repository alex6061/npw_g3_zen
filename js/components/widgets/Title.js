/**
 * @function Title
 * @typedef {Object} Title
 * @property {string} priority
 * @param {data} title 
 * @param {string} parrentClassName 
 * @returns {string} HTML or empty
 */

export const Title = (data, parrentClassName) => {
  if(!Title) return '';

  const { priority, content } = data;

  const currentClassName = parrentClassName ?
   `${parrentClassName}__title` :
    'title';

  switch(priority){
    default: return `<h1 class="${currentClassName}>${content}</h1>"`;
    case 2: return `<h1 class="${currentClassName}>${content}</h1>"`;
    case 3: return `<h1 class="${currentClassName}>${content}</h1>"`;
    case 4: return `<h1 class="${currentClassName}>${content}</h1>"`;
    case 5: return `<h1 class="${currentClassName}>${content}</h1>"`;
    case 6: return `<h1 class="${currentClassName}>${content}</h1>"`;
  }
}