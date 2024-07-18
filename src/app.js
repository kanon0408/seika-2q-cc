import Chart from 'chart.js/auto';
let ctx = document.getElementById('myChart');
//一つ目の円グラフ
const data1 = { 
	labels: [	'課題',
			'今日の夕飯何にしよう？',
			'次の日の授業',
			'就職'],
	datasets: [
		  {
		 
		  data: [500,50,100,20],
		  borderWidth: 1
	    }
	]
  };

const data2 = { 
	labels: [ 	'課題',
			'就活',
			'アイス食べたいな',
			'明日の授業'],
	datasets: [
		  {
		
		  data: [200,50,100,10],
		  borderWidth: 1
	    }
	]
  };

document.getElementById('button-1').onclick = function() {
new Chart(ctx, {
	type: 'pie',
	data: data1
});
	window.alert("月曜日");
}

document.getElementById('button-2').onclick = function() {
new Chart(ctx, {
	type: 'pie',
	data: data2
});
	window.alert("火曜日");
}
// new Chart(ctx, {
// 		type: 'pie',
// 		data: {
// 			labels: [ 	'Red',
// 					'Blue',
// 					'Yellow'],
// 			datasets: [{
// 			data: [500,
// 				50,
// 				100],
// 			borderWidth: 1
// 			}]
// 		},
// 	});

	
// 	new Chart(ctx, {
// 		type: 'pie',
// 		data: {
// 			labels: [ 	'Blue',
// 					'Red',
// 					'Yellow'],
// 			datasets: [{
			
// 			data: [200,
// 				50,
// 				100],
// 			borderWidth: 1
// 			}]
// 		},
		
// 	});

