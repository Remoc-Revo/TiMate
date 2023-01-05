import React from "react";

export default function Home(){

    function updateTime(){
        var now=new Date();
        var hours=now.getHours();
        var minutes=now.getMinutes();
        var seconds=now.getSeconds();
    
        var currentTime=hours+" : "+minutes+" : "+seconds;
    
        document.getElementById('digitalClock').innerHTML=currentTime;
    }
    
    setInterval(updateTime,1000);

    return(
        <div id="main-body">
            <img id='main-background' class="stretch" src={require("../img/vidar_meth_store.png")}/>
            
            <div class="center">
                <div class="page-title">
                    <img  id='profile-img' src={require('../img/itsMe.png')} />
                    <h1 >TiMate</h1>
                </div>
                <h1 id="digitalClock"></h1>
            </div>

            <div  class="bottom">
                <ul id="main-menu">
                    <li><a href="colors.html">View All Colors in the planet</a></li>
                    <li><a href="./matchPatterns.html" id="match-patterns">Match Patterns</a></li>
                    <li><a href="./stuff_I_hate.html">Stuff I hate</a></li>
                </ul>
            
            </div>
        </div>
    )
}