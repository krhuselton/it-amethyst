$(index.html).ready(function() {
$("#formvalidation").validate({
rules: {
firstname : {
required: true,
},
middleinitial: {
required: false,
},
lastname : {
required: true,
},
email : {
required: true,
email:true,
},
sex : {
required: true,
},
birthday : {
required: true,
},
height : {
required: true,
min:12,
max:120,
},
weight : {
required: true,
min:10,
max:500,
},
phone : {
required: true,
},
maritalstatus : {
required: true,
},
address : {
required: true,
},
city : {
required: true,
},
state : {
required: true,
},
zip : {
required: true,
min:5,
max:5,
},
meds : {
required: true,
},
list : {
required: false,
},
});