window.onload = function() {
    const overlayMessage = document.getElementById('overlay-message');
    overlayMessage.style.display = 'block'; // Show the overlay

    const aa = "Hello from developer(Shashi Singh).....";
    const a = "Initialising Linux Terminal.....";
    const b = "Initialising Host Terminal for hacking.....";
    const c = "Host captured.....";
    const d = "Data sharing over to developer....."
    const e = "Sending Data to Dark Web....."
    
    const arr = [aa,a,b,c,d,e];
    var i = 0;
    const timeout = async() =>{
        setTimeout(()=>{
            overlayMessage.style.display = 'none';
            console.log("Display none")
        },2000)
    };
    setInterval(() =>{
        overlayMessage.style.display = 'block';
        console.log("Display visible");
        overlayMessage.innerText = arr[i];
        i++;
        if(i>=5){
            i=5;
        };
        const callingTimeOut = async () => {
            const lol = await timeout()
            console.log("timeout called")
        };
        callingTimeOut();
    },3000);
};