import ReactApexChart from 'react-apexcharts';

export const Chart = () => {
  // Example data for chart
  // const series1 = [{
  //   name: 'Sales',
  //   data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  // }];
  const series1 =[{
    name:'Branch 1',
    data:[12,23,56,85,65,85],
    color:'#dd0'
  },
  {
    name:'Branch 2',
    data:[86,96,54,25,63],
    color:'#ff00a0'
  },
  {
    name:'Branch 3',
    data:[17,55,63,21,12],
    color:'#ff0000'
  }]
  const options1 = {
    chart: {
      type: 'bar',
      height: 350 

    },
    xaxis: {
      title: {
        text: 'Months'
      },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    yaxis: {
      title: {
        text: 'Sales Percentage'
      }
    },
    dataLabels:{
      formatter:(val)=>{
        return `${val}%`
      },
      style:{
        fontSize:10,
        color:['#3d9ee9']
      }
    }
    
  };

  

  return (
    <div className="chart-container">
      <h1 className='font-bold text-gray-400'>Sales Report</h1>
      <ReactApexChart 
      options={options1} 
      series={series1} 
      type="bar" 
      height={200} 
      
      />
    </div>
  );
}
