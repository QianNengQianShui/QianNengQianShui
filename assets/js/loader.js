document.body.onload = function(){
    setTimeout(function() {
      const preloader = document.getElementById('av-loader');
      if( !preloader.classList.contains('done') )
      {
        preloader.classList.add('done');
      }
    }, 1000)
  }