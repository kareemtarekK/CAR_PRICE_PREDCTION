const form = document.querySelector('form');

form.onsubmit = (e)=>{
    e.preventDefault();
    const DataForm = new FormData(form);
    const Entires_Data = Object.fromEntries(DataForm);
    fetch('https://anwartarek.pythonanywhere.com/predict',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
       body:JSON.stringify([Entires_Data]), 
    }).then(response=> response.json())
      .then(data => {
        document.querySelector('div').textContent = 'Price: ';
        document.querySelector('div').textContent+=Math.round(data['Prediction'][0]);
      })  
      .catch(err => console.log(err))
}