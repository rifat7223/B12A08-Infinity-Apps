const getStoreInstall=()=>{
const storeInstallStr= localStorage.getItem("install");
if(storeInstallStr){
  const storeInstallData =JSON.parse(storeInstallStr)
  return storeInstallData;


}
else{
    return[]
}
}




const addStoreInstall=(id)=>{
const storeInstallData=getStoreInstall();
if(storeInstallData.includes(id)){
    alert("already exist")
}
else{
    storeInstallData.push(id);
    const data =JSON.stringify(storeInstallData);
    localStorage.setItem("install",data)
}
}
export{addStoreInstall,getStoreInstall}