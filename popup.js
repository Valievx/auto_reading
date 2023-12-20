// Ждет, пока DOM-дерево полностью загрузится (событие 'DOMContentLoaded').
// Получает ссылку на кнопку с идентификатором 'playBtn'.
document.addEventListener('DOMContentLoaded', function() { 
  var highlightButton = document.getElementById('playBtn');

  // Устанавливает обработчик события 'click' на эту кнопку.
  // При клике на кнопку выполняется функция, которая делает запрос к API браузера Chrome, 
  // чтобы получить информацию о текущей вкладке (активной и в текущем окне).
  // Затем отправляет сообщение с действием 'readText' на контент-скрипт в этой вкладке.
  highlightButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'readText'});
    });
  });
});
 
