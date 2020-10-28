document.querySelector('.btnTinhTien').onclick = function(){
    var getsoKM = document.querySelector('#soKM').value;
    var getThoiGianCho = document.querySelector('#thoiGianCho').value;
    var getchecked = document.querySelector('input[name="selector"]:checked').value;
    var tinhTienxe = tinhTienuberX(getsoKM,getchecked);
    var ThoiGianCho = tinhThoiGianCho(getThoiGianCho,getchecked);
    var tongTien = tongTienXe(tinhTienxe,ThoiGianCho);
    // console.log(getsoKM);
    // console.log(getThoiGianCho);
    // console.log('Check',getchecked);
    // console.log('So tien xe la : ',tinhTienxe);
    // console.log('So tien thoi gian cho la :',ThoiGianCho);
    // console.log('Tong tien phai tra la :',tongTien);

    document.querySelector('#xuatTien').innerHTML = tongTien;
}

document.querySelector('.btnHoaDon').onclick = function(){
    var getsoKM = document.querySelector('#soKM').value;
    var getThoiGianCho = document.querySelector('#thoiGianCho').value;
    var getchecked = document.querySelector('input[name="selector"]:checked').value;
    // var tinhTienxe = tinhTienuberX(getsoKM,getchecked);
    // var ThoiGianCho = tinhThoiGianCho(getThoiGianCho,getchecked);
    document.querySelector('#xuatTien').innerHTML = "<p>So KM da nhap la :"+getsoKM+"</p>";
}

var tinhTienuberX = function(getsoKM,getchecked){
    var sotien = '';
    if(getchecked === 'Uber X'){
        if(getsoKM <= 1){
            sotien = Number('8000') * getsoKM;
        }else if(getsoKM >= 1 && getsoKM <= 20){
            sotien = Number('12000') * getsoKM;
        }else if(getsoKM >= 21){
            sotien = (20*12000) + (getsoKM - 20) * Number('10000')  ;
        }else{
            sotien = 'Khong xac dinh';
        }
    }else if(getchecked === 'Uber SUV'){
        if(getsoKM <= 1){
            sotien = Number('9000') * getsoKM;
        }else if(getsoKM >= 1 && getsoKM <= 20){
            sotien =Number('14000') * getsoKM;
        }else if(getsoKM >= 21){
            sotien = (20*14000) + (getsoKM - 20) * Number('12000')  ;
        }else{
            sotien = 'Khong xac dinh';
        }
    }else {
        (getchecked === 'Uber Black')
        if(getsoKM <= 1){
            sotien = Number('10000') * getsoKM;
        }else if(getsoKM >= 1 && getsoKM <= 20){
            sotien =Number('16000') * getsoKM;
        }else if(getsoKM >= 21){
            sotien = (20*16000) + (getsoKM - 20) * Number('14000')  ;
        }else{
            sotien = 'Khong xac dinh';
        }
    }
    return sotien;
}

var tinhThoiGianCho = function(getThoiGianCho,getchecked){
    if(getchecked === 'Uber X'){
        var soTien1phut = Number('2000') * getThoiGianCho;
    }else if(getchecked === 'Uber SUV'){
        var soTien1phut = Number('3000') * getThoiGianCho;
    }else{ (getchecked === 'Uber Black') 
        var soTien1phut = Number('4000') * getThoiGianCho;
    }
   return soTien1phut;
}


var tongTienXe = function(tinhTienuberX,tinhThoiGianCho){
    var tongTien = tinhThoiGianCho + tinhTienuberX ;
    return tongTien;
}

