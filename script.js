<script>
    // Set up the scene, camera, and renderer for the 3D model
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append the renderer's canvas to the 3D container
    document.getElementById('3d-container').appendChild(renderer.domElement);

    // Add ambient light
    const light = new THREE.AmbientLight(0x404040);  // Soft white light
    scene.add(light);

    // Add directional light for better visibility of the model
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1).normalize();
    scene.add(directionalLight);

    // Create a basic cube geometry as a placeholder model (a simple 3D shape)
    const geometry = new THREE.BoxGeometry(1, 1, 1);  // Create a cube with size 1x1x1
    const material = new THREE.MeshPhongMaterial({ color: 0x17aed4 });  // Sky blue color material
    const cube = new THREE.Mesh(geometry, material);  // Create a mesh with the geometry and material
    scene.add(cube);  // Add the cube to the scene

    // Set the camera position
    camera.position.z = 3;

    // Animation function to render the scene continuously
    function animate() {
        requestAnimationFrame(animate);

        // Rotate the cube for better visibility (optional)
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    }

    // Resize renderer on window resize
    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });

    // Start the animation loop
    animate();
</script>