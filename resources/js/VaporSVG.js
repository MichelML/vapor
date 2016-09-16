/* SVG Enum */

function svgWrapper(svgString, svgClass, spanClass, title, attr) {
    svgClass = svgClass || '';
    spanClass = spanClass || '';
    title = title || '';
    attr = attr || {};

    if (s.contains(svgString, '#coveo-icon-')) {
        var svgNameFormatted = formatSvgName(svgString.replace('#coveo-icon-', ''));
        if (!_.isUndefined(svg[svgNameFormatted])) {
            return svg[svgNameFormatted].render(svgClass, spanClass, title, attr);
        }
    }

    var titleToDisplay = title ? 'title="' + title + '"' : '';
    var spanClassAttribute = spanClass ? 'class="' + spanClass + '"' : '';
    return '<span ' + spanClassAttribute + ' ' + titleToDisplay + '>' + svg(svgString, svgClass, attr) + '</span>';
};

function svgFromName(svgName, svgClass, spanClass, title) {
    svgClass = svgClass || '';
    spanClass = spanClass || '';
    title = title || '';

    if (!_.isUndefined(JsAdmin.svg[svgName])) {
        return svg[svgName].render(svgClass, spanClass, title);
    }
    return '';
};

function svg(svgString, svgClass, attr) {
    svgClass = svgClass || '';
    attr = attr || {};

    if (svgString) {
        var svgHTML = $($.parseHTML(svgString));
        svgHTML[0].setAttribute('class', svgClass);
        _.mapObject(attr, function(value, key) {
            svgHTML[0].setAttribute(key, value);
        });
        return svgHTML.prop('outerHTML');
    }
    return '<svg class="' + svgClass + '"></svg>';
}

function formatSvgName(svgName) {
    return s.camelize(s.humanize(svgName), true);
}

var VaporSVG = {};
VaporSVG.SVG = svgWrapper;
VaporSVG.svgFromName = svgFromName;
VaporSVG.svg = svgEnum;
