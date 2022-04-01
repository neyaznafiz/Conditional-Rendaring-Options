// conditional rendaring options

// 1. element variable

let command
if(cart.length === 0){
command = <p>please add al least one item </p>
}
else if(cart.length === 1){
    command = <p> please add more</p>
}
else{
    command = <p><small>thanks for adding item</small></p>
}

// ay command variable ta cart er moddhe dinakically boshaye dite hobe




