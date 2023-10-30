// სთხოვეთ მომხმარებელს შემოიტანოს დადებითი რიცხვი 50 დან 100
// მდე , იპოვეთ მომხმარებლის მიერ შემოტანილი რიცხვის გამყოფების
// საშუალო არითმეტიკული და დაბეჭდეთ კონსოლში.
// let userNum = Number(prompt('Enter number between 50 - 100'));
// while (userNum < 50 || userNum > 100) {
// 	userNum = Number(prompt('Enter number betweeen 50 - 100'));
// }
// let count = 0;
// let sum = 0;
// for (let i = 0; i <= userNum / 2; i++) {
// 	if (userNum % i === 0) {
// 		count++;
// 		sum += i;
// 	}
// }
// console.log((sum + userNum) / (count + 1));

// 2. თხოვეთ მომხმარებელს შემოიტანოს 3 რიცხვი 70 დან 140 მდე
// შუალედში, დაითვალეთ ყველა რიცხვის გამოყოვების რაოდენობა და
// დაბეჭდეთ კონსოლში ის რიცხვი რომელსაც ყველაზე მეტი გამყოფი
// ეყოლება
// let a = Number(prompt('Enter number a between 70 - 140'));
// while (a < 70 || a > 140) {
// 	a = Number(prompt('Enter number a between 70 - 140'));
// }
// let b = Number(prompt('Enter number b between 70 - 140'));
// while (b < 70 || b > 140) {
// 	b = Number(prompt('Enter number b between 70 - 140'));
// }
// let c = Number(prompt('Enter number c between 70 - 140'));
// while (c < 70 || c > 140) {
// 	c = Number(prompt('Enter number c between 70 - 140'));
// }
// let countA = 0;
// let countB = 0;
// let countC = 0;
// let max = Math.max(a, b, c);
// console.log(max);
// for (let i = 0; i <= max; i++) {
// 	if (a % i === 0) {
// 		countA++;
// 	}
// 	if (b % i === 0) {
// 		countB++;
// 	}
// 	if (c % i === 0) {
// 		countC++;
// 	}
// }
// let maxDiv = Math.max(countA, countB, countC);
// if (maxDiv === countA) console.log(a);
// else if (maxDiv === countB) console.log(b);
// else console.log(c);
// 3. დაითვალეთ 10 დან 180 მდე ყველა 3 ის ან 5 ის ჯერადი რიცხვების
// ნამრავლი და დაბეჭდეთ კონსოლში
// let mult = 1;
// for (let i = 10; i <= 180; i++) {
// 	if (i % 3 === 0 || i % 5 === 0) {
// 		mult *= i;
// 	}
// }
// console.log(mult);
// 4. სთხოვეთ მომხმარებელს შემოიტანოს 4 რიცხვი, დაბეჭდეთ
// კონსოლში შემოტანილი რიცხვიდან რომელია უდიდესი
// let a = Number(prompt('Enter number a'));
// let b = Number(prompt('Enter number b'));
// let c = Number(prompt('Enter number c'));
// let d = Number(prompt('Enter number d'));

// let max = Math.max(a, b, c,d);
// console.log(max)
// 5. სთხოვეთ მომხარებელს შემოტიანოს საკუთარ სახელი და გვარი,
// ელ.ფოსტა, სურათის მისამართი , ამის შემდგომ დააგენერირეთ html
// ფორმატის სტრინგი და დააგენერირეთ ის document ში ქარდის სახით
// let firstName = prompt('Enter your firstName');
// let lastName = prompt('Enter your lastName');
// let email = prompt('Enter your email');
// let imgAddress = prompt('Enter your imgAddress');
// image adress link ->: https://cdn.pixabay.com/photo/2023/09/18/16/47/leaves-8260967_1280.jpg
// document.write(`<div class="card" style="width: 18rem;">
//   <img src=${imgAddress} class="card-img-top" alt="randomImage">
//   <div class="card-body">
//     <p class="card-text">I am ${firstName} ${lastName}. My email: ${email}</p>
//   </div>
// </div>`);
// 6.გაქვთ შემდეგი სახის განტოლება 3x^2 + 2x – 5 = 0, დაითვალეთ რას
// უდრის x1 და x2 ის მნიშვნელობები
// let d = Math.sqrt(2 * 2 + 4 * 3 * 5);
// console.log(d);
// let x1 = (-2 + d) / (2 * 3);
// let x2 = (-2 - d) / (2 * 3);
// console.log(x1, x2);

// 7. თხოვეთ მომხმარებელს შემოიტანოს მართკუთხა სამკუთხედის
// კათეზები, დაითვალეთ რას უდრის ჰიპოტენუზა
// let a = Number(prompt('Enter side a'));
// let b = Number(prompt('Enter side b'));
// let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// console.log(c);
// 8. თხოვეთ მომხმარებელს შემოიტანოს გარკვეული რიცხვი 0 დან 200
// მდე, გაიგეთ ეს რიცხვი მარტივია, შედგენილი თუ არც მარტივი და
// არც შედგენილი , ამის შემდგომ მიღებული პასუხი დალოგეთ
// კონსოლში
// let userNum = Number(prompt('Enern Number between 0-200'));
// while (userNum < 0 || userNum > 200) {
// 	userNum = Number(prompt('Enter Number bewteen 0-200'));
// }
// if (userNum === 0 || userNum === 1) {
// 	console.log('number is neither prime nor composite');
// } else {
// 	let isPrime = true;
// 	for (let i = 2; i < userNum; i++) {
// 		if (userNum % i === 0) {
// 			isPrime = false;
// 		}
// 	}
// 	if (isPrime) {
// 		console.log('number is prime');
// 	} else {
// 		console.log('number is composite');
// 	}
// }
// 9. თხოვეთ მომხმარებელს შემოიტანოს საკუთარი : name, surname, age,
// email და დალოგეთ კონსოლში შემდეგი სტრინგი რომელშიც
// რეალური მონაცემები იქნება ჩასმული : Hello I am “name” “surname” I
// am “age” year old, my email is “email”
// let firstName = prompt('Enter your firstName');
// let lastName = prompt('Enter your lastName');
// let age = Number(prompt('Enter your age'));
// let email = prompt('Enter your email');
// console.log(`Hello I am ${firstName} ${lastName} I
// // am ${age} year old, my email is ${email}`);
// 10. გაიგეთ ყველა მარტივი რიცხვი 10 დან 90 მდე და დაბეჭდეთ ისინი
// კონსოლში
// for (let i = 10; i < 90; i++) {
// 	let isPrime = true;
// 	for (let j = 2; j < i; j++) {
// 		if (i % j === 0) {
// 			isPrime = false;
// 			break;
// 		}
// 	}
// 	if (isPrime) console.log(i);
// }
// 11. დააგენერირეთ 10 ცალი რენდომული ფერი rgb ფორმატში,
// მაგალითად შემდეგი ფორმატის rgb(123,43,11);
for (let i = 0; i < 10; i++) {
	let num1 = Math.round(Math.random() * 255);
	let num2 = Math.round(Math.random() * 255);
	let num3 = Math.round(Math.random() * 255);
	let color = `rgb(${num1},${num2},${num3})`;
	console.log(color);
}
