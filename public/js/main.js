const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');


 const datahide  = document.querySelector('.middle_layer');

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
        alert('Empty Field');
      city_name.innerText='plz enter  name before search';
      datahide.classList.add('data_hide');
      
     
    }
    else
    {
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=192fc6c8371138e283fcdc7bdbdb18d1`;
            const response  = await fetch(url);
            const data=await response.json();
            console.log(data);
            const arrData=[data];
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            temp_real_val.innerText=arrData[0].main.temp;
            const temp_status=arrData[0].weather[0].main;
            temp_status.innerText=arrData[0].main.temp;

            datahide.classList.remove('data_hide');
        }
        catch{
        
            city_name.innerText='plz enter  correct name';
            datahide.classList.add('data_hide');
            
        }
    }
}
    submitBtn.addEventListener('click',getInfo);
