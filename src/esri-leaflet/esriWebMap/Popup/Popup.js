import { format } from 'date-fns';

function transformPhoneNumber(value) {
  var s2 = (""+value).replace(/\D/g, '');
  var m = s2.match(/^(\d{3})(\d{3})(\d{4})$/);
  return (!m) ? null : "(" + m[1] + ") " + m[2] + "-" + m[3];
}

function transformDate(value) {
  // console.log('date value:', value);
  return format(value, 'MM/dd/yyyy');
}

function transformDateTime(value) {
  // console.log('datetime value:', value);
  return format(value, 'MM/dd/yyyy hh:mm a');
}

function transformDecimalPlace(value) {
  var number = String(value).match(/\d+/)[0].replace(/(.)(?=(\d{3})+$)/g,'$1,');
  var label = String(value).replace(/[0-9]/g, '') || '';
  return number + ' ' + label;
}


export function createPopupContent (popupInfo, properties) {
  // console.log('popupInfo:', popupInfo);
  // console.log('popup properties:', properties);
  var r = /\{([^\]]*)\}/g;
  var titleText = '';
  var content = '';

  if (popupInfo.title !== undefined) {
    titleText = popupInfo.title;
  }

  titleText = titleText.replace(r, function (s) {
    var m = r.exec(s);
    // console.log('r:', r, 'm:', m);
    var val = properties[m[1]];
    for (var i = 0; i < popupInfo.fieldInfos.length; i++) {
      if (popupInfo.fieldInfos[i].fieldName === m[1]) {
        if (popupInfo.fieldInfos[i].format) {
          if (popupInfo.fieldInfos[i].format.dateFormat === 'shortDate'
              || popupInfo.fieldInfos[i].format.dateFormat === 'shortDateShortTime'
          ) {
            val = transformDate(properties[popupInfo.fieldInfos[i].fieldName]);
          }
        }
      }
    }
    return val;
  });

  content = '<div class="leaflet-popup-content-title text-center"><h4>' + titleText + '</h4></div><div class="leaflet-popup-content-description" style="max-height:200px;overflow:auto;">';

  var contentStart = '<div style="font-weight:bold;color:#999;margin-top:5px;word-break:break-all;">';
  var contentMiddle = '</div><p style="margin-top:0;margin-bottom:5px;word-break:break-all;">';
  var aTagStart = '<a target="_blank" href="';
  var emailTagStart = '<a href="mailto:';

  if (popupInfo.fieldInfos !== undefined) {
    for (var i = 0; i < popupInfo.fieldInfos.length; i++) {
      if (popupInfo.fieldInfos[i].visible === true) {
        if (properties[popupInfo.fieldInfos[i].fieldName] === null) {
          content += contentStart
                  + popupInfo.fieldInfos[i].label
                  + contentMiddle
                  // + aTagStart
                  // + properties[popupInfo.fieldInfos[i].fieldName]
                  + 'none'
                  // + '">'
                  // + properties[popupInfo.fieldInfos[i].fieldName]
                  + '</p>';
        // if the info is a URL
        } else if (popupInfo.fieldInfos[i].fieldName === 'URL' ||
            popupInfo.fieldInfos[i].fieldName === 'CODE_SEC_1' ||
            popupInfo.fieldInfos[i].fieldName === 'WEBSITE' ||
            popupInfo.fieldInfos[i].fieldName === 'FINAL_LINK_COPY' ||
            popupInfo.fieldInfos[i].fieldName === 'LINK' ||
            popupInfo.fieldInfos[i].fieldName === 'Permit Link' ||
            popupInfo.fieldInfos[i].fieldName === 'PermitURL' ||
            popupInfo.fieldInfos[i].fieldName.toLowerCase().includes('url') ||
            popupInfo.fieldInfos[i].fieldName.toLowerCase().includes('link') ||
            // zoning overlays:
            popupInfo.fieldInfos[i].fieldName === 'CODE_SECTION_LINK'
        ) {
          content += contentStart
                  + popupInfo.fieldInfos[i].label
                  + contentMiddle
                  + aTagStart
                  + properties[popupInfo.fieldInfos[i].fieldName]
                  + '">'
                  + properties[popupInfo.fieldInfos[i].fieldName]
                  + '</a></p>';
        // if the info is an email address
        } else if (popupInfo.fieldInfos[i].fieldName.includes('EMAIL')) {
          content += contentStart
                  + popupInfo.fieldInfos[i].label
                  + contentMiddle
                  + emailTagStart
                  + properties[popupInfo.fieldInfos[i].fieldName]
                  + '">'
                  + properties[popupInfo.fieldInfos[i].fieldName]
                  + '</a></p>';
        // if the info is a phone number
        } else if (popupInfo.fieldInfos[i].fieldName.includes('PHONE')) {
          content += contentStart
                  + popupInfo.fieldInfos[i].label
                  + contentMiddle
                  + transformPhoneNumber(properties[popupInfo.fieldInfos[i].fieldName])
                  + '</p>';
        // handle case
        } else if (popupInfo.fieldInfos[i].fieldName.includes('time')) {
          console.log('includes time');
          content += contentStart
                    + popupInfo.fieldInfos[i].label
                    + contentMiddle
                    + transformDateTime(properties[popupInfo.fieldInfos[i].fieldName])
                    + '</p>';
        // if the info is a date
        } else if (popupInfo.fieldInfos[i].fieldName.includes('DATE')) {
          console.log('includes date');
          content += contentStart
                    + popupInfo.fieldInfos[i].label
                    + contentMiddle
                    + transformDate(properties[popupInfo.fieldInfos[i].fieldName])
                    + '</p>';
        } else if (popupInfo.fieldInfos[i].format) {
          if (popupInfo.fieldInfos[i].format.dateFormat === 'shortDate'
              || popupInfo.fieldInfos[i].format.dateFormat === 'shortDateShortTime'
          ) {
            console.log('is shortDate or shortDateShortTime');
            content += contentStart
                    + popupInfo.fieldInfos[i].label
                    + contentMiddle
                    + transformDate(properties[popupInfo.fieldInfos[i].fieldName])
                    + '</p>';
          } else {
            content += contentStart
                    + popupInfo.fieldInfos[i].label
                    + contentMiddle
                    + properties[popupInfo.fieldInfos[i].fieldName]
                    + '</p>';
          }
        } else {
          content += contentStart
                  + popupInfo.fieldInfos[i].label
                  + contentMiddle
                  + properties[popupInfo.fieldInfos[i].fieldName]
                  + '</p>';
        }
      }
    }
    content += '</div>';

  } else if (popupInfo.description !== undefined) {
    // KMLLayer popup
    var descriptionText = popupInfo.description.replace(r, function (s) {
      var m = r.exec(s);
      return properties[m[1]];
    });
    content += descriptionText + '</div>';
  }

  // if (popupInfo.mediaInfos.length > 0) {
  // It does not support mediaInfos for popup contents.
  // }

  return content;
}

export var Popup = {
  createPopupContent: createPopupContent,
};

export default Popup;
