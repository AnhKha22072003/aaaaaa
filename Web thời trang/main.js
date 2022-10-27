const tabBtns = document.querySelectorAll('.body__menu-nav p');
const tabContent = document.querySelectorAll('.body__menu-list');

const handleTabBtnClick = (tab) => {
    tabContent.forEach((p) => {
        p.classList.remove('active');
    })
    tabBtns.forEach((p) => {
        p.classList.remove('active');
    });
    tab.classList.add('active');

    const target = tab.getAttribute('data-target');

    const activeTab = document.querySelector(target);

    activeTab.classList.add('active');


}

tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        handleTabBtnClick(btn);
    })
})