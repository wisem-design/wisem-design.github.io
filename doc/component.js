$(document).ready(function() {
            $("#header").load("../common/header.html")
            $("#footer").load("../common/footer.html")
            $("#tab").load("../common/component.html .tab")
            $("#card-product-list").load("../common/component.html .card-product-list")
            $("#card-product-grid").load("../common/component.html .card-product-grid")
            $("#pagenation").load("../common/component.html .pagenation")
            $("#product-subtitle").load("../common/component.html .product-subtitle")
            /* id 지정을 통해서도 가능합니다. 
             $("#header").load("header.html #navbar")
             */
        });
