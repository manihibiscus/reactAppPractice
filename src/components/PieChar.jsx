import ReactApexChart from 'react-apexcharts';

export const PieChar = () => {
   // Example data for donut chart
   const series = [30, 40, 35, 50, 49];
   const options = {
     chart: {
       type: 'donut', // Set the chart type to 'donut' for a donut chart
       height: 350 // Set the height of the chart
     },
     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
     plotOptions: {
       pie: {
         donut: {
           size: '70%' // Set the size of the donut hole
         }
       }
     }
   };
  
    
  
    return (
        <div className="flex justify-center items-center">
        <div className="w-96 h-96">
          <ReactApexChart options={options} series={series} type="donut" height={200} />
        </div>
      </div>
    );
  }