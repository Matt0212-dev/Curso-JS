const delay = (ms) => {
    const startTime = new Date().getTime()
    while(new Date().getTime() - startTime <= 2000){
        //espera 2 segundos
    }
}
this.addEventListener('message', function(e){
    console.log(e)
    console.log(e.data)
    delay(3000)
    self.postMessage('processo demorado finalizado')

})