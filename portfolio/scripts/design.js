
function generateModal(elm) {
    let modal = document.createElement("div");
    modal.id = elm.style.id + "-modal";
    modal.className = "modal";
    document.appendChild(modal);

    let modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    modal.appendChild(modalContent);

    let modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalContent.appendChild(modalHeader);
    let closeButton = document.createElement("span");
    closeButton.className = "close";
    closeButton.value = "&times";
    modalHeader.appendChild(closeButton);
    let headerText = document.createElement("h2");
    headerText.className = "header-text";
    modalHeader.appendChild(headerText);

    let modalBody = document.createElement("div");
    modalBody.className = "modal-body";
    modalBody.style.backgroundImage = "url('/img/" + elm.style.id + "-bg.png" + "')";
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


}