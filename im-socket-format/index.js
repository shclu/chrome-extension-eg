const transfer1 = (iniStr) => {
  const regStr1 = iniStr.replace(new RegExp("\\\\\"","gm"), "\"")
  const regStr2 = regStr1.replace(new RegExp("\\\\\\\\\"","gm"), "\\\"")
  const start = regStr2.indexOf('{"eventType":');
  const end = regStr2.indexOf('\\u0000"');
  const split = regStr2.slice(start, end);
  let res;
  try {
    res = JSON.parse(split);
  } catch (e) {
    console.log("err", e)
  }
  return res
}

const button = document.getElementById("transfer button");
button.onclick = () => {
  const initMsg = document.getElementById("source data").value;
  const formatMsg = transfer1(initMsg);
  document.getElementById("target data").value = formatMsg ? JSON.stringify(formatMsg, null, 4) : "请检查IM消息格式是否正确";
}
