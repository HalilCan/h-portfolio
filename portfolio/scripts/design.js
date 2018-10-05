<div id="myModal" class="modal">

    <!-- Modal content -->
<div class="modal-content">
    <div class="modal-header">
    <span class="close">&times;</span>
<h2>Modal Header</h2>
</div>
<div class="modal-body">
    <p>Some text in the Modal Body</p>
<p>Some other text...</p>
</div>
<div class="modal-footer">
    <h3>Modal Footer</h3>
</div>
</div>

</div>

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
    modalHeader.appendChild(modalContent);
    let closeButton = document.createElement("span");
    closeButton.className = "close";
    closeButton.value = "&times";
    modalHeader.appendChild(closeButton);
    let headerText = document.createElement("h2");
    headerText.className = "header-text";
    modalHeader.appendChild(headerText);






}