    const hamButton = document.querySelector('#mobile-menu')
    const menuList = document.querySelector('#mobile-menu-list')

    hamButton.addEventListener('click', toggleMenu)

    function toggleMenu(){
        const isSideMenuOpen = !menuList.classList.contains('inactive')
        if(isSideMenuOpen){
            menuList.classList.add('inactive')
        }else{
            menuList.classList.remove('inactive')
        }
    }