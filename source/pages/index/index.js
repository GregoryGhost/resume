import createMenu from '../../components/menu/menu';
import './index.css';

var menu = createMenu(['Главная','Блог'], 'menu');
document.body.appendChild(menu);
 
console.log('in index.js');