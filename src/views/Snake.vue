<template>
  <canvas id="gc" width="400" height="400"></canvas>
</template>
<script>
  export default {
    data() {
      return {
        canvas: {},
        ctx: {},
        p:{ x:10, y:10,},
        gs:20,
        tc:20,
        a: { x:15, y:15 },
        v: { x:0, y:0 },
        trail: [],
        tail: 5
      }
    },
    methods: {
      game() {
        this.p.x += this.v.x
        this.p.y += this.v.y

        if(this.p.x < 0) {
          this.p.x= this.tc - 1
        }
        if(this.p.x > this.tc - 1){
          this.p.x = 0
        }

        if(this.p.y < 0) {
          this.p.y= this.tc - 1
        }

        if(this.p.x > this.tc - 1){
          this.p.y = 0
        }

        this.ctx.fillStyle="black"
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)

        this.ctx.fillStyle = 'lime'
        for(let i=0; i < this.trail.length; i++) {
          this.ctx.fillRect(this.trail[i].x * this.gs,
                            this.trail[i].y * this.gs,
                            this.gs-2, this.gs-2)
          if(this.trail[i].x === this.p.x && this.trail[i].y === this.p.y )
            this.tail = 5
        }

        this.trail.push( { x:this.p.x, y:this.p.y} )
        while(this.trail.length > this.tail) {
          this.trail.shift()
        }

        if(this.a.x == this.p.x && this.a.y == this.p.y ) {
          this.tail++
          this.a.x = Math.floor(Math.random() * this.tc)
          this.a.y = Math.floor(Math.random() * this.tc)
        }

        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.a.x*this.gs, this.a.y*this.gs,this.gs-2, this.gs-2)
      },
      keypush(evt) {
        switch(evt.keyCode) {
        case 37:
            this.v.x=-1;this.v.y=0;
            break;
        case 38:
            this.v.x=0;this.v.y=-1;
            break;
        case 39:
            this.v.x=1;this.v.y=0;
            break;
        case 40:
            this.v.x=0;this.v.y=1;
            break;
        }
      }
    }
    ,
    mounted() {
      this.canvas =  document.getElementById('gc')
      this.ctx = this.canvas.getContext('2d')
      document.addEventListener('keydown',this.keypush)
      setInterval(this.game, 1000/15);
    }
  }
</script>