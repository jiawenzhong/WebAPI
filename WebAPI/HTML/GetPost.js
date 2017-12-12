$(function () {
    var $students = $('#students');
    var $name = $('#studName');
    $.ajax({
        type: 'GET',
        url: 'http://localhost:51255/api/students',
        successs: function (student) {
            $.each(student, function (i, student) {
                $students.append('<li> ID: ' + student.id + '. Name: ' + student.name + '</li>');
            });
        },
        error: function () {
            alert('error loading orders');
        }
    });

    $('#add-student').on('click', function () {
        var student = {
            name = $name.val(),
        };

        $.ajax({
            type: 'POST',
            url: 'http://localhost:51255/api/students',
            data: student,
            success: function (newOrder) {
                $students.append('<li> ID: ' + student.id + '. Name: ' + student.name + '</li>');
            },
            error: function () {
                alert('error saving order');
            }
        })
    });
});