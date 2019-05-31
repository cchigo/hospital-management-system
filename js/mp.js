$(document).ready(function () {
//    adds a patient
    $('#form-box').submit(function (e) {
        e.preventDefault();
        let name = $('#name').val();
        let age = $('#age').val();
        let phone = $('#phone').val();
        let gender = $('#gender').val();
        let checkIn = $('#check-in').val();
        let allergies = $('#allergies').val();
        let diagnosis = $('#diagnosis').val();
        let doctorIncharge = $('#dic').val();


//sets
        let info = JSON.stringify( {
            name: name,
            age: age,
            phone: phone,
            gender: gender,
            checkIn: checkIn,
            allergies: allergies,
            diagnosis: diagnosis,
            doctorIncharge: doctorIncharge

        });
        console.log(info)
        $.ajax({
            type: 'POST',
            url: "http://localhost:3000/patient",
            contentType:'application/json',
            dataType:'json',
            data: info,
            success: function (data) {
      
            },
        
            

        });

        // $('.delete_patient').click(function () {
        //     console.log("deleted");
        // });

        $('.search').click(function () {

            console.log("edited");
        });
    });
});   

// $.ajax({
//     url: 'http://localhost:3000/patient',
//     datatype: 'json',
//     type: 'get',
//     cache: false,
//     success: function(data){
//         $(data).each(function(index, value){
//             console.log(value);
//         });
//     }
// });  
$.getJSON("http://localhost:3000/patient", function (data) {
    let patient_data = "";
    $.each(data, function (key, value) {
        patient_data += '<tr>';
        patient_data += '<td>' + value.name + '</td>';
        patient_data += '<td>' + value.age + '</td>';
        patient_data += '<td>' + value.phone + '</td>';
        patient_data += '<td>' + value.gender + '</td>';
        patient_data += '<td>' + value.checkIn + '</td>';
        patient_data += '<td>' + value.allergies + '</td>';
        patient_data += '<td>' + value.diagnosis + '</td>';
        patient_data += '<td>' + value.dr + '</td>';

        patient_data += '<td>"<button class ="delete_patient" type ="button" data-id ="'+value.id+'">'
    
       
      
        patient_data += '</tr>';
    });
    $('#patient-table').append(patient_data);


});



