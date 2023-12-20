chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action == "readText") {
        var selectedText = window.getSelection().toString(); // Метод возвращает выделенный текст

        // Создаем объект SpeechSynthesisUtterance
        var speechUtterance = new SpeechSynthesisUtterance(selectedText);

        // Произносим выделенный текст
        speechSynthesis.speak(speechUtterance);
      }
    }
  );
c
