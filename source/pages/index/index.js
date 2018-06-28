import createMenu from '../../components/menu/menu';
import './index.pug';
import './index.styl';

var menu = createMenu([
    {title: 'Главная', name: 'index'},
    {title: 'Блог', name: 'blog'}],
    'menu');
document.body.appendChild(menu);
 
console.log('in index.js');