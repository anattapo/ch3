const prompt = require ('prompt-sync')()
let size = parseFloat(prompt ('ขนาดของไฟล์ (ไบต์) >>'))
var unit
if (size>=1099511627776){//ขนาด 1,099,511,627,776 ขึ้นไป ให้แปลงเป็นหน่วย TB
size /= 1099511627776
unit = "TB"
}else if (size >= 1073741824){//ขนาด 107,3741,824 ขึ้นไป ให้แปลงเป็นหน่วย GB
size /= 1073741824
unit = "GB"
}else if (size >= 1048576){//ขนาด 1,048,576 ขึ้นไป ให้แปลงเป็นหน่วย HB
size /= 1048576
unit = "HB"
}else if (size >= 1024){//ขนาด 1,024 ขึ้นไป ให้แปลงเป็นหน่วย KB
size /= 1024
unit = "KB"
}else{//ขนาดน้อยกว่า 1,014 ขึ้นไป ให้ใช้เป็นหน่วย Byte
unit = "byte"
}