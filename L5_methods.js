/* 1. შექმენით მასივი, რომლის საწყისი მნიშვნელობა იქნება რიცხვები: 5, 25, 89, 120, 36; მასივის ბოლოში დაამატეთ ორი ელემენტი(სტრინგი): javascript და python; მასივის დასაწყისში კი დაამატეთ ელემენტი(სტრინგი): html და css;
გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში; წაშალეთ მასივიდან პირველი და ბოლო ელემენტი; დაბეჭდეთ მასივისი ახალი ელემენტები. */

// let numbers = [5, 25, 89, 120, 36];

// // ბოლოში დამატება
// numbers.push('JavaScript', 'Python');

// // დასაწყისში დამატება
// numbers.unshift('HTML', 'CSS');

// // ბოლო ელემენტის წაშლა
// numbers.pop();

// // პირველი ელემენტსი წაშლა
// numbers.shift();

// console.log(numbers);
// console.log(numbers.length);



/* 2. შექმენით მასივი, შემდეგი ელემენტებით: ფორთოხალი, ბანანი, მსხალი;
გამოიტანეთ ინფორმაცია ეკრანზე თუ რამდენი ელემენტი გაქვთ მასივში;
მასივის ბოლოს დაამატეთ ორი ელემენტი: ვაშლი და ანანასი;
მასივის დასაწყისში კი დაამატეთ ელემენტი: საზამთრო;
გამოიტანეთ ეკრანზე, რამდენი ელემენტი გაქვთ მასივში;
მასივის მე-3 ადგილას დაამატეთ ელემენტი: მანგო;
წაშალეთ მასივიდან პირველი და ბოლო ელემენტი;
გამოიტანეთ ეკრანზე, თუ რამდენი ელემენტი დარჩა მასივში; */

// let fruits = ['Orange', 'Banana', 'Pear'];
// // console.log(fruits.length);

// fruits.push('Apple', 'Pineapple');
// fruits.unshift('Watermelon');
// fruits.splice(2, 0, 'Mango');

// fruits.shift();
// fruits.pop();
// console.log(fruits.length);
// console.log(fruits);



/* 3. მოცემულია მასივი:
let array = [12, 25, 3, 6, 8, 14, 7, 23];
map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი; */

// let array = [12, 25, 3, 6, 8, 14, 7, 23];
// let newArray = array.map(item => item / 3 );
// console.log(newArray);



/* 4.  მოცემულია მასივი:
filter-ის გამოყენებით გაფილთრეთ და გამოიტანეთ მარტო ციფრები; */

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

// let numbers = array.filter(item => typeof item == 'number');
// console.log(numbers);



/* 5.მოცემულია მასივი:
ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვები რომლების სიმბოლოების რაოდენობა იქნება 3-ზე მეტი; */

// let languages = ['html', 'css', 'javascript', 'python', 'php'];
// let three = languages.filter(function(item){
//     return item.length > 3;
// })

// console.log(three);


/* 6.მოცემულია მასივი:
Reduce-ის საშუალებით მიიღეთ ერთი კომბინირებული სტრინგი(academy of digital industries); */

// let array= ['academy', 'of', 'digital', 'industries'];
// let sentence = array.reduce((previousValue, currentValue) => previousValue + ' ' + currentValue);

// console.log(sentence);



/* 7. მოცემულია მასივი:
შექმენით ახალი მასივი map ფუნქციის გამოყენებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი ამ მასივში უნდა იყოს 
ამ რიცხვის კვადრატი. თუ ელემენტი არის ტექსტი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. 
სხვა შემთხვევაში ელემენტები უნდა დაემატოს უცვლელად; */

let item = [12, 'google', 32, null, 'yahoo', 25];
let array = item.map(function(x){
    if (x == 'number'){
        return x ** 2;
    }
    else if (x == 'string'){
        return x.toUpperCase;
    }
    else{
        return x
    }
})

console.log(array);

/* 8. Მოცემულია მასივი:
Filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს; */

// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// let cities = words.filter(name => name.includes('m') || name.includes('M'));
// console.log(cities)
