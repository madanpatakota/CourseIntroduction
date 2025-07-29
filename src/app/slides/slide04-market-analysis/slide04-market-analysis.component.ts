import { Component, OnInit } from '@angular/core';
declare var AOS: any;

@Component({
  selector: 'app-slide04-market-analysis',
  templateUrl: './slide04-market-analysis.component.html',
  styleUrls: ['./slide04-market-analysis.component.css']
})
export class Slide04MarketAnalysisComponent implements OnInit{

   ngOnInit(): void {
    AOS.init({ once: true });
  }

//  pieChartData: ChartData<'pie', number[], string> = {
//   labels: ['Full Stack', 'Cloud', 'Others'],
//   datasets: [
//     {
//       data: [60, 25, 15],
//       backgroundColor: ['#4CAF50', '#2196F3', '#FFC107'],
//       hoverOffset: 8
//     }
//   ]
// };


//   pieChartOptions: ChartOptions<'pie'> = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'bottom',
//         labels: {
//           font: {
//             size: 14
//           }
//         }
//       },
//       tooltip: {
//         enabled: true
//       }
//     }
//   };

//   pieChartType: 'pie' = 'pie';
}
