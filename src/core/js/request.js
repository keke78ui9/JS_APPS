; (function () {


    /*
    * data {
        method: 
        url
        }
    */
    function request(data){
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(data.method, data.url);
            xhr.onload = function () {
                if (xhr.status == 200) {
                     resolve(xhr.responseText);
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
    }

    /*
    [{method: "get", url: "url/test"}]
    */
    function requestAll(requestList) {
        if (!requestList || requestList.length < 1){
            return;
        }
        var promiseList = [];
        for (i = 0, len = requestList.length; i < len; i++){
            setTimeout(function() {  }, 40000);
            promiseList.push(request(requestList[i]));
        }

        return Promise.all(promiseList);
    }

    function use1(){
        var test = [];
        for (i = 1, len = 3; i <= len; i++){
            request({method: 'get', url: '/src/core/data/data' + i + '.json'}).then(function(data){
                test.push(data);
            });
        }
        return test;
    }

    function use2(){
        var test = [];
        var requestList = [];
        for (i = 1, len = 3; i <= len; i++){
            requestList.push({method: 'get', url: '/src/core/data/data' + i + '.json'});
        }
        requestAll(requestList).then(function(data){
            console.info(data);
        });
        
    }

    window.request = window.request || request;
    window.request.use1 = use1;
    window.request.use2 = use2;


})();