
var output_name = document.getElementById("name-output")
var output_age = document.getElementById("age-output")
var input_age = document.getElementById("age")
var input_name = document.getElementById("name")
var res_btn = document.getElementById("res-btn")
var remarks = document.getElementById("remark")

res_btn.addEventListener("click", function() {
    output_name.value = ""
    output_age.value = ""
    remarks.textContent = ""
})

document.getElementById("eval-btn").addEventListener("click", function() {
    output_name.value = input_name.value
    output_age.value = input_age.value;
    if (Number(output_age.value) <= 17) {
        // minor
        remarks.textContent = "You are a minor!"
    }

    else {
        remarks.textContent = "You are an adult!"
    }
})