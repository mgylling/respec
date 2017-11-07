
//adds the IMS default header elements

export function run(conf, doc, cb) {
  var abstract = doc.getElementById('abstract');
  abstract.parentElement.removeChild(abstract);
  cb();
}


