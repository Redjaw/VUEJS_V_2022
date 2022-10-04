<template>
	<canvas id="myChart"></canvas>
</template>

<script>
import { Chart, registerables } from 'chart.js'
export default ({
  name: "stocks",
  data() {	
	return{
		myChart: {},
		acme: [12, 19, 3, 5, 2, 3],
		global: [78, 2, 4, 5, 6, 7]
	}
  },
  mounted() {
	Chart.register(...registerables)
	this.createChart()
  },
  methods: {
	returnDays(daysNumber){
		let days = [...Array(daysNumber)]
		days = days.map((item,index)=> {
			return 'Giorno '+ (index+1)
		})
		return days
	},
	createChart(){
		var ctx = document.getElementById('myChart').getContext('2d');
		this.myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: this.returnDays(this.acme.length),
				datasets: [{
					label: 'ACME Inc.',
					backgroundColor: 'rgba(255, 99, 132, 0.2)',
					borderColor: 'rgba(255, 99, 132, 1)',
					data: this.acme,
					borderWidth: 1
				},{
					label: 'Global Inc.',
					backgroundColor: 'rgba(54, 162, 235, 0.2)',
					borderColor: 'rgba(54, 162, 235, 1)',
					data: this.global,
					borderWidth: 1
				}]
			},
		});
	}
  }
});
</script>