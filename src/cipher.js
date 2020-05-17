window.cipher = {
  encode: function (displace, text) {
    let array = text.split('');
    let encrypted = '';
    array.forEach(function (element) {
      let index = element.charCodeAt(0);
      if ((index > 64 && index < 91) || (index > 96 && index < 123)) {
        let x = (index < 91) ? 65 : 97;
        let nextIndex = (index - x + displace) % 26 + x;
        encrypted += String.fromCharCode(nextIndex);
      } else {
        encrypted += element;
      }
    });
    return encrypted;
  },
  decode: function (displace, text) {
    let array = text.split('');
    let encrypted = '';
    array.forEach(function (element) {
      let index = element.charCodeAt(0);
      if ((index > 64 && index < 91) || (index > 96 && index < 123)) {
        let x = (index < 91) ? 90 : 122;
        let nextIndex = x - (x - index + displace) % 26;
        encrypted += String.fromCharCode(nextIndex);
      } else {
        encrypted += element;
      }
    });
    return encrypted;
  },
  createCipherWithOffset(offset) {
    return {
      encode(string) {
        return cipher.encode(offset, string);
      },
      decode(string) {
        return cipher.decode(offset, string);
      }
    };
  }
};
