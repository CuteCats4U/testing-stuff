Sentry.init({
  dsn: 'https://5d0ad1da55464d9e822c593677e76435@o139230.ingest.sentry.io/1232413',
  debug: true,
  release: '2.0',
});

document.getElementById("color").focus();

$(document).keydown(function(evt) {

  if (evt.keyCode == 13) {
    $("body").css("background-color", $("#color").val());
  }
  someHorribleError();
});

