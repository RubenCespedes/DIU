(function(window, undefined) {
  var dictionary = {
    "d5565209-964b-4364-a964-07770e2a0bf7": "Evento",
    "8c97bda1-22c9-488a-904e-56c3e312af2e": "Agenda",
    "07c1d29e-2986-438c-9476-a8c3d483cd49": "Contactanos",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Index",
    "2b21382b-dd15-40d8-843a-fe046dcc6450": "Conferencias y exposiciones",
    "ca9f820f-e335-4497-9253-5cc1cd753aa3": "Talleres",
    "7fce5091-7b34-428b-b288-71c41d8c5a31": "Acerca de",
    "9a6e06df-fb4d-485c-a928-c8c70bd5c45f": "960 grid - 12 columns_1",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "1013fc1b-6684-40ae-8bff-fc867e749de4": "Template",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);