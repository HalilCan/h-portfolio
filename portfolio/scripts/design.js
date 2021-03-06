function createModal(elm) {
    if (document.getElementsByClassName("modal") !== undefined) {
        for (let elem of document.getElementsByClassName("modal")) {
            elem.innerHTML = "";
        }
    }
    let modal = document.createElement("div");
    modal.id = elm.getAttribute("id") + "-modal";
    modal.className = "modal";
    modal.style.zIndex = "10";
    document.body.appendChild(modal);

    let modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modalContent.style.width = "80vw";
    modalContent.style.height = "auto";
    modalContent.style.minHeight = "400px";
    modal.appendChild(modalContent);

    let modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.style.paddingTop = "15px";
    modalHeader.style.boxShadow = "0 4px 3px -2px gray";
    modalHeader.style.zIndex = "11";
    modalContent.appendChild(modalHeader);
    let headerText = document.createElement("h2");
    headerText.className = "header-text";
    headerText.innerText = elm.getAttribute("data-header");
    modalHeader.appendChild(headerText);
    let closeButton = document.createElement("span");
    closeButton.className = "close";
    closeButton.innerHTML = "&times";
    closeButton.onclick = () => {
        modal.style.display = "none";
    };
    modalHeader.appendChild(closeButton);

    let modalBody = document.createElement("div");
    modalBody.className = "modal-body";
    /*modalBody.style.backgroundImage = "url('img/" + elm.getAttribute("id") + "-bg.png" + "')";*/
    modalContent.appendChild(modalBody);
    let modalBodyText = document.createElement("p");
    modalBodyText.className = "modal-body-text";
    modalBodyText.innerText = elm.getAttribute("data-body-1");
    modalBody.appendChild(modalBodyText);
    let modalBodyText2 = document.createElement("p");
    modalBodyText2.className = "modal-body-text-2";
    modalBodyText2.innerText = elm.getAttribute("data-body-2");
    modalBody.appendChild(modalBodyText2);

    let modalLightBox = document.createElement("div");
    modalLightBox.style.zIndex = 11;
    modalLightBox.className = "lightbox-content";
    modalLightBox.style.id = "lightbox-content";
    modalBody.appendChild(modalLightBox);
    // Slides
    for (let i = 1; i < 5; i++) {
        let newSlide = document.createElement("div");
        newSlide.className = "slides";
        newSlide.style.display = "none";
        newSlide.style.flex = "1";
        let numberText = document.createElement("div");
        numberText.className = "number-text";
        numberText.innerText = i.toString() + " / 4";
        newSlide.appendChild(numberText);

        let slideImg = document.createElement("img");
        slideImg.className = "slide-img";
        slideImg.style.id = elm.getAttribute("id") + "-img-" + i.toString();
        slideImg.style.width = "100%";
        slideImg.style.height = "auto";
        slideImg.src = "./img/" + elm.getAttribute("id") + "-img-" + i.toString() + ".png";
        newSlide.appendChild(slideImg);

        modalLightBox.appendChild(newSlide);
    }
    // Arrow buttons
    let leftArrow = document.createElement("a");
    leftArrow.className = "prev-arr";
    leftArrow.onclick = () => {
        shiftSlides(-1);
    };
    leftArrow.innerText = "<";
    modalLightBox.appendChild(leftArrow);

    let rightArrow = document.createElement("a");
    rightArrow.className = "next-arr";
    rightArrow.onclick = () => {
        shiftSlides(1);
    };
    rightArrow.innerText = ">";
    modalLightBox.appendChild(rightArrow);

    let modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer";
    modalContent.appendChild(modalFooter);
    let modalFooterText = document.createElement("h3");
    modalFooterText.className = "modal-footer-text";
    modalFooter.appendChild(modalFooterText);

    return modal;
}

let currentModal;

function generateModal(elm) {
    currentModal = createModal(elm);
    currentModal.style.display = "block";
    shiftSlides(1);
}

window.onclick = (event) => {
    if (event.target === currentModal) {
        currentModal.style.display = "none";
    }
};

let currentIndex = 0;

function shiftSlides(d) {
    let slideImages = document.getElementsByClassName("slides");
    currentIndex += d;
    if (currentIndex > slideImages.length) {
        currentIndex = 1;
    }
    if (currentIndex < 1) {
        currentIndex = slideImages.length;
    }
    for (let i = 1, len = slideImages.length; i < (len + 1); i++) {
        console.log(i, currentIndex);
        if (i !== currentIndex) {
            slideImages[i - 1].style.display = "none";
        }
        if (i === currentIndex) {
            slideImages[i - 1].style.display = "block";
        }
    }
}