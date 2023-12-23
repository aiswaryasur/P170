AFRAME.registerComponent('marker-handler',{
    init:async function(){
        this.el.addEventListener('markerFound',()=>{
            console.log('Marker-is-found')
            this.handlerMarkerFound()
        });

        this.el.addEventListener('markerLost',()=>{
            console.log('Marker-is-Lost')
            this.handleMarkerLost()
        })
    },

    handlerMarkerFound:function(){
        var button = document.getElementById('button-div');
        button.style.display = 'flex'

        var orderButton = document.getElementById('order-button')
        var ratingButton = document.getElementById('order-summary')

        orderButton.addEventListener('click',function(){
            swal({
                icon:'success',
                title : 'THANKS FOR ORDER!',
                text:'Your order will be delivered soon to your house'
            })
        })

        ratingButton.addEventListener('click',function(){
            swal({
                icon:'warning',
                title : 'ORDER SUMMARY',
                text:'Work in progress'
            })
        })
    },

    handleMarkerLost:function(){
        var button = document.getElementById('button-div');
        button.style.display = 'none'
    }
})