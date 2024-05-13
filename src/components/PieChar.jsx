import ReactApexChart from 'react-apexcharts';

export const PieChar = () => {
   const series = [30, 40, 35, 50, 49];
   const options = {
     chart: {
       type: 'donut', 
       height: 150 
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
        {/* <div className="w-96 h-96"> */}
          <ReactApexChart options={options} series={series} type="donut" height={200} />
        {/* </div> */}
      </div>
    );
  }