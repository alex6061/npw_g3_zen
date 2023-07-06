import { data } from './src/js/components/data.js';
import { Text } from './src/js/components/Text.js';
import { Title } from './src/js/components/Title.js';
import { Image } from './src/js/components/Image.js';
 
const { download,
  warranty,
  care,
  cashback, 
  clients, 
  footer 
} = data.en;

const { title, image, text } =  download;  

const root = document.querySelector('#root');

root.insertAdjacentHTML('beforeend', Section (download));
root.insertAdjacentHTML('beforeend', Section (warranty));
root.insertAdjacentHTML('beforeend', Section (care));
root.insertAdjacentHTML('beforeend', Section (cashback));
root.insertAdjacentHTML('beforeend', Section (clients));
root.insertAdjacentHTML('beforeend', Section (footer));

root.insertAdjacentHTML('beforeend', Title (title));
root.insertAdjacentHTML('beforeend', Text(text));
root.insertAdjacentHTML('beforeend', Image (image));
