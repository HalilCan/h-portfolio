function createModal(elm) {
    let modal = document.createElement("div");
    modal.id = elm.style.id + "-modal";
    modal.className = "modal";
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
    let closeButton = document.createElement("span");
    closeButton.className = "close";
    closeButton.value = "&times";
    closeButton.onclick = () => {modal.style.display = "none";};
    modalHeader.appendChild(closeButton);
    let headerText = document.createElement("h2");
    headerText.className = "header-text";
    headerText.innerText = elm.getAttribute("data-header");
    modalHeader.appendChild(headerText);

    let modalBody = document.createElement("div");
    modalBody.className = "modal-body";
    modalBody.style.backgroundImage = "url('img/" + elm.style.id + "-bg.png" + "')";
    modalContent.appendChild(modalBody);
    let modalBodyText = document.createElement("p");
    modalBodyText.className = "modal-body-text";
    modalBody.appendChild(modalBodyText);
    let modalBodyText2 = document.createElement("p");
    modalBodyText.className = "modal-body-text-2";
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