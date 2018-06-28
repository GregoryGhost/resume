import createMenu from '../../components/menu/menu';
import './blog.pug';

var menu = createMenu([
    {title: 'Главная', name: 'index'},
    {title: 'Блог', name: 'blog'}],
    'menu');
document.body.appendChild(menu);
 
console.log('in blog.js');