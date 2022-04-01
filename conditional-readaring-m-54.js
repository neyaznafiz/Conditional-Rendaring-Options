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


// 2. ternary operator (condation ? true : false)

{cart.length !== 4 ? <p>keep adding</p> : <button> remove all </button>}


// 3. && (and) operator / shorthand

{cart.length === 3 && <div>
<p>trigonal</p> 
<p>tin jon ke ki gift diba</p>
</div>
}


// 4.  || (or) operator

{cart.length === 0 || <p>YAY! you are buing</p>}



// ay operator gula ta cart er moddhe dinakically boshaye dite hobe
