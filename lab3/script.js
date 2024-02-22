const url = "https://www.boredapi.com/api/activity";

const activity = document.querySelector("#activity")
const participants = document.querySelector("#participants")
const price = document.querySelector("#price")
const type = document.querySelector("#type")

const title = document.querySelector("#h1");
title.innerHTML = "Tip of the Day" 

const act = document.querySelector("#activity");


async function getData(){

    const resp = await fetch(url);
    //console.log(resp);
    const respData = await resp.json();
    //console.log(respData);

    activity.innerHTML = respData.activity
    participants.innerHTML = respData.participants
    price.innerHTML = respData.price
    type.innerHTML = respData.type

}

getData();



