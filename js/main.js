// class SinhVien {
//     maSV: "";
//     tenSV: "";
//     soDT: "";
//     constructor() {
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// // ==============================================
// // Đánh dấu biến 
// // ==============================================
// let number = 1
// {
//     let number = 1
// }
// // ==============================================
// // KIỂU DỮ LIỆU
// // ==============================================
// let num:number = 1;
// let title:String = "Alibaba";
// let lag:boolean = true;
// let arrNumber: number[] = [1,2,3,4,5];
// let sv1:SinhVien = new SinhVien();
// let sv2:SinhVien = new SinhVien();
// let arrSinhVien:SinhVien[] = [sv1, sv2]
// // Tuple: Mange hỗn hợp
// let sinhVien:[number, string] = [1, "Alibaba"]
// let useState:[number, any] = [1, function () { }]
// //Mange lòng mảng
// let nguoiDung:[number[], string] = [[1,2,3], "Alibaba"]
// // Enum
// const trangThaiKhamBenh = {
//     choKham: 0,
//     dangKham: 1,
//     quaLuot: 2,
//     khamXong: 3
// }
// enum TRANG_THAI_KHAM_BENH {
//     CHO_KHAM = 0, DANG_KHAM  = 1, QUA_LUOT =2 , KHAM_XONG = 3
// }
// // Tính đóng gói trong OOP (private, public, protected - ENCAPSULATION)
// //====================================================
// // Nếu không khai báo từ khóa private, public,... thì đều được khai báo public
// //====================================================
// // PRIVATE - PUBLIC
// //======================================================
// class HocVien {
//     public maHV:string = "";
//     private tenHV = "";
//     diemToan:number = 0;
//     diemLy:number = 0;
//     diemHoa:number = 0;
//     protected diemTrungBinh:number = 0;
//     constructor () {
//     }
//     tinhDiemTB = () => {
//         return this.diemTrungBinh = (this.diemToan + this.diemHoa + this.diemLy)/3
//     }
//     // static dùng cho nhưng hàm cần phải new đối tượng tuy nhiên về nghiệp vụ liên quan đến đối tượng này thì dùng
//     static renderMaHV ():string {
//         let numberRandom = Math.floor(Math.random() * 1000);
//         return numberRandom.toString()
//     }
// }
// let hv:HocVien = new HocVien();
// hv.maHV = HocVien.renderMaHV()
// hv.diemToan = 10;
// hv.diemLy = 10;
// hv.diemHoa = 10;
// hv.tinhDiemTB()
// console.log("DiemTB:", hv.tinhDiemTB())
// // PROTECTED: giống private nhưng có kế thừa từ lớp con
// //======================================================
// class HocSinh extends HocVien {
//     constructor () {
//         super();
//     }
// }
// //=====================================================================
/* DEMO TYPESCRIPT
*********************************************/
var SinhVien = /** @class */ (function () {
    function SinhVien() {
        this.maSV = "";
        this.tenSV = "";
        this.email = "";
    }
    return SinhVien;
}());
/*  ĐÁNH DẤU BIẾN
*********************************************/
var number = 1;
{
    var number_1 = 2;
}
/* KIỂU DỮ LIỆU
*********************************************/
var num = 1;
var title = "Alibaba";
var lag = true;
var arrNumber = [1, 2, 3, 4, 5];
var sv1 = new SinhVien();
var sv2 = new SinhVien();
// ### Mảng này chỉ nhận vào object có thuộc tính giống prototype SinhVien(maSv, tenSv, email)
var arrSinhVien = [sv1, sv2, { maSV: "1", tenSV: "AliPay", email: "alipay@gmail.com" }];
// ### TUPLE: Mảng hỗ hợp
var arrTuple = ["Tesla", 1200, "spaceX"];
var arrTuple2 = ["Paypal", function () { console.log("Success"); }];
var arrTuple3 = [[1, 2, 3, 4], ["Tesla", "SpaceX", "Paypal"]];
// ### ENUM: Mảng hỗ hợp
var trangThaiKhamBenh = {
    choKham: 0,
    dangKham: 1,
    quaLuot: 2,
    khamXong: 3
};
var TRANG_THAI_KHAM_BENH;
(function (TRANG_THAI_KHAM_BENH) {
    TRANG_THAI_KHAM_BENH[TRANG_THAI_KHAM_BENH["CHO_KHAM"] = 0] = "CHO_KHAM";
    TRANG_THAI_KHAM_BENH[TRANG_THAI_KHAM_BENH["DANG_KHAM"] = 1] = "DANG_KHAM";
    TRANG_THAI_KHAM_BENH[TRANG_THAI_KHAM_BENH["QUA_LUOT"] = 2] = "QUA_LUOT";
    TRANG_THAI_KHAM_BENH[TRANG_THAI_KHAM_BENH["KHAM_XONG"] = 3] = "KHAM_XONG";
})(TRANG_THAI_KHAM_BENH || (TRANG_THAI_KHAM_BENH = {}));
var trangThaiBenhNhan1 = TRANG_THAI_KHAM_BENH.DANG_KHAM;
/* TÍNH ĐÓNG GÓI TRONG OOP
*********************************************/
// ### private - public
var HocVien = /** @class */ (function () {
    function HocVien() {
        var _this = this;
        this.maHV = "";
        this.tenHV = "";
        this.diemToan = 0;
        this.diemLy = 0;
        this.diemHoa = 0;
        this.diemTrungBinh = 0;
        this.diemGPA = 3.0;
        // Set hoặc get chỉ tồn tại. Nếu đùng cả 2 thì giống với khai báo public
        this.getDiemTB = function () {
            return _this.diemTrungBinh;
        };
        this.setDiemTB = function (dtb) {
            _this.diemTrungBinh = dtb;
        };
        this.tinhDiemTB = function () {
            _this.diemTrungBinh = (_this.diemToan + _this.diemHoa + _this.diemLy) / 3;
        };
        this.xuatThongTinHV = function () {
            _this.tinhDiemTB();
            var ketQua = "\n            T\u00EAn h\u1ECDc vi\u00EAn: " + _this.tenHV + "\n            \u0110i\u00EAm trung b\u00ECnh: " + _this.diemTrungBinh + "\n        ";
            return ketQua;
        };
    }
    // static dùng cho nhưng hàm cần phải new đối tượng tuy nhiên về nghiệp vụ liên quan đến đối tượng này thì dùng
    // Không nên làm dụng static vì nó sẽ chiếm bộ nhớ và giữ ở đó chỉ khi tắt ứng dụng với giải phóng bộ nhớ
    HocVien.renderMaHV = function () {
        var numberRandom = Math.floor(Math.random() * 1000);
        return numberRandom.toString();
    };
    return HocVien;
}());
var hv = new HocVien();
hv.maHV = HocVien.renderMaHV();
hv.diemToan = 10;
hv.diemLy = 10;
hv.diemHoa = 10;
hv.tinhDiemTB();
console.log("DiemTB:", hv.tinhDiemTB());
// ### protected: giúp lớp con kế thừa lấy dữ liệu private từ lớp cha
// ### ứng dung: cấp quyền để những người khác có thể mở rộng ứng dụng
var HocSinh = /** @class */ (function (_super) {
    __extends(HocSinh, _super);
    function HocSinh() {
        var _this = _super.call(this) || this;
        _this.diemGPA;
        return _this;
    }
    return HocSinh;
}(HocVien));
var iPhone = {
    id: 123,
    name: "Iphone12",
    price: 12000
};
var NhanVien = /** @class */ (function () {
    function NhanVien() {
    }
    NhanVien.prototype.xuLyCongViec = function () {
        console.log("Xử lý công việc của nhân viên");
    };
    return NhanVien;
}());
var LaoCong = /** @class */ (function () {
    function LaoCong() {
    }
    LaoCong.prototype.xuLyCongViec = function () {
        console.log("Xử lý công việc của la công");
    };
    return LaoCong;
}());
var nv = new NhanVien;
nv.xuLyCongViec();
var lc = new LaoCong;
lc.xuLyCongViec();
//# sourceMappingURL=main.js.map