
var ctxVS = document.getElementById('vs').getContext('2d');
var vs = new Chart(ctxVS, {
    type: 'radar',
    data: {
        "labels": [
            "Procesadorr",
            "Camara",
            "RAM",
            "ROM",
            "Pantalla",
            "Bateria",
            "Diseño",
            "Audio"
        ],
        "datasets": [
            {
                "label": "Xiaomi Redmi Note 9 Pro",
                "backgroundColor": "#2448ff",
                "fill": true,
                "data": [
                    "8",
                    "10",
                    "6",
                    "7",
                    "5",
                    "8",
                    "9",
                    "5"
                ],
                "borderColor": "#2448ff",
                "borderWidth": "1"
            },
            {
                "label": "Samsung A70",
                "backgroundColor": "#a114ff",
                "fill": true,
                "data": [
                    "10",
                    "5",
                    "8",
                    "3",
                    "9",
                    "10",
                    "6",
                    "4"
                ],
                "borderColor": "#a114ff"
            }
        ]
    },
    options: {
        "title": {
            "display": false,
            "text": "Top 1 VS Top 2",
            "position": "bottom",
            "fullWidth": true,
            "fontColor": "#aa7942",
            "fontSize": 19
        },
        "legend": {
            "display": true,
            "fullWidth": true,
            "position": "top"
        },
        "scales": {
            "yAxes": [
                {
                    "ticks": {
                        "beginAtZero": false,
                        "display": false
                    },
                    "gridLines": {
                        "display": false,
                        "lineWidth": 2,
                        "drawOnChartArea": false,
                        "drawTicks": false,
                        "tickMarkLength": 1,
                        "offsetGridLines": false,
                        "zeroLineColor": "#942192",
                        "color": "#d6d6d6",
                        "zeroLineWidth": 2
                    },
                    "scaleLabel": {
                        "display": false,
                        "labelString": "USD in Millions"
                    },
                    "display": false
                }
            ],
            "xAxes": {
                "0": {
                    "ticks": {
                        "display": false,
                        "fontSize": 14,
                        "fontStyle": "italic"
                    },
                    "display": false,
                    "gridLines": {
                        "display": false,
                        "lineWidth": 2,
                        "drawOnChartArea": false,
                        "drawTicks": false,
                        "tickMarkLength": 12,
                        "zeroLineWidth": 2,
                        "offsetGridLines": false,
                        "color": "#942192",
                        "zeroLineColor": "#942192"
                    },
                    "scaleLabel": {
                        "fontSize": 16,
                        "display": false,
                        "fontStyle": "normal"
                    }
                }
            }
        },
        "tooltips": {
            "enabled": true,
            "mode": "label",
            "caretSize": 10,
            "backgroundColor": "#00fa92"
        }
    }
});

var ctxMensual = document.getElementById('mensual').getContext('2d');
var mensual = new Chart(ctxMensual, {
    type: 'line',
    data: {
        "labels": [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
        ],
        "datasets": [
            {
                "label": "Ventas Anuales",
                "backgroundColor": "#2eff89",
                "fill": true,
                "data": [
                    "10",
                    "30",
                    "28",
                    "27",
                    "30",
                    "19",
                    "20",
                    "30",
                    "25",
                    "30",
                    "60",
                    "45"
                ]
            }
        ]
    },
    options: {
        "title": {
            "display": false,
            "text": "Ad Revenue Comparison 2014-2015",
            "position": "bottom",
            "fullWidth": true,
            "fontColor": "#aa7942",
            "fontSize": 16
        },
        "legend": {
            "display": true,
            "fullWidth": true,
            "position": "top"
        },
        "scales": {
            "yAxes": [
                {
                    "ticks": {
                        "beginAtZero": true,
                        "display": true
                    },
                    "gridLines": {
                        "display": true,
                        "lineWidth": 2,
                        "drawOnChartArea": true,
                        "drawTicks": true,
                        "tickMarkLength": 1,
                        "offsetGridLines": true,
                        "zeroLineColor": "#942192",
                        "color": "#d6d6d6",
                        "zeroLineWidth": 2
                    },
                    "scaleLabel": {
                        "display": true,
                        "labelString": "Cantidad (Miles)"
                    },
                    "display": true
                }
            ],
            "xAxes": {
                "0": {
                    "ticks": {
                        "display": true,
                        "fontSize": 14,
                        "fontStyle": "italic"
                    },
                    "display": true,
                    "gridLines": {
                        "display": true,
                        "lineWidth": 2,
                        "drawOnChartArea": false,
                        "drawTicks": true,
                        "tickMarkLength": 12,
                        "zeroLineWidth": 2,
                        "offsetGridLines": true,
                        "color": "#000000",
                        "zeroLineColor": "#942192"
                    },
                    "scaleLabel": {
                        "fontSize": 16,
                        "display": true,
                        "fontStyle": "normal"
                    }
                }
            }
        },
        "tooltips": {
            "enabled": true,
            "mode": "label",
            "caretSize": 10,
            "backgroundColor": "#00fa92"
        }
    }
});
var ctxTop = document.getElementById('top').getContext('2d');
var top = new Chart(ctxTop, {
    type: 'bar',
    data: {
        "labels": [
            "Xiaomi Note 9 Pro",
            "Samsung A70",
            "Huawei P30 Pro",
            "Iphone SX",
            "Nokia XXL"
        ],
        "datasets": [
            {
                "label": "",
                "backgroundColor": "#f13b3b",
                "fill": true,
                "data": [
                    "1000",
                    "900",
                    "800",
                    "500",
                    "200"
                ]
            }
        ]
    },
    options: {
        "title": {
            "display": false
        },
        "legend": {
            "display": false
        },
        "scales": {
            "yAxes": [
                {
                    "ticks": {
                        "beginAtZero": true
                    }
                }
            ]
        }
    }
});
var ctxPrecio = document.getElementById('precio').getContext('2d');
var precio = new Chart(ctxPrecio, {
    type: 'line',
    data: {
        "labels": [
            "$0",
            "$100",
            "$200",
            "$300",
            "$400",
            "$500",
            "$600",
            "$700",
            "$800",
            "$900",
            "$100"
        ],
        "datasets": [
            {
                "label": "Category2",
                "backgroundColor": "",
                "fill": false,
                "data": [
                    "0",
                    "10",
                    "40",
                    "30",
                    "15",
                    "5",
                    "0",
                    "",
                    "3",
                    "",
                    "2"
                ],
                "borderColor": "#73fa79",
                "pointRadius": "10",
                "lineTension": 0,
                "pointBackgroundColor": "#008f00",
                "pointBorderColor": "#73fa79",
                "pointBorderWidth": 5
            }
        ]
    },
    options: {
        "title": {
            "display": false
        },
        "legend": {
            "display": false
        },
        "scales": {
            "yAxes": [
                {
                    "ticks": {
                        "beginAtZero": true
                    },
                    "gridLines": {
                        "display": true,
                        "lineWidth": 1,
                        "drawOnChartArea": true,
                        "color": "#000000",
                        "zeroLineColor": "#000000",
                        "zeroLineWidth": 1,
                        "drawTicks": true
                    }
                }
            ],
            "xAxes": {
                "0": {
                    "gridLines": {
                        "drawOnChartArea": false,
                        "offsetGridLines": false,
                        "zeroLineColor": "#000000",
                        "display": true,
                        "lineWidth": 2,
                        "drawTicks": true,
                        "zeroLineWidth": 2,
                        "color": "#000000"
                    },
                    "ticks": {
                        "display": true,
                        "beginAtZero": true
                    }
                }
            }
        },
        "elements": {
            "line": {
                "borderColor": "#000000",
                "lineTension": 0
            }
        }
    }
});