$(function(){

    $('.range-content__tabs .tab, .settings__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
          $('.range-content__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
          $('.range-content__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
          $(this).addClass('active');
          $('#'+id).addClass('active-tab').fadeIn();
          return false;
    });

    $('.sale-content__tabs .tab, .settings__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
          $('.sale-content__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
          $('.sale-content__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
          $(this).addClass('active');
          $('#'+id).addClass('active-tab').fadeIn();
          return false;
    });

});




