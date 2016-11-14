; (function () {

    function getRequest(url, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    if (success) {
                        return success(JSON.parse(xhr.responseText));
                    }
                    else {
                        return JSON.parse(xhr.responseText);
                    }
                } else {
                    if (error) {
                        return error(xhr);
                    }
                    else {
                        return xhr;
                    }
                }
            }
        }

        xhr.open("get", url, true);
        xhr.send();
    }

    function getMyRequest(url) {
        return new Promise(function (resolve, error) {
            var xhr = new XMLHttpRequest();
            xhr.open("get", url);
            xhr.onload = resolve;
            xhr.onerror = error;
            xhr.send();
        });

    }

    function getSampleDataSuccess(data) {
        cacheObject.add(data);
    }

    function getSampleDataFailed(res) {
        console.info(res)
    }

    function isObjectEmpty(objectValue) {
        //return objectValue === undefined || Object.keys(objectValue).length < 1;
        return !objectValue || Object.keys(objectValue).length < 1;
    }

    var cacheObject = (function () {
        var _object = {};

        return {
            get: function () {
                return _object;
            },
            add: function (sourceObject) {
                _object = sourceObject;
            }
        };
    })();

    function getSampleData() {
        var _cacheData = cacheObject.get();
        if (isObjectEmpty(cacheObject.get())) {
            return getRequest('/src/js/data.json', getSampleDataSuccess, getSampleDataFailed);
        }
        return _cacheData;

    }

    function initDataSetup() {
        getMyRequest('/src/js/data.json').then(function (data) {
            var sampleData = JSON.parse(data.target.response);
            localStorage.setItem("sample_data", data.target.response);
        })
    }

    function getData() {
        return localStorage.getItem("sample_data");
    }

    /*
        id is the sample data's index
    */
    function getById(id) {

        var p = new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("get", '/src/js/data.json');
            xhr.onload = function () {
                if (xhr.status == 200) {
                    var all = JSON.parse(xhr.responseText);
                    var row = all.find(function(row) { return row.index ===id;});
                    resolve(row);
                }
                else {
                    reject(Error(xhr.statusText));
                }
            };
            xhr.onerror = function () {
                reject(Error("Some other error!"));
            };
            xhr.send();
        });

        return p;

    }

    function getMySampleData(callback) {
        return getMyRequest('/src/js/data.json');
    }


    window.services = window.services || {};
    window.services.getRequest = getRequest;
    window.services.getSampleData = getSampleData;
    window.services.getMySampleData = getMySampleData;
    window.services.getById = getById;
    window.services.data = cacheObject.get;

})();