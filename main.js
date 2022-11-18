

const form=document.getElementById('my-form"');   //form

const sumbmit=document.querySelector('.btn');  //submit_btn

const ul=document.getElementById('users'); ///ul

sumbmit.addEventListener('click',storedata); //// 

let id;

//////////////////////////

function storedata(e){
    e.preventDefault();
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    if(sumbmit.value==='UPDATE')
    {

              const data={
                "name":name,
                "email":email
              }
              console.log()
        axios.put(`https://crudcrud.com/api/aad32d87ef1144bf8ad8dd3d919651f5/bookapinmnetdetail/${id}`,data)
        .then((Response)=>{
          console.log(Response);
          displaydata(data);
             cleardata();
        }).catch((err)=>{
          console.log(err);
        });

        sumbmit.value='Submit';
        sumbmit.style.background='#333';
    }
    else
    {

    
     if(name!=='' || email!=='')
     {
        
        const obj={
            name,
            email
        };
        // axios.post("https://crudcrud.com/api/aad32d87ef1144bf8ad8dd3d919651f5/bookapinmnetdetail",obj).then((res)=>{
        //     console.log(res);
        //     //showOutput(res)
        //   }).catch((err)=>{
        //     console.log(err);
        //   })
        // console.log("suceess");

        axios({
          method:'post',
          url:"https://crudcrud.com/api/aad32d87ef1144bf8ad8dd3d919651f5/bookapinmnetdetail",
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
}

////////////////////for window refresh///////////////////////////

window.addEventListener('DOMContentLoaded',(event)=>{
    console.log("i am window");
    axios.get("https://crudcrud.com/api/aad32d87ef1144bf8ad8dd3d919651f5/bookapinmnetdetail")
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

    axios.delete(`https://crudcrud.com/api/aad32d87ef1144bf8ad8dd3d919651f5/bookapinmnetdetail/${deleteid}`)
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
function editdata(user_id,name,emailid){
  const name1=document.getElementById('name').value=name;
    const email=document.getElementById('email').value=emailid;
    id=user_id;
  // axios({
  //     method:'put',
  //     url:`https://crudcrud.com/api/aad32d87ef1144bf8ad8dd3d919651f5/bookapinmnetdetail/${id}`,
  //     const data={
  //         "name":name1,
  //         "email":email
  //       }
  //       console.log()
  // axios.put(`https://crudcrud.com/api/aad32d87ef1144bf8ad8dd3d919651f5/bookapinmnetdetail/${id}`,data)
  // .then((Response)=>{
  //   console.log(Response);
  // }).catch((err)=>{
  //   console.log(err);
  // });

  removedata(user_id);
    

    sumbmit.value='UPDATE';
    sumbmit.style.background='GREEN';

}


////////////////////////clear_data//////////////////////////////////


function cleardata(){
const name=document.getElementById('name').value='';
const email=document.getElementById('email').value='';

}
