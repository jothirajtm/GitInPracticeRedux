(function constructRequestDetail() {
  var partialXpathExpression0 =
    '//*[@id="ctl00_ContentPlaceHolderMain_uxRequests_ctl00__';

  if (typeof counter === "undefined") {
    // Variable is not defined, inject it
    var script = document.createElement("script");
    script.textContent = "var counter = 0;"; // Set the value of the counter variable
    document.body.appendChild(script);
  } else {
    // Variable is already defined increment it
    counter += 1;
  }

  var xpathExpression0 = partialXpathExpression0.concat(counter, '"]//td');

  // Evaluate the XPath expression
  var result = document.evaluate(
    xpathExpression0,
    document,
    null,
    XPathResult.ORDERED_NODE_ITERATOR_TYPE,
    null
  );

  // Initialize an array to store the text content of td elements
  var tdContents = [];

  // Iterate through the result set
  var node;
  while ((node = result.iterateNext())) {
    // Extract the text content of each td element and push it into the array
    tdContents.push(node.textContent.trim());
  }
  var requestDetail = tdContents.join("||");

  var xpathExpression1 = xpathExpression0.concat("[1]/a/@href");
  var href = document.evaluate(
    xpathExpression1,
    document,
    null,
    XPathResult.STRING_TYPE,
    null
  ).stringValue;

  // Extract the RequestId value from the href attribute
  var requestId = href.split("=")[1];

  return requestDetail.concat('||', requestId);
})();
