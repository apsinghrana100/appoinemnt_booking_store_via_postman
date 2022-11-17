

const form=document.getElementById('my-form"');   //form

const sumbmit=document.querySelector('.btn');  //submit_btn

const ul=document.getElementById('users'); ///ul

sumbmit.addEventListener('click',storedata); //// 



//////////////////////////

function storedata(e){
    e.preventDefault();
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    if(sumbmit.value==='UPDATE')
    {
        sumbmit.value='Submit';
        sumbmit.style.background='#333';
    }

     if(name!=='' || email!=='')
     {
        
        const obj={
            name,
            email
        };
        // axios.post("https://crudcrud.com/api/f926f97655744c3a8a92d538bddec55d/bookapinmnetdetail",obj).then((res)=>{
        //     console.log(res);
        //     //showOutput(res)
        //   }).catch((err)=>{
        //     console.log(err);
        //   })
        // console.log("suceess");

        axios({
          method:'post',
          url:"https://crudcrud.com/api/f926f97655744c3a8a92d538bddec55d/bookapinmnetdetail",
          data:obj
           }).then((res)=>{
              console.log(res);
            
              //showOutput(res)
            }).catch((err)=>{
              console.log(err);
            })
    

            displaydata(obj);
             cleardata();
      }
}

////////////////////for window refresh///////////////////////////

window.addEventListener('DOMContentLoaded',(event)=>{
    console.log("i am window");
    axios.get("https://crudcrud.com/api/f926f97655744c3a8a92d538bddec55d/bookapinmnetdetail")
    .then((Response)=>{
      console.log(Response);
      for(var i=0;i<Response.data.length;i++)
      {
        displaydata(Response.data[i]);
      }
    }).catch((error)=>{
      console.log(error)
    });

                
});


//////////////////for display///////////////////////////////////////

function  displaydata(obj){
    
    const li=`<li id=${obj._id}>${obj.name}-${obj.email}
    <button onclick=deletedata('${obj._id}')>delete</button>
    <button onclick=editdata('${obj._id}','${obj.name}','${obj.email}')>edit</button></li>`;
    ul.innerHTML=ul.innerHTML+li;

}



//////////////////////deletedata///////////////////////////////////
function deletedata(deleteid)
{
   // localStorage.removeItem(deleteid);

    axios.delete(`https://crudcrud.com/api/f926f97655744c3a8a92d538bddec55d/bookapinmnetdetail/${deleteid}`)
    .then(()=>{
      removedata(deleteid);
    }).catch((err)=>{
        console.log(err);
    })
   

}



////////////////remove the data form the screen////////////////////////////

function removedata(deleteid)
{
    let parentNode=document.getElementById('users');
    let elementnode=document.getElementById(deleteid);
    parentNode.removeChild(elementnode);

}





//////////////////////////////////updata_data////////////////////
function editdata(id,name,emailid){
  const name1=document.getElementById('name').value=name;
    const email=document.getElementById('email').value=emailid;
  axios({
      method:'put',
      url:`https://crudcrud.com/api/f926f97655744c3a8a92d538bddec55d/bookapinmnetdetail/${id}`,
        data:{
          "name":name1,
          "email":email
        }
  }).then((Response)=>{
    console.log(respone);
  }).catch((err)=>{
    console.log(err);
  });
    

    sumbmit.value='UPDATE';
    sumbmit.style.background='GREEN';

}


////////////////////////clear_data//////////////////////////////////


function cleardata(){
const name=document.getElementById('name').value='';
const email=document.getElementById('email').value='';

}
