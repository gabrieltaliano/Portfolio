import React, { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
// import p5 from 'p5'
const langs = [
    "Gabriel Taliano",
    "ReactJs",
    "Node",
    "Css",
    "Tailwinds",
    "Firebase",
    "GCP",
    "SysAdmin",
    "Sqlite",
    "IIS",
    "Figma",
    "SCCM",
    "Esxi",
    "Technical Aptitude",
    "Jira",
    "Redux",
    "FCP",
    "Lightroom",
    "Photoshop",
    "PLC",
    "ITIL Service Management",
    "Information Technology Service Management",
    "ISS",
    "Server Management",
    "Storage Services",
    "Windows Server",
    "Vsphere",
    "Virtualization",
    "VMware",
    "Unix",
    "Powershell",
    "Scripting",
    "VBA",
    "Git",
    "Socket",
    "Node.JS",
    "Typescript",
    "Firebase",
    "Sass",
    "CSS",
    "HTML5",
    "JavaScript",
    "Js",
    "React",
    "Macros",
    "Algolia",
    "Jest",
    "Redis",
    "Linux",
    "DHCP",
    "DNS",
    "Arduino",
    "PIC",
    "ITSM Remedy",
    "Field Support",
    "Help Desk",
];

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
})


export function Matrix1(props, state) {
    let colors = ['blue', 'green', 'red'];

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 400).parent(canvasParentRef)
    };

    const draw = (p5) => {
        let y = 0;
        let direction = '^';

        p5.background(0);
        p5.fill(255, y * 1.3, 0);
        p5.ellipse(p5.width / 2, y, 50);
        if (y > p5.height) direction = '';
        if (y < 0) {
            direction = '^';
        }
        if (direction === '^') y += 8;
        else y -= 4;
    };
    // const draw = p5 => {
    //     p5.background(255, 130, 20)
    //     p5.ellipse(100, 100, 100)
    //     p5.ellipse(300, 100, 100)
    // }
    return (
        // <Anime delay={anime.stagger(100)} scale={[0.1, 0.9]}>
        //     {colors.map((color, i) => <div key={i} className={`bg-blue-500 w-10 h-10`}>{color}</div>)}
        // </Anime>
        // <Anime easing="easeOutElastic"
        //     loop={true}
        //     duration={1000}
        //     direction="alternate"
        //     delay={(el, index) => index * 240}
        //     translateX='13rem'
        //     scale={[.75, .9]}>
        //     <div className="bg-blue-500 w-5 h-5" />
        //     <div className="bg-green-500 w-5 h-5" />
        //     <div className="bg-red-500 w-5 h-5" />
        // </Anime>
        <Sketch setup={setup} draw={draw} />
    )
}



export class Matrix2 extends React.Component {
    y = 0;
    direction = '^';

    setup = (p5, parentRef) => {
        p5.createCanvas(200, 200).parent(parentRef);
    };

    draw = (p5) => {
        p5.background(0);
        p5.fill(255, this.y * 1.3, 0);
        p5.ellipse(p5.width / 2, this.y, 50);
        if (this.y > p5.height) this.direction = '';
        if (this.y < 0) {
            this.direction = '^';
        }
        if (this.direction === '^') this.y += 8;
        else this.y -= 4;
    };

    render() {
        return (

            <Sketch setup={this.setup} draw={this.draw} />

        );
    }
}






//! -------------------------------



let charSize = 18;
let fallRate = charSize / 2;
let streams;

class Char {
    constructor(value, x, y, speed, p5, shift) {
        this.shift = shift
        this.p5 = p5
        this.value = value;
        this.x = x + shift;
        this.y = y;
        this.speed = speed;
    }

    draw() {

        const flick = this.p5.random(100);
        // 10 percent chance of flickering a number instead
        if (flick < 5) {
            this.p5.fill(120, 30, 100);
            this.p5.text(Math.round(this.p5.random(9)), this.x, this.y);
        } else {
            this.p5.text(this.value, this.x, this.y);
        }        // fall down
        this.x = this.x > (this.p5.width) ? 0 : this.x + this.speed;
        if (flick < 10) {
            // this.y = p5.random(2)-1>0?this.y+1:this.y-1
        }
    }
}

// -------------------------------------
class Stream {
    constructor(text, x, p5) {
        this.size = Math.round(Math.random() * 12) + 14;
        this.p5 = p5
        const shift = +Math.random() * p5.width
        const y = p5.random(text.length);
        const speed = p5.random(2.4, 10);
        this.chars = [];
        for (let i = 0; i <= text.length - 1; i++) {
            this.chars.unshift(
                new Char(text[i], (y - text.length + i) * charSize, x, speed, this.p5, shift)
            );
        }

    }

    draw() {
        this.p5.textSize(this.size)

        this.p5.fill(120, 100, 100);
        this.chars.forEach((c, i) => {
            // 30 percent chance of lit tail
            const lit = this.p5.random(100);
            if (lit < 30) {
                if (i === this.chars.length - 1) {
                    this.p5.fill(120, 30, 100);
                } else {
                    this.p5.fill(120, 100, 90);
                }
            }
            c.draw();
        });
    }
}

function createStreams(p5) {
    // create p5.random streams from langs that span the width
    console.log(p5.width);
    console.log(p5.height);
    for (let i = 0; i < p5.height; i += charSize * 2) {
        streams.push(new Stream(p5.random(langs), i, p5));
    }
}





function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
    background(0);
    reset();
}

function reset(p5) {
    streams = [];
    createStreams(p5);
}
export class Matrix3OLD extends React.Component {

    setup(p5, canvasParentRef, width, height) {
        p5.createCanvas(width, height).parent(canvasParentRef);
        p5.background(255, 130, 20)
        reset(p5);
        p5.frameRate(20);
        p5.colorMode(p5.HSB);
        p5.noStroke();
        p5.textSize(charSize);
        p5.textFont("monospace");
        p5.background(0);

    }

    draw(p5) {
        p5.background(0, 0.4);

        streams.forEach((s) => {
            // window.alert('s')
            s.draw()
        });

    }


    render() {
        return (
            <Sketch setup={(p5, canvasParentRef) => this.setup(p5, canvasParentRef, this.props.width, this.props.height)} draw={this.draw} />
        )
    }
}
export function Matrix3({ width, height }) {

    function setup(p5, canvasParentRef, width, height) {
        p5.createCanvas(width, height).parent(canvasParentRef);
        p5.background(255, 130, 20)
        reset(p5);
        p5.frameRate(20);
        p5.colorMode(p5.HSB);
        p5.noStroke();
        p5.textSize(charSize);
        p5.textFont("monospace");
        p5.background(0);

    }

    function draw(p5) {
        p5.background(0, 0.4);

        streams.forEach((s) => {
            // window.alert('s')
            s.draw()
        });

    }

    // useEffect(() => {
    //     reset(window.p5)
    // }, [width, height])

    useEffect(() => {
        console.log({ p5: window.p5 })
    }, [width, height])

    return (
        <>
            <button onClick={() => { reset(window.p5.start()) }}>reset</button>
            <Sketch setup={(p5, canvasParentRef) => setup(p5, canvasParentRef, width, height)} draw={draw} />
        </>
    )
}


export function Matrix4({ width, height, className = '' }) {


    const [count, setCount] = useState(0);
    const [p5instance, setp5instance] = useState(false)

    const containerRef = useRef(null);
    const p5removal = useRef(() => { })

    useEffect(
        () => {
            const Sketch = (p5) => {
                p5.setup = () => {
                    p5.createCanvas(width, height)
                    // p5.background(255, 130, 20)
                    reset(p5);
                    p5.frameRate(20);
                    p5.colorMode(p5.HSB);
                    p5.noStroke();
                    p5.textSize(charSize);
                    p5.textFont("monospace");
                    p5.background(0);
                }

                p5.draw = () => {
                    p5.background(0, 0.4);

                    streams.forEach((s) => {
                        // window.alert('s')
                        s.draw()
                    });

                    // p5.background(count);
                }
            }
            const load = async () => {
                return (await import('p5')).default
            }

            if (!window.p5) {
                load().then(p5 => {
                    window.p5 = p5
                    setp5instance(true)
                    console.log(p5)

                });
            }
            if (p5instance) {

                let newP5 = new window.p5(Sketch, containerRef.current)
                // newP5.start()
                p5removal.current = newP5.remove
            }

            return () => {
                console.log('removing out')
                p5removal.current()
            }
        },
        // This empty list tells React that this effect never needs to get re-rendered!
        [count, p5instance, width, height]
    );
    return (
        <div className={className} ref={containerRef}></div>
    )
}