AOS.init();

window.addEventListener("load", function () {
    // elements
    let intro = document.getElementById("intro");
    let header = document.getElementById("header");
    let introH = intro.scrollHeight;
    let dataScroll = document.querySelectorAll('[data-scroll]');
    let dataScrollSpy = document.querySelectorAll('[data-scrollSpy]');
    let dataModal = document.querySelectorAll('[data-modal]');
    let bodyClass = document.querySelector("body");
    let modalClose = document.querySelectorAll("#modalClose");
    let modalDiv = document.getElementById("becomeClientModal");
    let thanks = document.getElementById("thanksModal");
    let dataModalCall = document.querySelector('[data-call]');
    let menuToggle = document.querySelector("#menuToggle");
    let nav = document.querySelector("#nav");

    //menuToggle
    menuToggle.addEventListener("click",(e)=> {
        e.preventDefault()
        nav.classList.toggle("show");
        bodyClass.classList.toggle("no-scroll");
    })

    // headerScroll
    window.addEventListener("scroll", function () {
        scrollBar();
    });
    function scrollBar() {
        let scrollTop = window.scrollY;

        if (scrollTop >= introH - 100) {
            header.classList.add("header--dark");
        }
        else {
            header.classList.remove("header--dark");
        }
    }

    // smooth scroll to sections
    for (let i = 0; i < dataScroll.length; i++)
        dataScroll[i].addEventListener("click", (event) => {
            event.preventDefault();
            let scrollEL = dataScroll[i].getAttribute('data-scroll');
            find(scrollEL)
        })

    function find(el) {
        let scrollID = document.querySelector('' + el);
        window.scroll({
            left: 0,
            top: scrollID.offsetTop - 30,
            behavior: 'smooth'
        })
    }


    // scroll spy
    window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY;
        dataScrollSpy.forEach((item) => {
            let sectionID = item.getAttribute("data-scrollSpy");
            let sectionOffset = document.querySelector(sectionID).offsetTop;
            if (scrollTop >= sectionOffset - 300) {
                let sections = document.querySelectorAll("#nav [data-scroll]");
                for (i = 0; i < sections.length; i++) {
                    sections[i].classList.remove('active');
                }
                document.querySelector(`#nav [data-scroll = "` + sectionID + `"]`).classList.add("active")
            }
        })
    })

    // modal
    for (let i = 0; i < dataModal.length; i++)
        dataModal[i].addEventListener("click", (event) => {
            event.preventDefault();
            let modal = dataModal[i].getAttribute('data-modal');
            bodyClass.classList.add("no-scroll")
            showModal(modal)
        })
    for (let i = 0; i < modalClose.length; i++)
    modalClose[i].addEventListener("click", (e) => {
        e.target.parentNode.parentNode.parentNode.classList.remove("show")
        bodyClass.classList.remove("no-scroll")
    })

    function showModal(modalID) {
        document.querySelector(modalID).classList.add("show")
    }
//callmeback
    dataModalCall.addEventListener("click",()=> {
         modalDiv.classList.remove("show");
         console.log(thanks)
         thanks.classList.add("show");
    })




});



