
jQuery(document).ready( function($){
    
    var updateCSS = function(){ jQuery("#plb_your_style_css").val( editor.getSession().getValue() ); }
    jQuery("#save-custom-css-form").submit( updateCSS );
    
});

var editor = ace.edit("customCss");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/css");

jQuery(document).ready(function($){
   

    jQuery(".drop_down_image").click(function(){
        
    });

    // $('#view ').addAttr()
    // tabs
    jQuery('.tab_button').click(function(){
        jQuery(".tab_content").removeClass("active").eq(jQuery(this).index()).addClass("active");
        jQuery('.tab_button').removeClass("active").eq(jQuery(this).index()).addClass("active");
    });
    
    // media upload
    var custom_uploader1;
    var custom_uploader2;
 
    jQuery('#upload-button_like').on( 'click' , function(e) {
 	
        e.preventDefault();
 
        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader1) {
            custom_uploader1.open();
            return;
        }
 
       //Extend the wp.media object
		custom_uploader1 = wp.media.frames.file_frame = wp.media({
			 	title: 'Choose Image',
			button: {
			 	text: 'Choose Image'
			},
			multiple: false
		});
 
        //When a file is selected, grab the URL and set it as the text field's value
        custom_uploader1.on('select', function() {
            attachment = custom_uploader1.state().get('selection').first().toJSON();
            jQuery('#upload_image_like').val(attachment.url);
            jQuery('.wrapp_image_admin_like').attr('src',attachment.url);
        });
 
        //Open the uploader dialog
        custom_uploader1.open();
 
    });

    jQuery('#remove_button_like').on('click', function(e){
        e.preventDefault();
        jQuery('#upload_image_like').val('');
        jQuery('.wrapp_image_admin_like').attr('src','');
        jQuery('.weather-css-setting').submit();
        return;
    });

    // 

    jQuery('#upload-button_dislike').on( 'click' , function(e) {
    
        e.preventDefault();
 
        //If the uploader object has already been created, reopen the dialog
        if (custom_uploader2) {
            custom_uploader2.open();
            return;
        }
       //Extend the wp.media object
        custom_uploader2 = wp.media.frames.file_frame = wp.media({
                title: 'Choose Image',
            button: {
                text: 'Choose Image'
            },
            multiple: false
        });
        //When a file is selected, grab the URL and set it as the text field's value
        custom_uploader2.on('select', function() {
            attachment = custom_uploader2.state().get('selection').first().toJSON();
            jQuery('#upload_image_dislike').val(attachment.url);
            jQuery('.wrapp_image_admin_dislike').attr('src',attachment.url);
        });
        //Open the uploader dialog
        custom_uploader2.open();
    });

    jQuery('#remove_button_dislike').on('click', function(e){
        e.preventDefault();
        jQuery('#upload_image_dislike').val('');
        jQuery('.wrapp_image_admin_dislike').attr('src','');
        jQuery('.weather-css-setting').submit();
        return;
    });
    

    jQuery('.js-dropdown li').on('click', function () {
        var current_image = jQuery(this).data('number');
        var target = jQuery(this).index();
        jQuery('#view option').removeAttr('selected').eq(target).attr('selected', 'selected');
        var pathUrl = jQuery('.dropdown-toggle img').attr('src').slice(0, -5);
        jQuery('.dropdown-toggle img').attr('src', pathUrl + current_image +'.png');
    })


    jQuery('.dropdown-toggle').click(function(e){
      jQuery(this).next('.dropdown').toggle();
      e.preventDefault();
    });

    jQuery(document).click(function(e) {
      var target = e.target;
      if (!jQuery(target).is('.dropdown-toggle') && !jQuery(target).parents().is('.dropdown-toggle')) {
        jQuery('.dropdown').hide();
      }
    });

});