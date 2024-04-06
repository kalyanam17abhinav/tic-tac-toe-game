let boxes=document.querySelectorAll(".button_box");
let reset=document.querySelector("#reset");
let newbtn=document.querySelector("#new_btn");
let msg_cont=document.querySelector(".msg_cont");
let msg=document.querySelector("#msg");

let turn_O = true;

// let arr=[[1,2,3],[4,5],[6,7,8,9]];

// console.log(arr);

const win_pattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]    
];

boxes.forEach((b)=>{
    b.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turn_O){
            b.innerText="X";
            turn_O = false;
            b.style.backgroundColor="black";
            
        } else {
            b.innerText="O";
            turn_O = true;
            b.style.backgroundColor="white";
        }
        b.disabled=true;

        check_winner();
    })
});

const check_winner=()=>{
    for(let pat of win_pattern){
        // console.log(pat[0],pat[1],pat[2]);
        // console.log(
        //     boxes[pat[0]].innerText,
        //     boxes[pat[1]].innerText,
        //     boxes[pat[2]].innerText
        // );

        let pos0=boxes[pat[0]].innerText;
        let pos1=boxes[pat[1]].innerText;
        let pos2=boxes[pat[2]].innerText;

        // console.log(pos0);
        // console.log(pos1);
        // console.log(pos2);

        if(pos0!="" && pos1!="" && pos2!=""){
            if(pos0==pos1 && pos1==pos2){
                // console.log("winner is",pos1);
                disable_game();
                show_winner(pos1);
            }
        }
    }
}

const show_winner=(win)=>{
    msg.innerText=`Hurray🥳, '${win}' won`;
    msg_cont.classList.remove("hide");
    disable_game();
    // setTimeout(()=>{
    //     document.body.style.visibility="hidden";
    // },1000);
    // document.body.style.visibility="hidden";
}

const reset_game=()=>{
    turn_O=true;
    enable_game();
    msg_cont.classList.add("hide");
    
}

const disable_game=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enable_game=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
        box.style.backgroundColor="#FFD500";
    }
}

newbtn.addEventListener("click",reset_game);
reset.addEventListener("click",reset_game);