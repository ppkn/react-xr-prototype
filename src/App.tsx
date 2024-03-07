import "./App.css"
import { Controllers, Hands, ARButton, XR, RayGrab } from "@react-three/xr"
import { Canvas } from "@react-three/fiber"
import { Box, Text } from "@react-three/drei"

function App() {
  return (
    <>
      <ARButton />
      <Canvas>
        <XR>
          <Controllers />
          <Hands />
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} />
          <RayGrab>
            <Box position={[0, 1.1, -1]} args={[0.4, 0.1, 0.1]}>
              <meshStandardMaterial color={0x0000ff} />
              <Text
                position={[0, 0, 0.06]}
                fontSize={0.05}
                color="white"
                anchorX="center"
                anchorY="middle"
              >
                Hello VizUS lab!
              </Text>
            </Box>
          </RayGrab>
        </XR>
      </Canvas>
    </>
  )
}

export default App
