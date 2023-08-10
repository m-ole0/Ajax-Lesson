$(function(){
  $('.menu-trigger').on('click', function(event){
    $(this).toggleClass('active')
// .toggleClass()は、指定されているclass（ここではactive）をトグル処理するメソッド
//トグル処理では、該当のclass属性がある場合にはclassが削除され、ない場合にはclassが追加されます。
    $('sp-menu').fadeToggle();
    event.preventDefault();
  });
});