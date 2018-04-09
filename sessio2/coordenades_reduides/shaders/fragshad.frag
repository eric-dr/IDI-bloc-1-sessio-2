#version 330 core

out vec4 FragColor;

void main() {
    FragColor = vec4(0, 0, 0, 1);
    if ((gl_FragCoord.x < 357.) && (gl_FragCoord.y > 357.)) FragColor = vec4(1., 0., 0., 1.); //vermell
    if ((gl_FragCoord.x < 357.) && (gl_FragCoord.y < 357.)) FragColor = vec4(1., 1., 0., 1.); //groc
    if ((gl_FragCoord.x > 357.) && (gl_FragCoord.y > 357.)) FragColor = vec4(0., 0., 1., 1.); //blau
    if ((gl_FragCoord.x > 357.) && (gl_FragCoord.y < 357.)) FragColor = vec4(0., 1., 0., 1.); //verd
}

