jQuery("#simulation")
  .on("keydown.jim", ".t-1013fc1b-6684-40ae-8bff-fc867e749de4 .keydown", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#t-Input_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("focusin", ".t-1013fc1b-6684-40ae-8bff-fc867e749de4 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-1013fc1b-6684-40ae-8bff-fc867e749de4 #t-Input_5": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#0088CC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#0088CC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#0088CC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#0088CC",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "7px"
                      },
                      "expressions": {
                        "width": "Math.max(216 - 1 - 1 - 7 - 2, 0) + 'px'",
                        "height": "Math.max(31 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-1013fc1b-6684-40ae-8bff-fc867e749de4 #t-Input_6": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#0088CC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#0088CC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#0088CC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#0088CC",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "7px"
                      },
                      "expressions": {
                        "width": "Math.max(216 - 1 - 1 - 7 - 2, 0) + 'px'",
                        "height": "Math.max(31 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".t-1013fc1b-6684-40ae-8bff-fc867e749de4 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#t-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-1013fc1b-6684-40ae-8bff-fc867e749de4 #t-Input_5": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "7px"
                      },
                      "expressions": {
                        "width": "Math.max(216 - 1 - 1 - 7 - 2, 0) + 'px'",
                        "height": "Math.max(31 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-1013fc1b-6684-40ae-8bff-fc867e749de4 #t-Input_6": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "3px 3px 3px 3px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "7px"
                      },
                      "expressions": {
                        "width": "Math.max(216 - 1 - 1 - 7 - 2, 0) + 'px'",
                        "height": "Math.max(31 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".t-1013fc1b-6684-40ae-8bff-fc867e749de4 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Button_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-1013fc1b-6684-40ae-8bff-fc867e749de4 #t-Button_7": {
                      "attributes": {
                        "background-color": "#286090",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#204D74",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#204D74",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#204D74",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#204D74",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px"
                      },
                      "expressions": {
                        "width": "Math.max(85 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(31 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  },{
                    "#t-1013fc1b-6684-40ae-8bff-fc867e749de4 #t-Button_7": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#204D74",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#204D74",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#204D74",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#204D74",
                        "border-radius": "5px 5px 5px 5px",
                        "padding-top": "3px",
                        "padding-right": "3px",
                        "padding-bottom": "3px",
                        "padding-left": "3px",
                        "-pie-background": "#286090",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(85 - 1 - 1 - 3 - 3, 0) + 'px'",
                        "height": "Math.max(31 - 1 - 1 - 3 - 3, 0) + 'px'"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#t-Boton_login") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#t-1013fc1b-6684-40ae-8bff-fc867e749de4 #t-Boton_login": {
                      "attributes": {
                        "background-color": "#7E9AB8",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#t-1013fc1b-6684-40ae-8bff-fc867e749de4 #t-Boton_login": {
                      "attributes-ie": {
                        "-pie-background": "#7E9AB8",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".t-1013fc1b-6684-40ae-8bff-fc867e749de4 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#t-Button_7")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#t-Boton_login")) {
      jEvent.undoCases(jFirer);
    }
  });