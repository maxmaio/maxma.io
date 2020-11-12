import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from'../styles/art1.module.css'
import {Container} from 'reactstrap';

class art1 extends React.Component {
    componentDidMount() {
      this.drawArt();
    }
 
drawArt(){
    let graph;
    class Noise {
        constructor(octaves = 1) {
            this.p = new Uint8Array(512);
            this.octaves = octaves;
            this.init();
        }
        init() {
            for (let i = 0; i < 512; ++i) {
                this.p[i] = Math.random() * 256;
            }
        }
        lerp(t, a, b) {
            return a + t * (b - a);
        }
        grad2d(i, x, y) {
            const v = (i & 1) === 0 ? x : y;
            return (i & 2) === 0 ? -v : v;
        }
        noise2d(x2d, y2d) {
            const X = Math.floor(x2d) & 255;
            const Y = Math.floor(y2d) & 255;
            const x = x2d - Math.floor(x2d);
            const y = y2d - Math.floor(y2d);
            const fx = (3 - 2 * x) * x * x;
            const fy = (3 - 2 * y) * y * y;
            const p0 = this.p[X] + Y;
            const p1 = this.p[X + 1] + Y;
            return this.lerp(
                fy,
                this.lerp(
                    fx,
                    this.grad2d(this.p[p0], x, y),
                    this.grad2d(this.p[p1], x - 1, y)
                ),
                this.lerp(
                    fx,
                    this.grad2d(this.p[p0 + 1], x, y - 1),
                    this.grad2d(this.p[p1 + 1], x - 1, y - 1)
                )
            );
        }
        noise(x, y) {
            let e = 1,
                k = 1,
                s = 0;
            for (let i = 0; i < this.octaves; ++i) {
                e *= 0.5;
                s += e * (1 + this.noise2d(k * x, k * y)) / 2;
                k *= 2;
            }
            return s;
        }
    }
    // Particles
    class Particle {
        constructor(x, y, a) {
            this.x = x;
            this.y = y;
            this.a = a;
        }
        move() {
            const n = perlin.noise(this.x * 0.01, this.y * 0.01);
            const a = this.a + n * 16;
            this.x += Math.cos(a);
            this.y += Math.sin(a);
            ctx.fillRect(this.x, this.y, 0.75, 0.75);
            if (
                this.x < 0 ||
                this.x > canvas.width ||
                this.y < 0 ||
                this.y > canvas.height
            ) {
                particles.delete(this);
            }
        }
    }
    // init canvas
    const canvas = {
        init() {
            const id = "canvas1";
            this.elem = document.createElement("canvas");
            this.elem.id= id;
            this.elem.className = styles.canvas1;
            graph = this.elem;
            document.body.appendChild(this.elem);
            this.resize();
            return this.elem.getContext("2d");
        },
        resize() {
            this.width = this.elem.width = "1100";
            this.height = this.elem.height = "825";
        },
        reset() {
            this.resize();
            ctx.fillStyle = "#000000";
        }
    };
    function oMousePosScaleCSS(canvas, evt) {
        let ClientRect = canvas.getBoundingClientRect();


        let scaleX = canvas.width / ClientRect.width;
        let scaleY = canvas.height / ClientRect.height; 
            return {
            x: (evt.clientX - ClientRect.left) * scaleX, 
            y: (evt.clientY - ClientRect.top) * scaleY 
        }
      }
    // init pointer
    const pointer = {
        init(canvas) {
            this.x = canvas.width * 0.5;
            this.y = canvas.height * 0.5;
            var rect = graph.getBoundingClientRect();
            ["mousedown", "touchstart"].forEach((event, touch) => {
                document.addEventListener(
                    event,
                    e => {
                        let m;
                        if(e.clientY> rect.top){
                                if(e.clientY < rect.bottom){
                                    if(document.body.clientWidth<600){
                                        m= oMousePosScaleCSS(graph,e);
                                        this.x = m.x;
                                        this.y = m.y;
                                        init();
                                    }
                                    else if(e.clientX<rect.right){
                                        if(e.clientX > rect.left){
                                            m= oMousePosScaleCSS(graph,e); 

                                            this.x = m.x;
                                            this.y = m.y;
                                            init();                                                   
                                        }
                                    }
                    

                            }
                        
                    

                        }
                    },
                    false
                );
            });
        }
    };
    // init pen
    
    let canvasSize = document.body.clientWidth;
    let newWidth;
    let newHeight;
    if (canvasSize > 600){
        let tmp = 600;
        newWidth = tmp;
        newHeight = newWidth/1.75;
    }
    else{
        newWidth = canvasSize;
        newHeight = newWidth/1.75;
    }
    let stringWidth = newWidth.toString();
    let stringHeight = newHeight.toString();
    let px = "px";
    stringWidth = stringWidth + px;
    stringHeight = stringHeight+ px;
    const ctx = canvas.init();
    document.getElementById('canvas1').style.width =stringWidth;
    document.getElementById('canvas1').style.height =stringHeight;
    document.getElementById('canvas1').style.paddingLeft ="36px";
    document.getElementById('canvas1').style.paddingRight ="36px";
    document.body.style = "background-color: #f6f9fc;";
    

    pointer.init(canvas);
    const perlin = new Noise(8);
    const particles = new Set();
    // start new
    const init = () => {
        particles.clear();
        canvas.reset();
        perlin.init();
        for (let a = 0; a < 2 * Math.PI; a += Math.PI / 720) {
            particles.add(new Particle(pointer.x, pointer.y, a));
        }
    };
    // move and draw particles
    const run = () => {
        requestAnimationFrame(run);
        for (const p of particles) {
            p.move();
        }
    };
    init();
    run();
}
    
    render() {
      return(
        <Container className={styles.container}>
        <Container className={styles.text}>
            <h5>click on canvas below to interact with drawing</h5>
            <p>the algorithm does not allow any of the lines to collide</p>
           <p>to go back to homepage click <a href="/">here</a> </p>
        </Container>  
        </Container>
        );
    }
  }
export default art1;