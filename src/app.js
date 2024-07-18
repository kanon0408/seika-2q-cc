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

const data3 = { 
	labels: [ 	'課題',
			'就活',
			'今日すごく暑いな',
			'早く家に帰りたいな',
			'ようやく週の半ばだ！'],
	datasets: [
		  {
		
		  data: [50,50,100,150,60],
		  borderWidth: 1
	    }
	]
};

const data4 = { 
	labels: [ 	'課題',
			'就活',
			'エアロビクス疲れたな',
			'早く家に帰りたいな',
			'明日行けば休みだ！'],
	datasets: [
		  {
		
		  data: [50,40,100,50,200],
		  borderWidth: 1
	    }
	]
};

const data5 = { 
	labels: [ 	'課題',
			'授業終わったら何しようかな',
			'明日はアルバイト',
			'楽しみにしている番組',
			'華の金曜日'],
	datasets: [
		  {
		
		  data: [50,40,50,50,200],
		  borderWidth: 1
	    }
	]
};

let chart;
function updateChart(data) {
	if (chart == null) {
		chart = new Chart(ctx, {
			type: 'pie',
			data: data
		});
	} else {
		chart.data = data;
		chart.update();
	}
}

document.getElementById('button-1').onclick = function() {
	updateChart(data1);
	
}

document.getElementById('button-2').onclick = function() {
	updateChart(data2);
}

document.getElementById('button-3').onclick = function() {
	updateChart(data3);
}

document.getElementById('button-4').onclick = function() {
	updateChart(data4);
}

document.getElementById('button-5').onclick = function() {
	updateChart(data5);
}
// document.getElementById('button-2').onclick = function() {
// new Chart(ctx, {
// 	type: 'pie',
// 	data: data2,
	
// });
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

