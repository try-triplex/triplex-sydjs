import { type Vector3Tuple } from "three";

export function Circle({
  color,
  position,
  size,
}: {
  color?: string;
  position?: Vector3Tuple;
  size?: number;
}) {
  return (
    <mesh castShadow position={position} receiveShadow>
      <sphereGeometry args={[size, 30, 30]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export function SemiCircle({
  color,
  position,
  rotation,
  size,
}: {
  color?: string;
  position?: Vector3Tuple;
  rotation?: Vector3Tuple;
  size?: number;
}) {
  return (
    <mesh castShadow position={position} receiveShadow rotation={rotation}>
      <sphereGeometry args={[size, 30, 30, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export function Ring() {
  return (
    <mesh castShadow position={[-1.2, 1.4, 0]} receiveShadow>
      <ringGeometry args={[1.27, 1.3, 60]} />
      <meshStandardMaterial
        color="#5e4a9b"
        emissive="#fff"
        emissiveIntensity={0.05}
      />
    </mesh>
  );
}
