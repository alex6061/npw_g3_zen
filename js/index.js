import { data } from './src/js/components/data.js';

const { download,
        warranty,
        care,
        cashback, 
        clients, 
        footer 
} = data.en;

const root = document.querySelector('#root');

root.insertAdjacentHTML('beforeend', Section (download));
root.insertAdjacentHTML('beforeend', Section (warranty));
root.insertAdjacentHTML('beforeend', Section (care));
root.insertAdjacentHTML('beforeend', Section (cashback));
root.insertAdjacentHTML('beforeend', Section (clients));
root.insertAdjacentHTML('beforeend', Section (footer));
