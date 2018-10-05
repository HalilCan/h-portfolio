function createModal(elm) {
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
    modalContent.appendChild(modalHeader);
    let headerText = document.createElement("h2");
    headerText.className = "header-text";
    headerText.innerText = elm.getAttribute("data-header");
    modalHeader.appendChild(headerText);
    let closeButton = document.createElement("span");
    closeButton.className = "close";
    closeButton.innerHTML = "&times";
    closeButton.onclick = () => {modal.style.display = "none";};
    modalHeader.appendChild(closeButton);

    let modalBody = document.createElement("div");
    modalBody.className = "modal-body";
    modalBody.style.backgroundImage = "url('img/" + elm.getAttribute("id") + "-bg.png" + "')";
    modalBody.style.backgroundColor = "rgba(41, 227, 245, 0.17)";
    modalContent.appendChild(modalBody);
    let modalBodyText = document.createElement("p");
    modalBodyText.className = "modal-body-text";
    modalBodyText.innerText = elm.getAttribute("data-body-1");
    modalBody.appendChild(modalBodyText);
    let modalBodyText2 = document.createElement("p");
    modalBodyText2.className = "modal-body-text-2";
    modalBodyText2.innerText = elm.getAttribute("data-body-2");
    modalBody.appendChild(modalBodyText2);

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
}

window.onclick = (event) => {
    if (event.target === currentModal) {
        currentModal.style.display = "none";
    }
};