$("#time_length").inputmask('decimal',{rightAlign:false} );

var VideoClass = function () {
    var editVideo = function () {
        var form = $('#form_video_edit');

        $('#save_video_language_butt').click(function (e) {
            e.preventDefault();

            form.submit();
        });

        form.validate({
            errorElement: 'span', //default input error message container
            errorClass: 'help-block help-block-error', // default input error message class
            focusInvalid: false, // do not focus the last invalid input
            ignore: "",  // validate all fields including form hidden input
            rules: {
                title: {
                    required: true
                },
                description: {
                    required: true
                },
            },
            errorPlacement: function (error, element) { // render error placement for each input type
            },
            highlight: function (element) { // hightlight error inputs
                $(element)
                    .closest('.form-group').addClass('has-error'); // set error class to the control group
            },
            unhighlight: function (element) { // revert the change done by hightlight
                $(element)
                    .closest('.form-group').removeClass('has-error'); // set error class to the control group
            },
            success: function (label) {
                label
                    .closest('.form-group').removeClass('has-error'); // set success class to the control group
            }
        });
    }

    return {
        // main function to initiate the module
        init: function () {
            editVideo();
        }
    };
}();

jQuery(document).ready(function() {
    VideoClass.init();
});