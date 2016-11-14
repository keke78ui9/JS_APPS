; (function () {

    function isObjectEmpty(objectValue){
        return !objectValue || Object.keys(objectValue).length < 1;
    }

    window.helper = window.helper || {};
    window.helper.isObjectEmpty = isObjectEmpty;
})();