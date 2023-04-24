// bài 1
// ý 1
let arr1 = [1, 1, 3, 3, 2, 4];
let newArr1 = [...new Set(arr1)];

for (let i = 0; i < newArr1.length - 1; i++) {
    for (let j = i + 1; j < newArr1.length; j++) {
        if (newArr1[i] > newArr1[j]) {
            let temp = newArr1[i];
            newArr1[i] = newArr1[j];
            newArr1[j] = temp;
        }
    }
}
console.log("newArr1", newArr1);

//ý 2
let arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 5];
let newArr2 = [... new Set(arr2)];
while (newArr2.length < arr2.length) {
    newArr2.push('*');
}
console.log("newArr2", newArr2);

//Bài 2
let arr3 = [1, 1, 1, 3, 3, 2, 2, 4];
let count = {}

for (let i = 0; i < arr3.length; i++) {
    let number = arr3[i];
    if (count[number]) {
        count[number]++;
    } else {
        count[number] = 1;
    }
}
for (let i = 0; i < arr3.length; i++) {
    if (count[arr3[i]] === 1) {
        console.log('Số xuất hiện 1 lần là số: ', arr3[i]);
        break;
    }
}


//bài 3
let arr4 = [1, 4, 1, 3, 2, 5]
let total1 = 0;
let total2 = 0;

for (let i = 0; i < arr4.length; i = i + 2) {
    total1 = total1 + arr4[i];
}
for (let i = 1; i < arr4.length; i = i + 2) {
    total2 = total2 + arr4[i];
}
if (total1 > total2) {
    console.log('Tổng giá trị lớn nhất của các số không liền nhau là: ', total1);
} else {
    console.log('Tổng giá trị lớn nhất của các số không liền nhau là: ', total2);
}


//Bài 4
let nums = [-1, 0, 2, 1, -2, -4, 2];
let result = [];
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        for (let k = j + 1; k < nums.length + 1; k++) {
            if ((nums[i] + nums[j] + nums[k]) === 0) {
                result.push([nums[i], nums[j], nums[k]]);
            }
        }
    }
}
console.log('result: ', result);