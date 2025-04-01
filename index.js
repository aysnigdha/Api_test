 // API for get requests
 const agent = window.Agent;
 const GETCallButton = document.getElementById('GET');
 const POSTCallButton = document.getElementById('POST');
 const init = async () => {
  async function getData(url = "https://jsonplaceholder.typicode.com/posts",data={}) {
  const res = await fetch(url);
  const jsonData = await res.json();
  device.textContent = JSON.stringify(jsonData);
  console.log('Got onResponse', JSON.stringify(jsonData));
  }
   // API for post requests
 async function postData(url = "https://jsonplaceholder.typicode.com/posts",data={}) {
    const response = await fetch(url,{
  method: 'POST',
  body: JSON.stringify({
    title: 'testing',
    body: 'the query is good',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});
 const jsonD = await response.json();
 device.textContent = JSON.stringify(jsonD);
 console.log('Got onResponse', JSON.stringify(jsonD));
}
 GETCallButton.onclick = () => getData();
 POSTCallButton.onclick = () => postData();
};
init();
