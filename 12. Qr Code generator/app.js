let imgBox = document.getElementById('imgBox');
let qrImage = document.getElementById('qrImage');
let qrText = document.getElementById('qrText');

function generateQR(){
    if(qrText.value.length> 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add('show-img');
    }else{
        qrImage.classList.add('error');
        setTimeout(()=>{
            qrImage.classList.remove('error');
        },1000);
    }
   
}