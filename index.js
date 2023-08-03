let tabLinks = document.getElementsByClassName('about-btns');
let tabContents = document.getElementsByClassName('tab-contents');

function ontab(tabNames){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabNames).classList.add('active-tab');
}