let toastBox = document.getElementById ('toastBox');
let successMsg = "<i class='fa-regular fa-badge-check'></i> Successfully submitted";
let errorMsg = "<i class='fa-regular fa-circle-xmark'></i> Please fix the error!";
let invalidMsg = '<i class="fa-regular fa-square-check"></i> Invalid input, check again';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
}