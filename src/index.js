import JustValidate from 'just-validate';

// Swiper
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';


//swiper1
const swiper1 = new Swiper('.swiper-1', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	//And if we need scrollbar
	//  scrollbar: {
	//   	el: '.swiper-scrollbar-1',
	//   },

	
});

//タイトル要素を取得
let swiperTitleEl = document.getElementById("swiper-title");

//文字要素を作成
let textEl = document.createTextNode("スライド１を表示しています。");

//文字要素を表示させる
swiperTitleEl.appendChild(textEl);

swiper1.on('slideChange', function () {
	
	//1.表示するテキストを準備する作業
	let curerentSliderIndex = swiper1.realIndex;
	let text = "スライド" + curerentSliderIndex + "を表示しています。"

	//2.先に追加していた要素を削除する

	textEl.remove();
	
	//3.準備したテキストをHTMLに入れる
	textEl = document.createTextNode(text);
	swiperTitleEl.appendChild(textEl);
	
	
});



//swiper2
const swiper2 = new Swiper('.swiper-2', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	
	// If we need pagination
	pagination: {
	el: '.swiper-pagination',
	
	},

	// Navigation arrows
	navigation: {
	nextEl: '.swiper-button-next',
	prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
	el: '.swiper-scrollbar',
	},

	
});

//タイトルリスト
let titleList = [
	"ブランコに乗っている女の子",
	"ブランコに乗っている男の子",
	"ご飯を食べている家族",
] 

//タイトル要素を取得
let swiperTitleEl2 = document.getElementById("swiper-title-2");

//文字要素を作成
let textEl2 = document.createTextNode(titleList[0]);

//文字要素を表示させる
swiperTitleEl2.appendChild(textEl2);

swiper2.on('slideChange', function () {
	
	//1.表示するテキストを準備する作業
	let curerentSliderIndex = swiper2.realIndex;
	let text = titleList[ curerentSliderIndex]

	//2.先に追加していた要素を削除する

	textEl2.remove();
	
	//3.準備したテキストをHTMLに入れる
	textEl2 = document.createTextNode(text);
	swiperTitleEl2.appendChild(textEl2);
	
	
});













// JustValidate
const validator = new JustValidate('#basic_form');
validator
	.addField('#basic_name', [//＃はidのこと
		{
			rule: 'required',//全てのフォームが必須であるということ
			errorMessage: '必須入力項目です。',
	
		},
		{
			rule: 'minLength',//３文字以上じゃないとだめ
			value: 3,
			errorMessage: '3文字以上で入力してください',
		},
		{
			rule: 'maxLength',//最大１５文字
			value: 15,
			errorMessage: '最大入力文字数は15文字です。',
		},
	])
	.addField('#basic_email', [
		{
			rule: 'required',
			errorMessage: '必須入力項目です。',
		},
		{
			rule: 'required',
		},
		{
			rule: 'email',
			errorMessage: '形式が正しくありません。',
		},
	])
	.addField('#basic_password', [
		{
			rule: 'required',
			errorMessage: '必須入力項目です。',
		},
		{
			rule: 'password',
			errorMessage: 'パスワードは8文字以上で入力してください。その際に数字を1文字以上含める必要があります。',
		},
	])
	.addField('#basic_age', [
		{
			rule: 'required',
			errorMessage: '必須入力項目です。',
		},
		{
			rule: 'number',
			errorMessage: '数字で入力してください。',
		},
		{
			rule: 'minNumber',
			value: 18,
			errorMessage: '18以上の数字を入力してください。',
		},
		{
			rule: 'maxNumber',
			value: 150,
			errorMessage: '18以上の数字を入力してください。',
		},
	])

	.addField('#basic_adress ' , [
		{
			rule: 'required',
			errorMessage: '必須入力項目です。',
		
			
		},
	])

	.onSuccess((event)=> {
		console.log('onSuccess called')
		console.log(event);
		console.log(event.target);
		// フォームの内容を取り出す
		let formData = new FormData(event.target);
            console.log(formData.get("name"));  //name = "name"
		console.log(formData.get("email"));
		console.log(formData.get("password"));
		console.log(formData.get("age"));
		console.log(formData.get("dress"));
	});