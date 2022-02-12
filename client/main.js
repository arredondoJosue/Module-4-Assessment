// const baseURL = `http://localhost:4000/api`
const bmList = document.querySelector('select')
const submit = document.querySelector('button[id="submitSIDButton"]')
const edit = document.querySelector('button[id="submitBMButton"]')


const errCallback = err => console.log(err.response.data);



// const createSIDs = body => axios.post(`http://localhost:4000/api/raw`).then(displaySID).catch(errCallback)





document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
};


document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
};



//----------------------\\

document.querySelector("select").onchange = function () {
  axios.get("http://localhost:4000/api/bm/")
      .then(function (res) {
        const data = res.data
        let options = document.querySelector('select').value
        // console.log(options);

        for(let i = 0; i < data.length; i++){
          let {BMType} = res.data[i]
          let {SIDs} = res.data[i]

          if(BMType === options){
            let sample1 = document.querySelector('p')
            sample1.textContent = SIDs
            return //console.log(SIDs)
          }
        }

        
      });
};

// document.getElementById("submitBMButton").onclick = function () {
//   axios.put("http://localhost:4000/api/bm-edit/")
//       .then(function (response) {
//         console.log('worked')
//       });
// };


// document.getElementById("submitBMButton").onclick = function () {
//   axios.delete("http://localhost:4000/api/bm-delete/", )
//       .then(function (response) {
//         console.log('worked')
//       });
// };

const editBM = (body) => {
  // let radio = 'Edit'
  // let draftRadio = document.getElementById('bmToEdit')

  if(document.getElementById('edit').checked === true){
    const send = (body) => {
      axios.put("http://localhost:4000/api/bm-edit/", body)
      .then(function (res) {
        console.log('Hit response')
        let x = res.data
        // console.log(x);

        let options = document.querySelector('select').value


        for(let i = 0; res.data.length; i++){
          let {BMType} = res.data[i]
          let {SIDs} = res.data[i]

          if(BMType === options){
            let sample1 = document.querySelector('p')
            sample1.textContent = SIDs
            return //console.log(SIDs)
          }
        }
      })
    }
    send(body)
  } else if(document.getElementById('delete').checked === true){

    console.log('before axios.delete');
    

    const del = (body) => {
      let {BMType} = body
      // BMType = String(BMType)

      axios.delete("http://localhost:4000/api/bm-delete/", {data: {BMType: BMType}})
      .then(function (res) {
        // console.log('worked')
        console.log(res.data)

        let options = document.querySelector('select').value


        for(let i = 0; res.data.length; i++){
          let {BMType} = res.data[i]
          let {SIDs} = res.data[i]

          if(BMType === options){
            let sample1 = document.querySelector('p')
            sample1.textContent = SIDs
            return //console.log(SIDs)
          }
        }

      })
    }
    del(body)
  }

}

const bmSubmit = () => {

  const bmSelected = document.querySelector('select').value
  let strBM = document.getElementById('bmToEdit').value
  console.log(strBM);
  console.log(bmSelected);
  // console.log(document.getElementById('bmToEdit'))
  // console.log(strBM);


  let bodyObj = {
    BMType: bmSelected,
    sids: strBM
  }

  console.log(bodyObj);

  editBM(bodyObj)
}

edit.addEventListener('click', bmSubmit)

//---------------------\\


// document.getElementById("submitSIDButton").onclick = function (body) {
//   axios.post("http://localhost:4000/api/raw/", displayBM)
//       .then(res => {
//         // const data = response.data;
//         // data.replace(' ', `','`)
//         // console.log(data);
//         console.log(res.data);
//         textBox(res.data)

//         console.log('worked')
//       });
// };

// let x = document.querySelector('textarea').value

const submitSIDButton = body => axios.post("http://localhost:4000/api/raw/", body)
  .then(res => {
  // let options = document.querySelector('textarea').value
  // console.log(options)

  // console.log('worked')
  
  let data = res.data
  // console.log(data);

  let clickNum = 1
  
  for(let i = 0; i < data.length; i++){
    let {sids, id} = res.data[i]

    // console.log(sids);
    // console.log(clickNum);

    if(clickNum === i){
      console.log(clickNum);
      clickNum++
      console.log(clickNum);

      let sample2 = document.getElementById('p2')
      sample2.textContent = sids
      console.log('success')
    } else {
      console.log('Clicks not equal to i');
    }
  }

  clickNum++



})

const textBox = () => {
  let str = document.querySelector('textarea')

  let bodyObj = {
    sids: str.value
  }

  submitSIDButton(bodyObj)

}

submit.addEventListener('click', textBox)