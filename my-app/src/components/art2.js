import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './art2.css'
import { Container} from 'react-bootstrap';

class art2 extends React.Component {
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
            const a = this.a + n * 10;
            this.x += Math.cos(a) * a * 0.5;
            this.y += Math.sin(a) * a * 0.5;
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
            const id = "canvas1"
            this.elem = document.createElement("canvas");
            graph = this.elem;
            this.elem.id= id;
            document.body.appendChild(this.elem);
            this.resize();
            return this.elem.getContext("2d");
        },
        resize() {
            this.width = this.elem.width = "800";
            this.height = this.elem.height = "500";
        },
        reset() {
            this.resize();
            ctx.fillStyle = "#2774ff";
        }
    };
    function oMousePosScaleCSS(canvas, evt) {
        let ClientRect = canvas.getBoundingClientRect(), 
            scaleX = canvas.width / ClientRect.width,
            scaleY = canvas.height / ClientRect.height; 
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

                                if(e.clientY> rect.top){
                                        if(e.clientY < rect.bottom){
                                        let m= oMousePosScaleCSS(graph,e);
                            
                                        this.x = m.x;
                                        this.y = m.y;
                                        init();
                                    }
                                
                            

                        }



                    
                    },
                    false
                );
            });
        }
    };
    // init pen
    const ctx = canvas.init();
    pointer.init(canvas);
    const perlin = new Noise(3);
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
        <Container className="artpiece">
            <p>click on canvas below to restart flow</p>
           <div ref={el => this.el = el} />
           <p>to go back to homepage click <a href="/">here</a> </p>

           </Container>
        );
    }
  }
export default art2;