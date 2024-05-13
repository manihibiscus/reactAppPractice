import ReactApexChart from 'react-apexcharts';

export const Chart = () => {
  // Example data for chart
  const series1 = [{
    name: 'Sales',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  }];
  const options1 = {
    chart: {
      type: 'bar',
      height: 350 // Set the height of the chart

    },
    xaxis: {
      title: {
        text: 'Months' // Y-axis title
      },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
    yaxis: {
      title: {
        text: 'Sales' // Y-axis title
      }
    }
  };

  

  return (
    <div className="chart-container">
      <h1 className='font-bold text-gray-400'>Sales Report</h1>
      <ReactApexChart options={options1} series={series1} type="bar" height={200} />
    </div>
  );
}
