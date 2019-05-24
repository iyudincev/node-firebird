var iconv = require('iconv-lite');

function calcByteLength(s, encoding) {
  if (encoding.toUpperCase() == 'UTF8')
    return Buffer.byteLength(s, encoding);
  const buf = iconv.encode(s,  encoding);
  return buf.length;
}

function writeBuffer(buffer, s, pos, len, encoding) {
  if (encoding.toUpperCase() == 'UTF8') {
    buffer.write(s, pos, len, encoding);
  }
  else {
    const buf = iconv.encode(s,  encoding);
    buf.copy(buffer, pos);
  }
}

module.exports = {
  calcByteLength,
  writeBuffer
};
