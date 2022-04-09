const $fs = document.querySelector.bind(document);
const $fms = document.querySelectorAll.bind(document);
function selectCategory(type,element) {
    const menuFilterItem = $fms(".menu-filter__category-item");

    for (let i = 0 ; i<menuFilterItem.length; ++i) {
        menuFilterItem[i].style.color = '#b8b8b8';
    }
    element.style.color = '#fff';
    let items = $fms(".menu-bottom-list__card");
    for (let i = 0 ; i<items.length; i++) {
        let item = items[i]
        if(item.classList.contains(type)) {
            item.style.display = 'grid';
        }
        else {
            item.style.display = 'none';
        }
    }


}