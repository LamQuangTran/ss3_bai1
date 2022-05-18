class sinhVien {
    constructor(msv, ten, tuoi, diaChi, gioiTinh, love) {
        this.msv = msv;
        this.ten = ten;
        this.tuoi = tuoi;
        this.diaChi = diaChi;
        this.gioiTinh = gioiTinh;
        this.love = love;
    }
}
var sv1 = new sinhVien('B9111', 'Tu may dap ', 19, 'Nam Dinh', 'Nam', 'Đang có mối quan hệ đồng tính');
var sv2 = new sinhVien('B9110', 'thien ', 19, 'Ha Noi', 'Nam', 'Độc Thân');
var sv3 = new sinhVien('B9112', 'hau ', 19, 'Ha Noi', 'Nam', 'Đã kết hôn');
let arr = [];
arr.push(sv1, sv2, sv3);
var _html = '';
function Show(arr) {
    for (let i = 0; i < arr.length; i++) {
        _html += `
            <tr>
                <td>${arr[i].msv}</td>            
                <td>${arr[i].ten}</td>            
                <td>${arr[i].tuoi}</td>            
                <td>${arr[i].diaChi}</td>            
                <td>${arr[i].gioiTinh}</td>            
                <td>${arr[i].love}</td>            
                          
            </tr>
        `;
        document.getElementById('sc').innerHTML = _html;
    }
}
Show(arr);
