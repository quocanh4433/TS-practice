// class SinhVien {
//     maSV: "";
//     tenSV: "";
//     soDT: "";
//     constructor() {
//     }
// }

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
class SinhVien {
    maSV = "";
    tenSV = "";
    email = "";
    constructor() { }
}

/*  ĐÁNH DẤU BIẾN  
*********************************************/
let number = 1

{
    let number = 2
}

/* KIỂU DỮ LIỆU  
*********************************************/
let num: number = 1;

let title: string = "Alibaba";

let lag: boolean = true;

let arrNumber: number[] = [1, 2, 3, 4, 5];

let sv1: SinhVien = new SinhVien();
let sv2: SinhVien = new SinhVien();

// ### Mảng này chỉ nhận vào object có thuộc tính giống prototype SinhVien(maSv, tenSv, email)
let arrSinhVien: SinhVien[] = [sv1, sv2, { maSV: "1", tenSV: "AliPay", email: "alipay@gmail.com" }]

// ### TUPLE: Mảng hỗ hợp
let arrTuple: [string, number, string] = ["Tesla", 1200, "spaceX"]
let arrTuple2: [string, any] = ["Paypal", function () { console.log("Success") }]
let arrTuple3: [number[], string[]] = [[1, 2, 3, 4], ["Tesla", "SpaceX", "Paypal"]]

// ### ENUM: Mảng hỗ hợp
const trangThaiKhamBenh = {
    choKham: 0,
    dangKham: 1,
    quaLuot: 2,
    khamXong: 3
}

enum TRANG_THAI_KHAM_BENH {
    CHO_KHAM = 0, DANG_KHAM = 1, QUA_LUOT = 2, KHAM_XONG = 3
}

let trangThaiBenhNhan1 = TRANG_THAI_KHAM_BENH.DANG_KHAM


/* TÍNH ĐÓNG GÓI TRONG OOP
*********************************************/


// ### private - public
class HocVien {
    maHV:string = "";
    tenHV = "";
    diemToan:number = 0;
    diemLy:number = 0;
    diemHoa:number = 0;
    private diemTrungBinh:number = 0;
    protected diemGPA:number = 3.0;
    constructor () {

    }

    // Set hoặc get chỉ tồn tại. Nếu đùng cả 2 thì giống với khai báo public
    getDiemTB = () => {
        return this.diemTrungBinh
    }
    setDiemTB = (dtb) => {
        this.diemTrungBinh = dtb
    }


    tinhDiemTB = () => {
        this.diemTrungBinh = (this.diemToan + this.diemHoa + this.diemLy)/3
    }

    xuatThongTinHV = () => {
        this.tinhDiemTB()
        let ketQua = `
            Tên học viên: ${this.tenHV}
            Điêm trung bình: ${this.diemTrungBinh}
        `
        return ketQua
    }

    // static dùng cho nhưng hàm cần phải new đối tượng tuy nhiên về nghiệp vụ liên quan đến đối tượng này thì dùng
    // Không nên làm dụng static vì nó sẽ chiếm bộ nhớ và giữ ở đó chỉ khi tắt ứng dụng với giải phóng bộ nhớ
    static renderMaHV ():string {
        let numberRandom = Math.floor(Math.random() * 1000);
        return numberRandom.toString()
    }
}
let hv:HocVien = new HocVien();

hv.maHV = HocVien.renderMaHV()
hv.diemToan = 10;
hv.diemLy = 10;
hv.diemHoa = 10;
hv.tinhDiemTB()
console.log("DiemTB:", hv.tinhDiemTB())

// ### protected: giúp lớp con kế thừa lấy dữ liệu private từ lớp cha
// ### ứng dung: cấp quyền để những người khác có thể mở rộng ứng dụng
class HocSinh extends HocVien {
    constructor () {
        super ()
        this.diemGPA
    }
}



/* INTERFACE - IMPLEMENT
*********************************************/


// ### INTERFACE
interface Product {
    id:number,
    name:string,
    price:number,
}

let iPhone:Product = {
    id: 123,
    name: "Iphone12",
    price: 12000
}

// ### IMPLEMENT
interface phanConCongViec {
    xuLyCongViec()
}

class NhanVien implements phanConCongViec {
    xuLyCongViec() {
        console.log("Xử lý công việc của nhân viên")
    }
}

class LaoCong implements phanConCongViec {
    xuLyCongViec() {
        console.log("Xử lý công việc của la công")
    }
}

let nv = new NhanVien
nv.xuLyCongViec()

let lc = new LaoCong
lc.xuLyCongViec()
