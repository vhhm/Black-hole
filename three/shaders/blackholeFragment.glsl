uniform float time;

varying vec3 vPosition;

void main() {

  float dist = length(vPosition.xy);

  float wave = sin(dist * 10.0 - time * 2.0);

  vec3 color = vec3(0.0);

  color.r = 0.2 + wave * 0.3;
  color.b = 0.6 + wave * 0.4;
  color.g = 0.0;

  float alpha = smoothstep(1.5, 0.0, dist);

  gl_FragColor = vec4(color, alpha);
}