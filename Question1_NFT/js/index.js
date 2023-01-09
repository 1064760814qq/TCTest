// const size = ref({
// 	width: 300
// });

function showAppMessage(){
    alert("App Coming Soon!",null);
};

function whiteShow(){
      alert("Coming Soon!",null);
};

// window.showAlertMessage = function() {
//     console.log('sss');
//     alert("App Coming Soon!",null);
// }

function nftMint(){
    var connect_btn = document.getElementById('ConnectWallet');

    var modal__connect = document.getElementsByClassName('modal-warp');
    console.log(modal__connect);
    if(modal__connect && modal__connect.length) {
        var modal__connect__item = modal__connect[0]
        if (modal__connect__item.style && modal__connect__item.style.display === 'none') {
            modal__connect__item.style.display = 'block'
        } else {
            modal__connect__item.style.display = 'none'
        }
        modal__connect__item.onclick = function(e) {
            console.log(e)
            if (e.target.className === 'modal-warp') {
                modal__connect__item.style.display = 'none'
            }
        }
    }
};

window.onload = function () {



    // var connect_btn = document.getElementById('ConnectWallet');
    // var modal__connect = document.getElementsByClassName('modal-warp');
    // console.log('sss');
    // if(modal__connect && modal__connect.length) {
    //     var modal__connect__item = modal__connect[0]
    //     connect_btn.onclick = function(e) {
    //         if (modal__connect__item.style && modal__connect__item.style.display === 'none') {
    //             modal__connect__item.style.display = 'block'
    //         } else {
    //             modal__connect__item.style.display = 'none'
    //         }
    //     }
    // }

    var teamList = document.getElementsByClassName("motor-people__item")
    if (teamList && teamList.length) {
        for (let index = 0; index < teamList.length; index++) {
            const element = teamList[index];
            element.onmouseenter = function(e) {
                console.log(e.target.getElementsByClassName('motor-people__item-warp'));
                const ll = e.target.getElementsByClassName('motor-people__item-warp')
                if (ll) {
                    ll[0].style.display = 'block'
                }
                // if (!e.style || !e.style.opacity || e.style.opacity == 0) {
                //     e.style = {
                //         opacity: 1
                //     }
                // } else {
                //     e.style = {
                //         opacity: 0
                //     }
                // }
            }
            element.onmouseleave = function(e) {
                console.log(e.target.getElementsByClassName('motor-people__item-warp'));
                const ll = e.target.getElementsByClassName('motor-people__item-warp')
                if (ll) {
                    ll[0].style.display = 'none'
                }
                // if (!e.style || !e.style.opacity || e.style.opacity == 0) {
                //     e.style = {
                //         opacity: 1
                //     }
                // } else {
                //     e.style = {
                //         opacity: 0
                //     }
                // }
            }
        }
    }

    document.getElementById('comeID').onclick = function(e) {
        alert("App Coming Soon!",null);
    }

    const mobile = document.getElementsByClassName('motor-header__menu')
    if (mobile) {
        mobile[0].onclick = function() {
            const mobileMenu = document.getElementById('motor-header__navs')
            if (mobileMenu) {
                if (mobileMenu.style.display && mobileMenu.style.display == 'none') {
                    mobileMenu.style.display = 'flex'
                } else {
                    mobileMenu.style.display = 'none'
                }
            }
        }
    }
}