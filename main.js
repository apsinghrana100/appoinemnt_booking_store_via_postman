

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
        axios.post("https://crudcrud.com/api/929af3c6fd5242fc8679ea5a6e37ad7b/bookapinmnetdetail",obj).then((res)=>{
            console.log(res);
            //showOutput(res)
          }).catch((err)=>{
            console.log(err);
          })
        console.log("suceess");
    

  displaydata(obj);
     cleardata();
}
}

////////////////////for window refresh///////////////////////////

window.addEventListener('DOMContentLoaded',(event)=>{
    console.log("i am window");
    Object.keys(axios.get("https://crudcrud.com/api/929af3c6fd5242fc8679ea5a6e37ad7b/bookapinmnetdetail/id")).forEach(key => {
                const user = JSON.parse(axios.get("https://crudcrud.com/api/929af3c6fd5242fc8679ea5a6e37ad7b/bookapinmnetdetail"))
                displaydata(user)
                console.log(`name ${user.name}`);
})});


//////////////////for display///////////////////////////////////////

// function  displaydata(obj){
    
//     const li=`<li id=${obj.email}>${obj.name}-${obj.email}
//     <button onclick=deletedata('${obj.email}')>delete</button>
//     <button onclick=editdata('${obj.name}','${obj.email}')>edit</button></li>`;
//     ul.innerHTML=ul.innerHTML+li;

// }



// //////////////////////deletedata///////////////////////////////////
// function deletedata(deleteid)
// {
//     localStorage.removeItem(deleteid);
//     removedata(deleteid);
// }



// ////////////////remove the data form the screen////////////////////////////

// function removedata(deleteid)
// {
//     let parentNode=document.getElementById('users');
//     let elementnode=document.getElementById(deleteid);
//     parentNode.removeChild(elementnode);

// }





// //////////////////////////////////updata_data////////////////////
// function editdata(name,emailid){
//     const name1=document.getElementById('name').value=name;
//     const email=document.getElementById('email').value=emailid;

//     sumbmit.value='UPDATE';
//     sumbmit.style.background='GREEN';

//     deletedata(email);
// }


// ////////////////////////clear_data//////////////////////////////////


// function cleardata(){
// const name=document.getElementById('name').value='';
// const email=document.getElementById('email').value='';

// }
