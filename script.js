

  $(document).ready(function () {
    $('.menu-toggle').click(function(){
         $(".nav").toggleClass("mobile-nav");
         $(this).toggleClass("is-active");
      });

      $('.nav-item').click(function(){
        $(".nav").toggleClass("mobile-nav");
        if( $(".menu-toggle").hasClass('is-active') )
          $(".menu-toggle").toggleClass("is-active");
     });
}); 