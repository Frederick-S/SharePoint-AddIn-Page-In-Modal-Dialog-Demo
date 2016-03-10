'use strict';

ExecuteOrDelayUntilScriptLoaded(initializePage, "sp.js");

function initializePage() {
    $(document).ready(function () {
        $('#open-non-framing-aspx-page').click(function () {
            openModalDialog('./Non-Framing-Page.aspx', 'You won\'t see anything');
        });

        $('#open-framing-aspx-page').click(function () {
            openModalDialog('./Framing-Page.aspx', 'This is framing allowed aspx page');
        });

        $('#open-html-page').click(function () {
            openModalDialog('./Html-Page.html', 'This is a html page');
        });
    });
}

function openModalDialog(url, title) {
    var options = {
        title: title,
        url: url,
        autoSize: true,
        showClose: true
    };

    SP.UI.ModalDialog.showModalDialog(options);
}