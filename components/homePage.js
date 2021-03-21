import { render } from 'react-dom'
import React, { useState, useMemo, useRef } from 'react'
import * as THREE from 'three'
import * as meshline from 'threejs-meshline'
import { extend, Canvas, useFrame, useThree } from 'react-three-fiber'
import {Nav,  NavItem, NavLink} from 'reactstrap';
import Image from 'next/image'
import styles from "../styles/homePage.module.css"

extend(meshline)

function Fatline({ curve, width, color, speed }) {
  const material = useRef()
  useFrame(() => (material.current.uniforms.dashOffset.value -= speed))
  return (
    <mesh>
      <meshLine attach="geometry" vertices={curve} />
      <meshLineMaterial attach="material" ref={material} transparent depthTest={false} lineWidth={width} color={color} dashArray={0.1} dashRatio={0.4} />
    </mesh>
  )
}

function Lines({ count, colors, setLinesRendered}) {
  const lines = useMemo(
    () =>
      new Array(count).fill().map(() => {
        const pos = new THREE.Vector3(10 - Math.random() * 20, 10 - Math.random() * 20, 10 - Math.random() * 20)
        const points = new Array(30).fill().map(() => pos.add(new THREE.Vector3(4 - Math.random() * 8, 4 - Math.random() * 8, 2 - Math.random() * 4)).clone())
        const curve = new THREE.CatmullRomCurve3(points).getPoints(1000)
        return {
          color: colors[parseInt(colors.length * Math.random())],
          width: Math.max(0.03, 0.1 * Math.random()),
          speed: Math.max(0.00005, 0.0001 * Math.random()),
          curve
        }
      }),
    [colors, count]
  )
  setLinesRendered(true);
  return lines.map((props, index) => <Fatline key={index} {...props} />)
}

function Rig({ mouse }) {
  const { camera } = useThree()
  useFrame(() => {
    camera.position.x += (mouse.current[0] / 50 - camera.position.x) * 0.05
    camera.position.y += (-mouse.current[1] / 50 - camera.position.y) * 0.05
    camera.lookAt(0, 0, 0)
  })
  return null
}

function App() {
  const mouse = useRef([0, 0])
  const [linesRendered, setLinesRendered] = useState(false);
  return (
    <main className={styles.main}>     
    <div className={styles.top}>
    <Canvas 
      gl={{ antialias: true }}
      camera={{ position: [0, 0, 10], fov: 25 }}
      onMouseMove={e => (mouse.current = [e.clientX - window.innerWidth / 2, e.clientY - window.innerHeight / 2])}>
      <Lines count={20} colors={['#7a73ff', '#80e9ff', '#e0feff', '#fec959', '#9487ff']} setLinesRendered={setLinesRendered} />
      <Rig mouse={mouse} />
    </Canvas>
    </div>
   
    {linesRendered && (
        <div className={styles.center}>
        <div className={styles.bio}>
        <Image 
            src="https://www.gravatar.com/avatar/4934318e81ec19904134280eb795b7ad?s=600"
            alt="avatar" 
            width= {100}
            height= {100}
            />
        <h4>Max Maio</h4>
        <p>Software Engineer in CA</p>
        </div>
        <div >
        <Nav className={styles.nav}>
            <NavItem>
            <NavLink href="/" active= {true}>Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/projects">Projects</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="/MaxMaio_Resume.pdf" target="_blank">Resume</NavLink>
            </NavItem>
        </Nav>
        </div>

        </div>
    )}
    </main>
  )
}

export default App
