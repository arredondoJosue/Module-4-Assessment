const baseURL = `http://localhost:4000/api`
const bmList = document.querySelector('select')

const errCallback = err => console.log(err.response.data);



const createSIDs = body => axios.post(`http://localhost:4000/api/raw`, body).then(displaySID).catch(errCallback)





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

// document.getElementById("options").onclick = function () {
//   axios.get("http://localhost:4000/api/options/")
//       .then(function (response) {
//         const data = response.data;
//       });
// };

document.getElementById("submitSIDButton").onclick = function () {
  axios.get("http://localhost:4000/api/raw/")
      .then(function (response) {
        const data = response.data;
        // data.replace(' ', `','`)
        console.log(data);
      });
};


function submitHandler(e) {
  e.preventDefault()

  let pastedSIDs = document.querySelector('#options')
  let select = document.querySelector('#options')


  let bodyObj = {
    select: select.value,
    sids: pastedSIDs.textContent
  }

  createSIDs(bodyObj)

  select.value = '1'
  sids.textContent = ''
}

bmList.addEventListener('')