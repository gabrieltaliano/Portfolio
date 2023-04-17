import React, { useState, useEffect, useRef } from 'react'
import stack from '../stack';

let charSize = 18;
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
    }
}


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
    for (let i = 0; i < p5.height; i += charSize * 2) {
        streams.push(new Stream(p5.random(stack), i, p5));
    }
}

function reset(p5) {
    streams = [];
    createStreams(p5);
}


export default function Matrix({ width, height, className = '' }) {

    const [p5instance, setp5instance] = useState(false)

    const containerRef = useRef(null);
    const p5removal = useRef(() => { })

    useEffect(
        () => {
            const Sketch = (p5) => {
                p5.setup = () => {
                    p5.createCanvas(width, height)
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
                        s.draw()
                    });


                }
            }
            const load = async () => {
                return (await import('p5')).default
            }

            if (!window.p5) {
                load().then(p5 => {
                    window.p5 = p5
                    setp5instance(true)
                });
            }
            if (p5instance) {

                let newP5 = new window.p5(Sketch, containerRef.current)
                p5removal.current = newP5.remove
            }

            return () => {
                p5removal.current()
            }
        },
        [ p5instance, width, height]
    );
    return (
        <div className={className} ref={containerRef}></div>
    )
}