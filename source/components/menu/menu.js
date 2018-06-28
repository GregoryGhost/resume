export default function (pages, className) {
    var menu = document.createElement("ul");
    menu.className = className;
    var listItems = '';
    pages.forEach(function(page) {
        listItems += `<li><a href=\'${page.name}.html\'>${page.title}</a></li>`;
    });
    menu.innerHTML = listItems;
    return menu;
}