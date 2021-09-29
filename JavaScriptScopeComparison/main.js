$('.popModal').click(function(){
    $('#exampleModal').modal('show');
  })


// Declaring global Variables
var var_scope_global = "var";
let let_scope_global = "let";
const const_scope_global = "const";

function reset() {
    var tables = 3
    for(i = 1; i <= tables; i++){
        document.getElementById("var"+i).innerHTML = "";
        document.getElementById("let"+i).innerHTML = "";
        document.getElementById("const"+i).innerHTML = "";
    }
}

function populateTable(scopeType) {
    // Declaring function variables
    var var_scope_function = "var";
    let let_scope_function = "let";
    const const_scope_function = "const";

    // Populating the first table row
    document.getElementById("var1").innerHTML = "Var is "+scopeType;
    document.getElementById("let1").innerHTML = "Let is "+scopeType;
    document.getElementById("const1").innerHTML = "Const is "+scopeType;

    if(scopeType == "global") {

        // Populating the second table row
        try {
            if(var_scope_global){
                var_scope_global = "Reassign Var";
                document.getElementById("var2").innerHTML = "Var is Reassigned";
            }
        }
        catch (err) {
            document.getElementById("var2").innerHTML = err.message;
        }
        try {
            if(let_scope_global){
                let_scope_global = "Reassign Let";
                document.getElementById("let2").innerHTML = "Let is Reassigned";
            }
        }
        catch (err) {
            document.getElementById("let2").innerHTML = err.message;
        }
        try {
            if(const_scope_global){
                const_scope_global = "Reassign Const";
                document.getElementById("const2").innerHTML = "Const is Reassigned";
            }
        }
        catch (err) {
            document.getElementById("const2").innerHTML = err.message;
        }
        
        } else if (scopeType == "function") {
        
        try {
            if(var_scope_function){
                var_scope_function = "Reassign Var";
                document.getElementById("var2").innerHTML = "Var is Reassigned";
            }
        }
        catch (err) {
            document.getElementById("var2").innerHTML = err.message;
        }
        try {
            if(let_scope_function){
                let_scope_function = "Reassign Let";
                document.getElementById("let2").innerHTML = "Let is Reassigned";
            }
            console.log(let_scope_function)
        }
        catch (err) {
            document.getElementById("let2").innerHTML = err.message;
        }
        try {
            if(const_scope_function){
                const_scope_function = "Reassign Const";
                document.getElementById("const2").innerHTML = "Const is Reassigned";
            }
        }
        catch (err) {
            document.getElementById("const2").innerHTML = err.message;
        }

    }
    
    testGlobal(scopeType);
}


// Populating the third table row
function testGlobal(scopeType) {
    if(scopeType == "global") {

        try {
            if(var_scope_global){
                var_scope_global = "Reassign Var";
                document.getElementById("var3").innerHTML = "Var is Reassigned";
            }
        }
        catch (err) {
            document.getElementById("var3").innerHTML = err.message;
        }
        try {
            if(let_scope_global){
                let_scope_global = "Reassign Let";
                document.getElementById("let3").innerHTML = "Let is Reassigned";
            }
        }
        catch (err) {
            document.getElementById("let3").innerHTML = err.message;
        }
        try {
            if(const_scope_global){
                const_scope_global = "Reassign Const";
                document.getElementById("const3").innerHTML = "Const is Reassigned";
            }
        }
        catch (err) {
            document.getElementById("const3").innerHTML = err.message;
        }

    } else if (scopeType == "function") {
        
        try {
            if(var_scope_function){
                var_scope_function = "Reassign Var";
                document.getElementById("var3").innerHTML = "Var is Reassigned";
            }
        }
        catch (err) {
            document.getElementById("var3").innerHTML = err.message;
        }
        try {
            if(let_scope_function){
                let_scope_function = "Reassign Let";
                document.getElementById("let3").innerHTML = "Let is Reassigned";
            }
            console.log(let_scope_function)
        }
        catch (err) {
            document.getElementById("let3").innerHTML = err.message;
        }
        try {
            if(const_scope_function){
                const_scope_function = "Reassign Const";
                document.getElementById("const3").innerHTML = "Const is Reassigned";
            }
        }
        catch (err) {
            document.getElementById("const3").innerHTML = err.message;
        }

    }
}
