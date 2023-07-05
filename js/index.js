import {SectionPrimary} from './widgets/SectionPrimary/SectionPrimary.js';
import {data} from './data/data.js';

// 1. импортировать компоненты
// 2. получить данные(контент) для компонентов
// 3. получить ссылку на корневой элемент в браузере(id root)
// 4. передать контент в компоненты 
// 5. поместить компоненты в корневой элемент 

const {download} = data;

const root = document.querySelector('#root');

root.insertAdjacentHTML('beforeend', SectionPrimary(download));
