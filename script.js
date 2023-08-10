// 天気情報をリクエストする処理の追記 ""の中は取得したAPIキー
const API_KEY = "48a95292a40ed49ce59956b2abbcaff6"

$(function(){
  $('#btn').on('click',function(){
//入力された都市名でWebAPIに天気情報をリクエスト
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
      dataType : 'jsonp',
    }).done(function(data){
      // .done()は通信成功した時の処理
      // 位置
      $('#place').text(data.name);
      // 最高気温
      $('#temp_max').text(data.main.temp_max);
      // 最低気温
      $('#temp_min').text(data.main.temp_min);
      // 湿度
      $('#humidity').text(data.main.humidity);
      // 風速
      $('#speed').text(data.wind.speed);
      // 天気
      $('#weather').text(data.weather[0].main);
      // 天気アイコン
      $('#img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
    }).fail(function(data){
      // .fail()は通信失敗した時の処理
      alert('通信に失敗しました。');
    });
  });
});

// $.ajax()は、Ajaxを実装するメソッド。()内にオプション（パラメータ）も設定可。
// 今回の場合は、urlとdataTypeの2つを設定している。

// url:では、APIにリクエストするURLを指定する。
// $('#cityname').val()では、#citynameの値を受け取り、URLを結合させている。
// val()は、HTMLのvalue属性を取得するメソッド

// dataTypeでは、レスポンスとして取得したいデータの型を指定する。
// 今回はJSONで受け取りたいので、dataType:'jsonp',と記述する。