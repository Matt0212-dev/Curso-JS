function createXMLHttpRequest(method, url, cb, data = null){
    const xhr = new XMLHttpRequest()

    xhr.open(method, url)
    xhr.send(data)

    xhr.onreadystatechange = verificaAjax

    function verificaAjax(){
        // console.log(xhr.readyState)
        // console.log(xhr.status)
        // console.log(xhr.response)
        // console.log(xhr.responseText)

        if(xhr.readyState === 4){
            if(xhr.status === 200 || xhr.status === 304) {
                // console.log(typeof xhr.responseText)
                const json = JSON.parse(xhr.responseText)
                
                if (typeof cb === 'function'){
                    cb(json)
                }               
            }else if(typeof cb === 'function'){
                cb({
                    status: xhr.status,
                    message: "algo deu errado com a conexão",
                })
            }
        }
    }
}
