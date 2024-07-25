/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var cannon_es__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cannon-es */ "./node_modules/cannon-es/dist/cannon-es.js");
//22Fi084 中村千菜



class ThreeJSContainer {
    scene;
    light;
    constructor() {
    }
    camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(75, 1, 0.1, 1000);
    // 画面部分の作成(表示する枠ごとに)*
    createRendererDOM = (width, height, cameraPos) => {
        const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer();
        renderer.setSize(width, height);
        renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_1__.Color(0x495ed));
        renderer.shadowMap.enabled = true; //シャドウマップを有効にする
        this.camera.position.set(15, 7, 0); // カメラの位置調整
        this.camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 0, 0)); // 原点を向く
        const orbitControls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_0__.OrbitControls(this.camera, renderer.domElement);
        this.createScene();
        // 毎フレームのupdateを呼んで，render
        // reqestAnimationFrame により次フレームを呼ぶ
        const render = (time) => {
            orbitControls.update();
            renderer.render(this.scene, this.camera);
            requestAnimationFrame(render);
        };
        requestAnimationFrame(render);
        renderer.domElement.style.cssFloat = "left";
        renderer.domElement.style.margin = "10px";
        return renderer.domElement;
    };
    // シーンの作成(全体で1回)
    createScene = () => {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();
        const textureLoader = new three__WEBPACK_IMPORTED_MODULE_1__.TextureLoader();
        const world = new cannon_es__WEBPACK_IMPORTED_MODULE_2__.World({ gravity: new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Vec3(0, -9.82, 0) });
        world.defaultContactMaterial.restitution = 0.8;
        world.defaultContactMaterial.friction = 0.03;
        //車体の生成
        const carBody = new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Body({ mass: 5 });
        const carBodyShape = new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Box(new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Vec3(4, 0.5, 2));
        carBody.addShape(carBodyShape);
        carBody.position.y = 1;
        //タイヤの生成
        const vehicle = new cannon_es__WEBPACK_IMPORTED_MODULE_2__.RigidVehicle({ chassisBody: carBody });
        const wheelShape = new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Sphere(1);
        //左前輪
        const frontLeftWheelBody = new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Body({ mass: 1 });
        frontLeftWheelBody.addShape(wheelShape);
        frontLeftWheelBody.angularDamping = 0.4;
        vehicle.addWheel({
            body: frontLeftWheelBody,
            position: new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Vec3(-2, 0, 2.5)
        });
        //右前輪
        const frontRightWgeelBody = new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Body({ mass: 1 });
        frontRightWgeelBody.addShape(wheelShape);
        frontRightWgeelBody.angularDamping = 0.4;
        vehicle.addWheel({
            body: frontRightWgeelBody,
            position: new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Vec3(-2, 0, -2.5)
        });
        //左後輪
        const backLeftWheelBody = new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Body({ mass: 1 });
        backLeftWheelBody.addShape(wheelShape);
        backLeftWheelBody.angularDamping = 0.4;
        vehicle.addWheel({
            body: backLeftWheelBody,
            position: new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Vec3(2, 0, 2.5)
        });
        //右後輪
        const backRightWheelBody = new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Body({ mass: 1 });
        backRightWheelBody.addShape(wheelShape);
        backRightWheelBody.angularDamping = 0.4;
        vehicle.addWheel({
            body: backRightWheelBody,
            position: new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Vec3(2, 0, -2.5)
        });
        //物理演算空間
        const wheelGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(1);
        const wheelMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0x000000 });
        const frontLeftMesh1 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(wheelGeometry, wheelMaterial);
        const frontLeftMesh2 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(wheelGeometry, wheelMaterial);
        const frontLeftMesh3 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(wheelGeometry, wheelMaterial);
        const frontLeftMesh4 = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(wheelGeometry, wheelMaterial);
        this.scene.add(frontLeftMesh1);
        this.scene.add(frontLeftMesh2);
        this.scene.add(frontLeftMesh3);
        this.scene.add(frontLeftMesh4);
        vehicle.addToWorld(world);
        //車のテクスチャ―読み込み
        const texture_carTop = textureLoader.load('img/car.png');
        const texture_carFace = textureLoader.load('img/carFace.png');
        const texrute_carBack = textureLoader.load('img/carBack.png');
        // ジオメトリを作成
        const boxGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(8, 2, 4);
        // 上面の材料
        const material_carTop = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ map: texture_carTop });
        const material_carBuck = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ map: texrute_carBack });
        const material_carFace = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ map: texture_carFace });
        const material_other = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0xff0000 }); //赤
        // 6面の材料を配列に格納
        const materials = [
            material_carBuck,
            material_carFace,
            material_carTop,
            material_other,
            material_other,
            material_other
        ];
        // メッシュを作成
        const boxMesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(boxGeometry, materials);
        this.scene.add(boxMesh);
        //ライトの設定
        this.light = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(0xffffff);
        const lvec = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(1, 1, 1).clone().normalize();
        this.light.position.set(lvec.x, lvec.y, lvec.z);
        this.scene.add(this.light);
        //芝生
        const texture_grass = textureLoader.load('img/grass.png', () => {
            // テクスチャが読み込まれた後に実行されるコールバック
            console.log('Texture_grass loaded successfully');
            // テクスチャのリピートとオフセットを設定
            texture_grass.wrapS = three__WEBPACK_IMPORTED_MODULE_1__.RepeatWrapping;
            texture_grass.wrapT = three__WEBPACK_IMPORTED_MODULE_1__.RepeatWrapping;
            texture_grass.repeat.set(100, 100); // 画像を2x2回繰り返す
            texture_grass.offset.set(0, 0); // テクスチャの表示位置
        });
        const phongMaterial_grass = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ map: texture_grass });
        const planeGeometry_grass = new three__WEBPACK_IMPORTED_MODULE_1__.PlaneGeometry(150, 150);
        const planeMesh_grass = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(planeGeometry_grass, phongMaterial_grass);
        planeMesh_grass.material.side = three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide; // 両面表示
        planeMesh_grass.rotateX(-Math.PI / 2);
        this.scene.add(planeMesh_grass);
        //コンクリート縦
        const texture_concreate_h = textureLoader.load('img/concrete_h.png');
        const Material_con_h = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ map: texture_concreate_h });
        const Geometry_con_h = new three__WEBPACK_IMPORTED_MODULE_1__.PlaneGeometry(150, 10);
        const planeMesh_can_h = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(Geometry_con_h, Material_con_h);
        planeMesh_can_h.material.side = three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide; // 両面表示
        planeMesh_can_h.rotateX(-Math.PI / 2);
        planeMesh_can_h.position.y = 0.2;
        this.scene.add(planeMesh_can_h);
        //コンクリート横
        const texture_can_w = textureLoader.load('img/concrete_w.png');
        const phongMaterial_con_w = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ map: texture_can_w });
        const planeGeometry_con_w = new three__WEBPACK_IMPORTED_MODULE_1__.PlaneGeometry(10, 150);
        const planeMesh_con_w = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(planeGeometry_con_w, phongMaterial_con_w);
        planeMesh_con_w.material.side = three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide; // 両面表示
        planeMesh_con_w.rotateX(-Math.PI / 2);
        planeMesh_con_w.position.set(-10, 0.1, 0);
        this.scene.add(planeMesh_con_w);
        //駐車場
        const texture_parking = textureLoader.load('img/parking.png');
        const phongMaterial_parking = new three__WEBPACK_IMPORTED_MODULE_1__.MeshPhongMaterial({ map: texture_parking });
        const planeGeometry_parking = new three__WEBPACK_IMPORTED_MODULE_1__.PlaneGeometry(30, 50);
        const planeMesh_parking = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(planeGeometry_parking, phongMaterial_parking);
        planeMesh_parking.material.side = three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide; // 両面表示
        planeMesh_parking.rotateX(-Math.PI / 2);
        planeMesh_parking.rotateZ(-Math.PI / 2);
        planeMesh_parking.position.set(20, 0.1, -20);
        this.scene.add(planeMesh_parking);
        //物理演算の平面
        const planeShape = new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Plane();
        const planeBody = new cannon_es__WEBPACK_IMPORTED_MODULE_2__.Body({ mass: 0 });
        planeBody.addShape(planeShape);
        planeBody.position.set(planeMesh_grass.position.x, planeMesh_grass.position.y, planeMesh_grass.position.z);
        planeBody.quaternion.set(planeMesh_grass.quaternion.x, planeMesh_grass.quaternion.y, planeMesh_grass.quaternion.z, planeMesh_grass.quaternion.w);
        world.addBody(planeBody);
        //車の操作(押したとき加速)
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowUp':
                    vehicle.setWheelForce(10, 0);
                    vehicle.setWheelForce(10, 1);
                    break;
                case 'ArrowDown':
                    vehicle.setWheelForce(-10, 0);
                    vehicle.setWheelForce(-10, 1);
                    break;
                case 'ArrowLeft':
                    vehicle.setSteeringValue(three__WEBPACK_IMPORTED_MODULE_1__.MathUtils.degToRad(30), 0);
                    vehicle.setSteeringValue(three__WEBPACK_IMPORTED_MODULE_1__.MathUtils.degToRad(30), 1);
                    break;
                case 'ArrowRight':
                    vehicle.setSteeringValue(-three__WEBPACK_IMPORTED_MODULE_1__.MathUtils.degToRad(30), 0);
                    vehicle.setSteeringValue(-three__WEBPACK_IMPORTED_MODULE_1__.MathUtils.degToRad(30), 1);
                    break;
            }
        });
        //車の操作(離したとき減速)
        document.addEventListener('keyup', (event) => {
            switch (event.key) {
                case 'ArrowUp':
                case 'ArrowDown':
                case 'ArrowRight':
                case 'ArrowLeft':
                    vehicle.setWheelForce(0, 0);
                    vehicle.setWheelForce(0, 1);
                    break;
            }
        });
        //信号の棒
        const texture_lightPole = textureLoader.load('img/lightPole2.png');
        const geometry_pole = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(0.5, 0.5, 10, 32);
        const material_pole = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ map: texture_lightPole });
        const cylinder = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(geometry_pole, material_pole);
        cylinder.position.set(-13, 5.5, -5);
        this.scene.add(cylinder);
        //信号のバックのフレーム
        const geometry_frame = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(1, 2, 5);
        const material_frame = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ map: texture_lightPole });
        const cube_frame = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(geometry_frame, material_frame);
        cube_frame.position.set(-13, 10, -3);
        this.scene.add(cube_frame);
        const texture_redLight = textureLoader.load('img/redLight.png');
        const texture_yellowLight = textureLoader.load('img/yellowLight.png');
        const texture_blueLight = textureLoader.load('img/blueLight.png');
        //信号の色
        const generateSprite = (index) => {
            const geometry_Mesh = [];
            const geometry_circle = new three__WEBPACK_IMPORTED_MODULE_1__.CircleGeometry(0.5, 32);
            let material_circle = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial();
            switch (index) {
                //青
                case 0:
                case 1:
                case 2:
                case 3:
                    for (let i = 0; i < 3; i++) {
                        if (i == 0) {
                            material_circle = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ map: texture_blueLight });
                        }
                        if (i == 1) {
                            material_circle = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0x808080 });
                        }
                        if (i == 2) {
                            material_circle = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0x808080 });
                        }
                        geometry_Mesh.push(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(geometry_circle, material_circle));
                        geometry_Mesh[i].rotation.set(0, Math.PI / 2, 0);
                        geometry_Mesh[i].position.set(-12.4, 10, -1.5 + -i * 1.5);
                        this.scene.add(geometry_Mesh[i]);
                    }
                    break;
                //黄色
                case 4:
                case 5:
                    for (let i = 0; i < 3; i++) {
                        if (i == 0) {
                            material_circle = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0x808080 });
                        }
                        if (i == 1) {
                            material_circle = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ map: texture_yellowLight });
                        }
                        if (i == 2) {
                            material_circle = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0x808080 });
                        }
                        geometry_Mesh.push(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(geometry_circle, material_circle));
                        geometry_Mesh[i].rotation.set(0, Math.PI / 2, 0);
                        geometry_Mesh[i].position.set(-12.4, 10, -1.5 + -i * 1.5);
                        this.scene.add(geometry_Mesh[i]);
                    }
                    break;
                //赤
                case 6:
                case 7:
                case 8:
                case 9:
                    for (let i = 0; i < 3; i++) {
                        if (i == 0) {
                            material_circle = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0x808080 });
                        }
                        if (i == 1) {
                            material_circle = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0x808080 });
                        }
                        if (i == 2) {
                            material_circle = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ map: texture_redLight });
                        }
                        geometry_Mesh.push(new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(geometry_circle, material_circle));
                        geometry_Mesh[i].rotation.set(0, Math.PI / 2, 0);
                        geometry_Mesh[i].position.set(-12.4, 10, -1.5 + -i * 1.5);
                        this.scene.add(geometry_Mesh[i]);
                    }
                    break;
            }
        };
        // //アーチ
        // const geometry_arch = new THREE.TorusGeometry(5, 1, 10, 100);
        // const material_arch = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        // const arch = new THREE.Mesh(geometry_arch, material_arch);
        // arch.position.x = -50;
        // arch.rotateY(Math.PI / 2);
        // this.scene.add(arch);
        //ドーム
        const texture_dome = textureLoader.load('img/dome.png');
        let pointNum = 10;
        const r = 20;
        let points = [];
        for (let i = 0; i < pointNum; ++i) {
            points.push(new three__WEBPACK_IMPORTED_MODULE_1__.Vector2(r * Math.cos(Math.PI / 2 * i / (pointNum - 1) - Math.PI / 2), -r * Math.sin(Math.PI / 2 * i / (pointNum - 1) - Math.PI / 2)));
        }
        let latheGeometry_dom = new three__WEBPACK_IMPORTED_MODULE_1__.LatheGeometry(points);
        let latheMaterial_dom = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ map: texture_dome, side: three__WEBPACK_IMPORTED_MODULE_1__.DoubleSide });
        let latheMesh_dom = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(latheGeometry_dom, latheMaterial_dom);
        latheMesh_dom.position.set(30 + r, 0, 30 + r);
        this.scene.add(latheMesh_dom);
        //コンビニ
        const texture_conF = textureLoader.load('img/conveniFace.png');
        const texture_con = textureLoader.load('img/conveniKabe.png');
        const material_conF = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ map: texture_conF });
        const material_con = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ map: texture_con });
        const geometry_con = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(50, 12, 30);
        //テクスチャ―を張り付ける
        const materials_con = [
            material_con,
            material_con,
            material_con,
            material_con,
            material_conF,
            material_con // 背面
        ];
        const mesh_con = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(geometry_con, materials_con);
        mesh_con.position.set(20, 6, -45);
        this.scene.add(mesh_con);
        //ビル
        let x, y, z;
        let textureIndex = 0;
        // ランダムな値を生成する関数
        function getRandom(min, max) {
            return Math.random() * (max - min) + min;
        }
        //複数のテクスチャ―読み込み
        const texture_builds = [
            textureLoader.load('img/build1.png'),
            textureLoader.load('img/build2.png'),
            textureLoader.load('img/build3.png'),
            textureLoader.load('img/build4.png'),
            textureLoader.load('img/build5.png'),
            textureLoader.load('img/build6.png'),
            textureLoader.load('img/build7.png'),
            textureLoader.load('img/build8.png'),
            textureLoader.load('img/build9.png'),
            textureLoader.load('img/build10.png'),
            textureLoader.load('img/build11.png'),
            textureLoader.load('img/build12.png')
        ];
        // ビル生成
        for (let zp = -60; zp <= 60; zp += 30) {
            for (let xp = -60; xp <= 60; xp += 30) {
                x = getRandom(20, 25);
                y = getRandom(5, 40);
                z = x;
                let geometry_build;
                if (xp == 30 && zp == -30 || xp == -30 && zp == 30 || xp == -60 && zp == -60) {
                    geometry_build = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(x / 2, x / 2, y, z);
                }
                else {
                    geometry_build = new three__WEBPACK_IMPORTED_MODULE_1__.BoxGeometry(x, y, z);
                }
                const texture_build = texture_builds[textureIndex];
                const material_build = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ map: texture_build });
                const build = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(geometry_build, material_build);
                textureIndex = (textureIndex + 1) % texture_builds.length;
                if (xp > 0 && zp > 0) {
                    break;
                }
                build.position.set(xp, y / 2, zp); // 手前、縦、左
                if ((0 > xp || xp > 15) && (0 > zp || zp > 15) && xp !== 30) {
                    this.scene.add(build);
                }
            }
        }
        //人間
        let hx = [
            //++象限
            63, 50, 66, 10, 10,
            20, 40, 30, 50, 10,
            7, 13, 15, 9, 10,
            22, 24, 26, 28, 30,
            //+-象限
            10, 12, 24, 28, 29, 60, 63,
            //-+
            -22, -30, -40, -41, -60, -25, -69,
            //--象限
            -15, -17, -30, -60, -60
        ];
        let hz = [
            //++象限
            20, 23, 20, 15, 10,
            70, 20, 25, 20, 30,
            46, 48, 49, 49, 50,
            50, 50, 50, 50, 50 //並んでる人
                //+-象限
                - 10, -12, -22, -25, -23, -10, -12,
            //-+
            12, 42, 44, 40, 10, 45, 8,
            //--象限
            -10, -17, -13, -13, -8, 10
        ];
        //顔
        for (let i = 0; i < 100; i++) {
            const hFace_geometry = new three__WEBPACK_IMPORTED_MODULE_1__.SphereGeometry(1, 32, 16);
            const hFace_material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0xffdab9 });
            const hFace_sphere = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(hFace_geometry, hFace_material);
            hFace_sphere.position.set(hx[i], 3.5, hz[i]);
            this.scene.add(hFace_sphere);
            //体
            const hBody_geometry = new three__WEBPACK_IMPORTED_MODULE_1__.ConeGeometry(1, 3, 32);
            let hBody_material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0xadd8e6 });
            if (i % 2 == 0) {
                hBody_material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0xffb6c1 });
            }
            const hBody_cone = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(hBody_geometry, hBody_material);
            hBody_cone.position.set(hx[i], 2.5, hz[i]);
            this.scene.add(hBody_cone);
            //足
            const hLegR_geometry = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(0.2, 0.2, 1, 32);
            const hLegR_material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0xffdab9 });
            const hRegR_cylinder = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(hLegR_geometry, hLegR_material);
            hRegR_cylinder.position.set(hx[i], 0.5, hz[i] + 0.25);
            this.scene.add(hRegR_cylinder);
            const hLegL_geometry = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(0.2, 0.2, 1, 32);
            const hLegL_material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0xffdab9 });
            const hRegL_cylinder = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(hLegL_geometry, hLegL_material);
            hRegL_cylinder.position.set(hx[i], 0.5, hz[i] - 0.25);
            this.scene.add(hRegL_cylinder);
            //腕
            const hArmR_geometry = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(0.2, 0.2, 1, 32);
            const hArmR_material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0xffdab9 });
            const hArmR_cylinder = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(hArmR_geometry, hArmR_material);
            hArmR_cylinder.position.set(hx[i], 1.8, hz[i] + 1);
            hArmR_cylinder.rotateX(-Math.PI / 4);
            this.scene.add(hArmR_cylinder);
            const hArmL_geometry = new three__WEBPACK_IMPORTED_MODULE_1__.CylinderGeometry(0.2, 0.2, 1, 32);
            const hArmL_material = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({ color: 0xffdab9 });
            const hArmL_cylinder = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(hArmL_geometry, hArmL_material);
            hArmL_cylinder.position.set(hx[i], 1.8, hz[i] - 1);
            hArmL_cylinder.rotateX(Math.PI / 4);
            this.scene.add(hArmL_cylinder);
        }
        let i = 0;
        let update = (time) => {
            //物理演算を実行
            world.fixedStep();
            //キーボードでの車の操作
            //車体
            boxMesh.position.set(carBody.position.x, carBody.position.y, carBody.position.z);
            boxMesh.quaternion.set(carBody.quaternion.x, carBody.quaternion.y, carBody.quaternion.z, carBody.quaternion.w);
            //タイヤ
            frontLeftMesh1.position.set(frontLeftWheelBody.position.x, frontLeftWheelBody.position.y, frontLeftWheelBody.position.z);
            frontLeftMesh1.quaternion.set(frontLeftWheelBody.quaternion.x, frontLeftWheelBody.quaternion.y, frontLeftWheelBody.quaternion.z, frontLeftWheelBody.quaternion.w);
            frontLeftMesh2.position.set(frontRightWgeelBody.position.x, frontRightWgeelBody.position.y, frontRightWgeelBody.position.z);
            frontLeftMesh2.quaternion.set(frontRightWgeelBody.quaternion.x, frontRightWgeelBody.quaternion.y, frontRightWgeelBody.quaternion.z, frontRightWgeelBody.quaternion.w);
            frontLeftMesh3.position.set(backLeftWheelBody.position.x, backLeftWheelBody.position.y, backLeftWheelBody.position.z);
            frontLeftMesh3.quaternion.set(backLeftWheelBody.quaternion.x, backLeftWheelBody.quaternion.y, backLeftWheelBody.quaternion.z, backLeftWheelBody.quaternion.w);
            frontLeftMesh4.position.set(backRightWheelBody.position.x, backRightWheelBody.position.y, backRightWheelBody.position.z);
            frontLeftMesh4.quaternion.set(backRightWheelBody.quaternion.x, backRightWheelBody.quaternion.y, backRightWheelBody.quaternion.z, backRightWheelBody.quaternion.w);
            //信号機の点滅
            generateSprite(i % 10);
            i += 0.0625;
            // this.camera.lookAt(
            //     carBody.position.x - 10,
            //     carBody.position.y + 5,
            //     carBody.position.z 
            // )
            // this.camera.position.set(
            //     carBody.position.x+5 ,
            //     carBody.position.y+5 ,
            //     0
            // );
            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);
    };
}
window.addEventListener("DOMContentLoaded", init);
function init() {
    let container = new ThreeJSContainer();
    let viewport = container.createRendererDOM(640, 480, new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(5, 5, 5));
    document.body.appendChild(viewport);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcgprendering"] = self["webpackChunkcgprendering"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_cannon-es_dist_cannon-es_js-node_modules_three_examples_jsm_controls_Orb-e58bd2"], () => (__webpack_require__("./src/app.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nLy4vc3JjL2FwcC50cyIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2dwcmVuZGVyaW5nL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jZ3ByZW5kZXJpbmcvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vMjJGaTA4NCDkuK3mnZHljYPoj5xcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9sc1wiO1xuaW1wb3J0ICogYXMgQ0FOTk9OIGZyb20gJ2Nhbm5vbi1lcyc7XG5cbmNsYXNzIFRocmVlSlNDb250YWluZXIge1xuICAgIHByaXZhdGUgc2NlbmU6IFRIUkVFLlNjZW5lO1xuICAgIHByaXZhdGUgbGlnaHQ6IFRIUkVFLkxpZ2h0O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIDEsIDAuMSwgMTAwMCk7XG4gICAgLy8g55S76Z2i6YOo5YiG44Gu5L2c5oiQKOihqOekuuOBmeOCi+aeoOOBlOOBqOOBqykqXG4gICAgcHVibGljIGNyZWF0ZVJlbmRlcmVyRE9NID0gKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjYW1lcmFQb3M6IFRIUkVFLlZlY3RvcjMpID0+IHtcbiAgICAgICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xuICAgICAgICByZW5kZXJlci5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKG5ldyBUSFJFRS5Db2xvcigweDQ5NWVkKSk7XG4gICAgICAgIHJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTsgLy/jgrfjg6Pjg4njgqbjg57jg4Pjg5fjgpLmnInlirnjgavjgZnjgotcblxuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoMTUsIDcsIDApOyAvLyDjgqvjg6Hjg6njga7kvY3nva7oqr/mlbRcbiAgICAgICAgdGhpcy5jYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDApKTsgLy8g5Y6f54K544KS5ZCR44GPXG5cbiAgICAgICAgY29uc3Qgb3JiaXRDb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcblxuICAgICAgICB0aGlzLmNyZWF0ZVNjZW5lKCk7XG4gICAgICAgIC8vIOavjuODleODrOODvOODoOOBrnVwZGF0ZeOCkuWRvOOCk+OBp++8jHJlbmRlclxuICAgICAgICAvLyByZXFlc3RBbmltYXRpb25GcmFtZSDjgavjgojjgormrKHjg5Xjg6zjg7zjg6DjgpLlkbzjgbZcbiAgICAgICAgY29uc3QgcmVuZGVyOiBGcmFtZVJlcXVlc3RDYWxsYmFjayA9ICh0aW1lKSA9PiB7XG4gICAgICAgICAgICBvcmJpdENvbnRyb2xzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuXG4gICAgICAgIHJlbmRlcmVyLmRvbUVsZW1lbnQuc3R5bGUuY3NzRmxvYXQgPSBcImxlZnRcIjtcbiAgICAgICAgcmVuZGVyZXIuZG9tRWxlbWVudC5zdHlsZS5tYXJnaW4gPSBcIjEwcHhcIjtcbiAgICAgICAgcmV0dXJuIHJlbmRlcmVyLmRvbUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8g44K344O844Oz44Gu5L2c5oiQKOWFqOS9k+OBpzHlm54pXG4gICAgcHJpdmF0ZSBjcmVhdGVTY2VuZSA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5zY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICAgICAgICBjb25zdCB0ZXh0dXJlTG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgICAgICAgY29uc3Qgd29ybGQgPSBuZXcgQ0FOTk9OLldvcmxkKHsgZ3Jhdml0eTogbmV3IENBTk5PTi5WZWMzKDAsIC05LjgyLCAwKSB9KTtcblxuICAgICAgICB3b3JsZC5kZWZhdWx0Q29udGFjdE1hdGVyaWFsLnJlc3RpdHV0aW9uID0gMC44O1xuICAgICAgICB3b3JsZC5kZWZhdWx0Q29udGFjdE1hdGVyaWFsLmZyaWN0aW9uID0gMC4wMztcblxuICAgICAgICAvL+i7iuS9k+OBrueUn+aIkFxuICAgICAgICBjb25zdCBjYXJCb2R5ID0gbmV3IENBTk5PTi5Cb2R5KHsgbWFzczogNSB9KTtcbiAgICAgICAgY29uc3QgY2FyQm9keVNoYXBlID0gbmV3IENBTk5PTi5Cb3gobmV3IENBTk5PTi5WZWMzKDQsIDAuNSwgMikpO1xuICAgICAgICBjYXJCb2R5LmFkZFNoYXBlKGNhckJvZHlTaGFwZSk7XG4gICAgICAgIGNhckJvZHkucG9zaXRpb24ueSA9IDE7XG4gICAgICAgIC8v44K/44Kk44Ok44Gu55Sf5oiQXG4gICAgICAgIGNvbnN0IHZlaGljbGUgPSBuZXcgQ0FOTk9OLlJpZ2lkVmVoaWNsZSh7IGNoYXNzaXNCb2R5OiBjYXJCb2R5IH0pO1xuICAgICAgICBjb25zdCB3aGVlbFNoYXBlID0gbmV3IENBTk5PTi5TcGhlcmUoMSk7XG4gICAgICAgIC8v5bem5YmN6LyqXG4gICAgICAgIGNvbnN0IGZyb250TGVmdFdoZWVsQm9keSA9IG5ldyBDQU5OT04uQm9keSh7IG1hc3M6IDEgfSk7XG4gICAgICAgIGZyb250TGVmdFdoZWVsQm9keS5hZGRTaGFwZSh3aGVlbFNoYXBlKTtcbiAgICAgICAgZnJvbnRMZWZ0V2hlZWxCb2R5LmFuZ3VsYXJEYW1waW5nID0gMC40O1xuICAgICAgICB2ZWhpY2xlLmFkZFdoZWVsKHtcbiAgICAgICAgICAgIGJvZHk6IGZyb250TGVmdFdoZWVsQm9keSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgQ0FOTk9OLlZlYzMoLTIsIDAsIDIuNSlcbiAgICAgICAgfSk7XG4gICAgICAgIC8v5Y+z5YmN6LyqXG4gICAgICAgIGNvbnN0IGZyb250UmlnaHRXZ2VlbEJvZHkgPSBuZXcgQ0FOTk9OLkJvZHkoeyBtYXNzOiAxIH0pO1xuICAgICAgICBmcm9udFJpZ2h0V2dlZWxCb2R5LmFkZFNoYXBlKHdoZWVsU2hhcGUpO1xuICAgICAgICBmcm9udFJpZ2h0V2dlZWxCb2R5LmFuZ3VsYXJEYW1waW5nID0gMC40O1xuICAgICAgICB2ZWhpY2xlLmFkZFdoZWVsKHtcbiAgICAgICAgICAgIGJvZHk6IGZyb250UmlnaHRXZ2VlbEJvZHksXG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IENBTk5PTi5WZWMzKC0yLCAwLCAtMi41KVxuICAgICAgICB9KTtcbiAgICAgICAgLy/lt6blvozovKpcbiAgICAgICAgY29uc3QgYmFja0xlZnRXaGVlbEJvZHkgPSBuZXcgQ0FOTk9OLkJvZHkoeyBtYXNzOiAxIH0pO1xuICAgICAgICBiYWNrTGVmdFdoZWVsQm9keS5hZGRTaGFwZSh3aGVlbFNoYXBlKTtcbiAgICAgICAgYmFja0xlZnRXaGVlbEJvZHkuYW5ndWxhckRhbXBpbmcgPSAwLjQ7XG4gICAgICAgIHZlaGljbGUuYWRkV2hlZWwoe1xuICAgICAgICAgICAgYm9keTogYmFja0xlZnRXaGVlbEJvZHksXG4gICAgICAgICAgICBwb3NpdGlvbjogbmV3IENBTk5PTi5WZWMzKDIsIDAsIDIuNSlcbiAgICAgICAgfSk7XG4gICAgICAgIC8v5Y+z5b6M6LyqXG4gICAgICAgIGNvbnN0IGJhY2tSaWdodFdoZWVsQm9keSA9IG5ldyBDQU5OT04uQm9keSh7IG1hc3M6IDEgfSk7XG4gICAgICAgIGJhY2tSaWdodFdoZWVsQm9keS5hZGRTaGFwZSh3aGVlbFNoYXBlKTtcbiAgICAgICAgYmFja1JpZ2h0V2hlZWxCb2R5LmFuZ3VsYXJEYW1waW5nID0gMC40O1xuICAgICAgICB2ZWhpY2xlLmFkZFdoZWVsKHtcbiAgICAgICAgICAgIGJvZHk6IGJhY2tSaWdodFdoZWVsQm9keSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBuZXcgQ0FOTk9OLlZlYzMoMiwgMCwgLTIuNSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy/niannkIbmvJTnrpfnqbrplpNcbiAgICAgICAgY29uc3Qgd2hlZWxHZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxKTtcbiAgICAgICAgY29uc3Qgd2hlZWxNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweDAwMDAwMCB9KTtcbiAgICAgICAgY29uc3QgZnJvbnRMZWZ0TWVzaDEgPSBuZXcgVEhSRUUuTWVzaCh3aGVlbEdlb21ldHJ5LCB3aGVlbE1hdGVyaWFsKTtcbiAgICAgICAgY29uc3QgZnJvbnRMZWZ0TWVzaDIgPSBuZXcgVEhSRUUuTWVzaCh3aGVlbEdlb21ldHJ5LCB3aGVlbE1hdGVyaWFsKTtcbiAgICAgICAgY29uc3QgZnJvbnRMZWZ0TWVzaDMgPSBuZXcgVEhSRUUuTWVzaCh3aGVlbEdlb21ldHJ5LCB3aGVlbE1hdGVyaWFsKTtcbiAgICAgICAgY29uc3QgZnJvbnRMZWZ0TWVzaDQgPSBuZXcgVEhSRUUuTWVzaCh3aGVlbEdlb21ldHJ5LCB3aGVlbE1hdGVyaWFsKTtcblxuICAgICAgICB0aGlzLnNjZW5lLmFkZChmcm9udExlZnRNZXNoMSk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGZyb250TGVmdE1lc2gyKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoZnJvbnRMZWZ0TWVzaDMpO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChmcm9udExlZnRNZXNoNCk7XG4gICAgICAgIHZlaGljbGUuYWRkVG9Xb3JsZCh3b3JsZCk7XG5cbiAgICAgICAgLy/ou4rjga7jg4bjgq/jgrnjg4Hjg6PigJXoqq3jgb/ovrzjgb9cbiAgICAgICAgY29uc3QgdGV4dHVyZV9jYXJUb3AgPSB0ZXh0dXJlTG9hZGVyLmxvYWQoJ2ltZy9jYXIucG5nJyk7XG4gICAgICAgIGNvbnN0IHRleHR1cmVfY2FyRmFjZSA9IHRleHR1cmVMb2FkZXIubG9hZCgnaW1nL2NhckZhY2UucG5nJylcbiAgICAgICAgY29uc3QgdGV4cnV0ZV9jYXJCYWNrID0gdGV4dHVyZUxvYWRlci5sb2FkKCdpbWcvY2FyQmFjay5wbmcnKTtcbiAgICAgICAgLy8g44K444Kq44Oh44OI44Oq44KS5L2c5oiQXG4gICAgICAgIGNvbnN0IGJveEdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDgsIDIsIDQpO1xuICAgICAgICAvLyDkuIrpnaLjga7mnZDmlplcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxfY2FyVG9wID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiB0ZXh0dXJlX2NhclRvcCB9KTtcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxfY2FyQnVjayA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogdGV4cnV0ZV9jYXJCYWNrIH0pO1xuICAgICAgICBjb25zdCBtYXRlcmlhbF9jYXJGYWNlID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiB0ZXh0dXJlX2NhckZhY2UgfSk7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsX290aGVyID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4ZmYwMDAwIH0pOy8v6LWkXG5cbiAgICAgICAgLy8gNumdouOBruadkOaWmeOCkumFjeWIl+OBq+agvOe0jVxuICAgICAgICBjb25zdCBtYXRlcmlhbHMgPSBbXG4gICAgICAgICAgICBtYXRlcmlhbF9jYXJCdWNrLCAvL+W+jOOCjemdolxuICAgICAgICAgICAgbWF0ZXJpYWxfY2FyRmFjZSwgLy/liY3pnaJcbiAgICAgICAgICAgIG1hdGVyaWFsX2NhclRvcCwgICAvLyDkuIrpnaJcbiAgICAgICAgICAgIG1hdGVyaWFsX290aGVyLFxuICAgICAgICAgICAgbWF0ZXJpYWxfb3RoZXIsXG4gICAgICAgICAgICBtYXRlcmlhbF9vdGhlclxuICAgICAgICBdO1xuXG4gICAgICAgIC8vIOODoeODg+OCt+ODpeOCkuS9nOaIkFxuICAgICAgICBjb25zdCBib3hNZXNoID0gbmV3IFRIUkVFLk1lc2goYm94R2VvbWV0cnksIG1hdGVyaWFscyk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGJveE1lc2gpO1xuXG4gICAgICAgIC8v44Op44Kk44OI44Gu6Kit5a6aXG4gICAgICAgIHRoaXMubGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZik7XG4gICAgICAgIGNvbnN0IGx2ZWMgPSBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKS5ub3JtYWxpemUoKTtcbiAgICAgICAgdGhpcy5saWdodC5wb3NpdGlvbi5zZXQobHZlYy54LCBsdmVjLnksIGx2ZWMueik7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHRoaXMubGlnaHQpO1xuXG4gICAgICAgIC8v6Iqd55SfXG4gICAgICAgIGNvbnN0IHRleHR1cmVfZ3Jhc3MgPSB0ZXh0dXJlTG9hZGVyLmxvYWQoJ2ltZy9ncmFzcy5wbmcnLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6PjgYzoqq3jgb/ovrzjgb7jgozjgZ/lvozjgavlrp/ooYzjgZXjgozjgovjgrPjg7zjg6vjg5Djg4Pjgq9cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUZXh0dXJlX2dyYXNzIGxvYWRlZCBzdWNjZXNzZnVsbHknKTtcblxuICAgICAgICAgICAgLy8g44OG44Kv44K544OB44Oj44Gu44Oq44OU44O844OI44Go44Kq44OV44K744OD44OI44KS6Kit5a6aXG4gICAgICAgICAgICB0ZXh0dXJlX2dyYXNzLndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gICAgICAgICAgICB0ZXh0dXJlX2dyYXNzLndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gICAgICAgICAgICB0ZXh0dXJlX2dyYXNzLnJlcGVhdC5zZXQoMTAwLCAxMDApOyAvLyDnlLvlg4/jgpIyeDLlm57nubDjgorov5TjgZlcbiAgICAgICAgICAgIHRleHR1cmVfZ3Jhc3Mub2Zmc2V0LnNldCgwLCAwKTsgLy8g44OG44Kv44K544OB44Oj44Gu6KGo56S65L2N572uXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwaG9uZ01hdGVyaWFsX2dyYXNzID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgbWFwOiB0ZXh0dXJlX2dyYXNzIH0pO1xuICAgICAgICBjb25zdCBwbGFuZUdlb21ldHJ5X2dyYXNzID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMTUwLCAxNTApO1xuICAgICAgICBjb25zdCBwbGFuZU1lc2hfZ3Jhc3MgPSBuZXcgVEhSRUUuTWVzaChwbGFuZUdlb21ldHJ5X2dyYXNzLCBwaG9uZ01hdGVyaWFsX2dyYXNzKTtcbiAgICAgICAgcGxhbmVNZXNoX2dyYXNzLm1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlOyAvLyDkuKHpnaLooajnpLpcbiAgICAgICAgcGxhbmVNZXNoX2dyYXNzLnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQocGxhbmVNZXNoX2dyYXNzKTtcblxuICAgICAgICAvL+OCs+ODs+OCr+ODquODvOODiOe4plxuICAgICAgICBjb25zdCB0ZXh0dXJlX2NvbmNyZWF0ZV9oID0gdGV4dHVyZUxvYWRlci5sb2FkKCdpbWcvY29uY3JldGVfaC5wbmcnKTtcbiAgICAgICAgY29uc3QgTWF0ZXJpYWxfY29uX2ggPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoeyBtYXA6IHRleHR1cmVfY29uY3JlYXRlX2ggfSk7XG4gICAgICAgIGNvbnN0IEdlb21ldHJ5X2Nvbl9oID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMTUwLCAxMCk7XG4gICAgICAgIGNvbnN0IHBsYW5lTWVzaF9jYW5faCA9IG5ldyBUSFJFRS5NZXNoKEdlb21ldHJ5X2Nvbl9oLCBNYXRlcmlhbF9jb25faCk7XG4gICAgICAgIHBsYW5lTWVzaF9jYW5faC5tYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTsgLy8g5Lih6Z2i6KGo56S6XG4gICAgICAgIHBsYW5lTWVzaF9jYW5faC5yb3RhdGVYKC1NYXRoLlBJIC8gMik7XG4gICAgICAgIHBsYW5lTWVzaF9jYW5faC5wb3NpdGlvbi55ID0gMC4yO1xuICAgICAgICB0aGlzLnNjZW5lLmFkZChwbGFuZU1lc2hfY2FuX2gpO1xuICAgICAgICAvL+OCs+ODs+OCr+ODquODvOODiOaoqlxuICAgICAgICBjb25zdCB0ZXh0dXJlX2Nhbl93ID0gdGV4dHVyZUxvYWRlci5sb2FkKCdpbWcvY29uY3JldGVfdy5wbmcnKTtcbiAgICAgICAgY29uc3QgcGhvbmdNYXRlcmlhbF9jb25fdyA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7IG1hcDogdGV4dHVyZV9jYW5fdyB9KTtcbiAgICAgICAgY29uc3QgcGxhbmVHZW9tZXRyeV9jb25fdyA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDEwLCAxNTApO1xuICAgICAgICBjb25zdCBwbGFuZU1lc2hfY29uX3cgPSBuZXcgVEhSRUUuTWVzaChwbGFuZUdlb21ldHJ5X2Nvbl93LCBwaG9uZ01hdGVyaWFsX2Nvbl93KTtcbiAgICAgICAgcGxhbmVNZXNoX2Nvbl93Lm1hdGVyaWFsLnNpZGUgPSBUSFJFRS5Eb3VibGVTaWRlOyAvLyDkuKHpnaLooajnpLpcbiAgICAgICAgcGxhbmVNZXNoX2Nvbl93LnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgICAgICAgcGxhbmVNZXNoX2Nvbl93LnBvc2l0aW9uLnNldCgtMTAsIDAuMSwgMCk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKHBsYW5lTWVzaF9jb25fdyk7XG5cbiAgICAgICAgLy/pp5Dou4rloLRcbiAgICAgICAgY29uc3QgdGV4dHVyZV9wYXJraW5nID0gdGV4dHVyZUxvYWRlci5sb2FkKCdpbWcvcGFya2luZy5wbmcnKTtcbiAgICAgICAgY29uc3QgcGhvbmdNYXRlcmlhbF9wYXJraW5nID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKHsgbWFwOiB0ZXh0dXJlX3BhcmtpbmcgfSk7XG4gICAgICAgIGNvbnN0IHBsYW5lR2VvbWV0cnlfcGFya2luZyA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDMwLCA1MCk7XG4gICAgICAgIGNvbnN0IHBsYW5lTWVzaF9wYXJraW5nID0gbmV3IFRIUkVFLk1lc2gocGxhbmVHZW9tZXRyeV9wYXJraW5nLCBwaG9uZ01hdGVyaWFsX3BhcmtpbmcpO1xuICAgICAgICBwbGFuZU1lc2hfcGFya2luZy5tYXRlcmlhbC5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTsgLy8g5Lih6Z2i6KGo56S6XG4gICAgICAgIHBsYW5lTWVzaF9wYXJraW5nLnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgICAgICAgcGxhbmVNZXNoX3Bhcmtpbmcucm90YXRlWigtTWF0aC5QSSAvIDIpO1xuICAgICAgICBwbGFuZU1lc2hfcGFya2luZy5wb3NpdGlvbi5zZXQoMjAsIDAuMSwgLTIwKTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQocGxhbmVNZXNoX3BhcmtpbmcpO1xuXG4gICAgICAgIC8v54mp55CG5ryU566X44Gu5bmz6Z2iXG4gICAgICAgIGNvbnN0IHBsYW5lU2hhcGUgPSBuZXcgQ0FOTk9OLlBsYW5lKClcbiAgICAgICAgY29uc3QgcGxhbmVCb2R5ID0gbmV3IENBTk5PTi5Cb2R5KHsgbWFzczogMCB9KVxuICAgICAgICBwbGFuZUJvZHkuYWRkU2hhcGUocGxhbmVTaGFwZSlcbiAgICAgICAgcGxhbmVCb2R5LnBvc2l0aW9uLnNldChwbGFuZU1lc2hfZ3Jhc3MucG9zaXRpb24ueCwgcGxhbmVNZXNoX2dyYXNzLnBvc2l0aW9uLnksIHBsYW5lTWVzaF9ncmFzcy5wb3NpdGlvbi56KTtcbiAgICAgICAgcGxhbmVCb2R5LnF1YXRlcm5pb24uc2V0KHBsYW5lTWVzaF9ncmFzcy5xdWF0ZXJuaW9uLngsIHBsYW5lTWVzaF9ncmFzcy5xdWF0ZXJuaW9uLnksIHBsYW5lTWVzaF9ncmFzcy5xdWF0ZXJuaW9uLnosIHBsYW5lTWVzaF9ncmFzcy5xdWF0ZXJuaW9uLncpO1xuXG4gICAgICAgIHdvcmxkLmFkZEJvZHkocGxhbmVCb2R5KVxuXG4gICAgICAgIC8v6LuK44Gu5pON5L2cKOaKvOOBl+OBn+OBqOOBjeWKoOmAnylcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgICAgICAgICAgdmVoaWNsZS5zZXRXaGVlbEZvcmNlKDEwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgdmVoaWNsZS5zZXRXaGVlbEZvcmNlKDEwLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgICAgICAgICAgdmVoaWNsZS5zZXRXaGVlbEZvcmNlKC0xMCwgMCk7XG4gICAgICAgICAgICAgICAgICAgIHZlaGljbGUuc2V0V2hlZWxGb3JjZSgtMTAsIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgICAgICB2ZWhpY2xlLnNldFN0ZWVyaW5nVmFsdWUoVEhSRUUuTWF0aFV0aWxzLmRlZ1RvUmFkKDMwKSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIHZlaGljbGUuc2V0U3RlZXJpbmdWYWx1ZShUSFJFRS5NYXRoVXRpbHMuZGVnVG9SYWQoMzApLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAgICAgIHZlaGljbGUuc2V0U3RlZXJpbmdWYWx1ZSgtVEhSRUUuTWF0aFV0aWxzLmRlZ1RvUmFkKDMwKSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIHZlaGljbGUuc2V0U3RlZXJpbmdWYWx1ZSgtVEhSRUUuTWF0aFV0aWxzLmRlZ1RvUmFkKDMwKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy/ou4rjga7mk43kvZwo6Zui44GX44Gf44Go44GN5rib6YCfKVxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICAgICAgICAgIHZlaGljbGUuc2V0V2hlZWxGb3JjZSgwLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgdmVoaWNsZS5zZXRXaGVlbEZvcmNlKDAsIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy/kv6Hlj7fjga7mo5JcbiAgICAgICAgY29uc3QgdGV4dHVyZV9saWdodFBvbGUgPSB0ZXh0dXJlTG9hZGVyLmxvYWQoJ2ltZy9saWdodFBvbGUyLnBuZycpO1xuICAgICAgICBjb25zdCBnZW9tZXRyeV9wb2xlID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC41LCAwLjUsIDEwLCAzMik7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsX3BvbGUgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IHRleHR1cmVfbGlnaHRQb2xlIH0pO1xuICAgICAgICBjb25zdCBjeWxpbmRlciA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5X3BvbGUsIG1hdGVyaWFsX3BvbGUpO1xuICAgICAgICBjeWxpbmRlci5wb3NpdGlvbi5zZXQoLTEzLCA1LjUsIC01KTtcbiAgICAgICAgdGhpcy5zY2VuZS5hZGQoY3lsaW5kZXIpO1xuXG4gICAgICAgIC8v5L+h5Y+344Gu44OQ44OD44Kv44Gu44OV44Os44O844OgXG4gICAgICAgIGNvbnN0IGdlb21ldHJ5X2ZyYW1lID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDIsIDUpO1xuICAgICAgICBjb25zdCBtYXRlcmlhbF9mcmFtZSA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogdGV4dHVyZV9saWdodFBvbGUgfSk7XG4gICAgICAgIGNvbnN0IGN1YmVfZnJhbWUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeV9mcmFtZSwgbWF0ZXJpYWxfZnJhbWUpO1xuICAgICAgICBjdWJlX2ZyYW1lLnBvc2l0aW9uLnNldCgtMTMsIDEwLCAtMyk7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGN1YmVfZnJhbWUpO1xuXG4gICAgICAgIGNvbnN0IHRleHR1cmVfcmVkTGlnaHQgPSB0ZXh0dXJlTG9hZGVyLmxvYWQoJ2ltZy9yZWRMaWdodC5wbmcnKTtcbiAgICAgICAgY29uc3QgdGV4dHVyZV95ZWxsb3dMaWdodCA9IHRleHR1cmVMb2FkZXIubG9hZCgnaW1nL3llbGxvd0xpZ2h0LnBuZycpO1xuICAgICAgICBjb25zdCB0ZXh0dXJlX2JsdWVMaWdodCA9IHRleHR1cmVMb2FkZXIubG9hZCgnaW1nL2JsdWVMaWdodC5wbmcnKTtcblxuICAgICAgICAvL+S/oeWPt+OBruiJslxuICAgICAgICBjb25zdCBnZW5lcmF0ZVNwcml0ZSA9IChpbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnZW9tZXRyeV9NZXNoOiBUSFJFRS5NZXNoW10gPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5X2NpcmNsZSA9IG5ldyBUSFJFRS5DaXJjbGVHZW9tZXRyeSgwLjUsIDMyKTtcbiAgICAgICAgICAgIGxldCBtYXRlcmlhbF9jaXJjbGUgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoKTtcbiAgICAgICAgICAgIHN3aXRjaCAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvL+mdklxuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbF9jaXJjbGUgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IHRleHR1cmVfYmx1ZUxpZ2h0IH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsX2NpcmNsZSA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweDgwODA4MCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbF9jaXJjbGUgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHg4MDgwODAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeV9NZXNoLnB1c2gobmV3IFRIUkVFLk1lc2goZ2VvbWV0cnlfY2lyY2xlLCBtYXRlcmlhbF9jaXJjbGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnlfTWVzaFtpXS5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSAvIDIsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnlfTWVzaFtpXS5wb3NpdGlvbi5zZXQoLTEyLjQsIDEwLCAtMS41ICsgLWkgKiAxLjUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLmFkZChnZW9tZXRyeV9NZXNoW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvL+m7hOiJslxuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxfY2lyY2xlID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4ODA4MDgwIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsX2NpcmNsZSA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogdGV4dHVyZV95ZWxsb3dMaWdodCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbF9jaXJjbGUgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHg4MDgwODAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeV9NZXNoLnB1c2gobmV3IFRIUkVFLk1lc2goZ2VvbWV0cnlfY2lyY2xlLCBtYXRlcmlhbF9jaXJjbGUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnlfTWVzaFtpXS5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSAvIDIsIDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnlfTWVzaFtpXS5wb3NpdGlvbi5zZXQoLTEyLjQsIDEwLCAtMS41ICsgLWkgKiAxLjUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjZW5lLmFkZChnZW9tZXRyeV9NZXNoW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvL+i1pFxuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgIGNhc2UgOTpcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbF9jaXJjbGUgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHg4MDgwODAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxfY2lyY2xlID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4ODA4MDgwIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGVyaWFsX2NpcmNsZSA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogdGV4dHVyZV9yZWRMaWdodCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGdlb21ldHJ5X01lc2gucHVzaChuZXcgVEhSRUUuTWVzaChnZW9tZXRyeV9jaXJjbGUsIG1hdGVyaWFsX2NpcmNsZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeV9NZXNoW2ldLnJvdGF0aW9uLnNldCgwLCBNYXRoLlBJIC8gMiwgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeV9NZXNoW2ldLnBvc2l0aW9uLnNldCgtMTIuNCwgMTAsIC0xLjUgKyAtaSAqIDEuNSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKGdlb21ldHJ5X01lc2hbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgICAgICAvLyAvL+OCouODvOODgVxuICAgICAgICAvLyBjb25zdCBnZW9tZXRyeV9hcmNoID0gbmV3IFRIUkVFLlRvcnVzR2VvbWV0cnkoNSwgMSwgMTAsIDEwMCk7XG4gICAgICAgIC8vIGNvbnN0IG1hdGVyaWFsX2FyY2ggPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhmZmZmMDAgfSk7XG4gICAgICAgIC8vIGNvbnN0IGFyY2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeV9hcmNoLCBtYXRlcmlhbF9hcmNoKTtcbiAgICAgICAgLy8gYXJjaC5wb3NpdGlvbi54ID0gLTUwO1xuICAgICAgICAvLyBhcmNoLnJvdGF0ZVkoTWF0aC5QSSAvIDIpO1xuXG4gICAgICAgIC8vIHRoaXMuc2NlbmUuYWRkKGFyY2gpO1xuXG4gICAgICAgIC8v44OJ44O844OgXG4gICAgICAgIGNvbnN0IHRleHR1cmVfZG9tZSA9IHRleHR1cmVMb2FkZXIubG9hZCgnaW1nL2RvbWUucG5nJylcbiAgICAgICAgbGV0IHBvaW50TnVtID0gMTA7XG4gICAgICAgIGNvbnN0IHIgPSAyMDtcbiAgICAgICAgbGV0IHBvaW50czogVEhSRUUuVmVjdG9yMltdID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnROdW07ICsraSkge1xuICAgICAgICAgICAgcG9pbnRzLnB1c2gobmV3IFRIUkVFLlZlY3RvcjIociAqIE1hdGguY29zKE1hdGguUEkgLyAyICogaSAvIChwb2ludE51bSAtIDEpIC0gTWF0aC5QSSAvIDIpLFxuICAgICAgICAgICAgICAgIC1yICogTWF0aC5zaW4oTWF0aC5QSSAvIDIgKiBpIC8gKHBvaW50TnVtIC0gMSkgLSBNYXRoLlBJIC8gMikpKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbGF0aGVHZW9tZXRyeV9kb20gPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwb2ludHMpO1xuICAgICAgICBsZXQgbGF0aGVNYXRlcmlhbF9kb20gPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IHRleHR1cmVfZG9tZSwgc2lkZTogVEhSRUUuRG91YmxlU2lkZSB9KTtcbiAgICAgICAgbGV0IGxhdGhlTWVzaF9kb20gPSBuZXcgVEhSRUUuTWVzaChsYXRoZUdlb21ldHJ5X2RvbSwgbGF0aGVNYXRlcmlhbF9kb20pO1xuICAgICAgICBsYXRoZU1lc2hfZG9tLnBvc2l0aW9uLnNldCgzMCArIHIsIDAsIDMwICsgcik7XG4gICAgICAgIHRoaXMuc2NlbmUuYWRkKGxhdGhlTWVzaF9kb20pO1xuXG4gICAgICAgIC8v44Kz44Oz44OT44OLXG4gICAgICAgIGNvbnN0IHRleHR1cmVfY29uRiA9IHRleHR1cmVMb2FkZXIubG9hZCgnaW1nL2NvbnZlbmlGYWNlLnBuZycpO1xuICAgICAgICBjb25zdCB0ZXh0dXJlX2NvbiA9IHRleHR1cmVMb2FkZXIubG9hZCgnaW1nL2NvbnZlbmlLYWJlLnBuZycpO1xuICAgICAgICBjb25zdCBtYXRlcmlhbF9jb25GID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiB0ZXh0dXJlX2NvbkYgfSk7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsX2NvbiA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogdGV4dHVyZV9jb24gfSk7XG4gICAgICAgIGNvbnN0IGdlb21ldHJ5X2NvbiA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg1MCwgMTIsIDMwKTtcbiAgICAgICAgLy/jg4bjgq/jgrnjg4Hjg6PigJXjgpLlvLXjgorku5jjgZHjgotcbiAgICAgICAgY29uc3QgbWF0ZXJpYWxzX2NvbiA9IFtcbiAgICAgICAgICAgIG1hdGVyaWFsX2NvbiwgLy8g5Y+z6Z2iXG4gICAgICAgICAgICBtYXRlcmlhbF9jb24sIC8vIOW3pumdolxuICAgICAgICAgICAgbWF0ZXJpYWxfY29uLCAgIC8vIOS4iumdolxuICAgICAgICAgICAgbWF0ZXJpYWxfY29uLCAvLyDlupXpnaJcbiAgICAgICAgICAgIG1hdGVyaWFsX2NvbkYsIC8vIOWJjemdolxuICAgICAgICAgICAgbWF0ZXJpYWxfY29uICAvLyDog4zpnaJcbiAgICAgICAgXTtcbiAgICAgICAgY29uc3QgbWVzaF9jb24gPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeV9jb24sIG1hdGVyaWFsc19jb24pO1xuICAgICAgICBtZXNoX2Nvbi5wb3NpdGlvbi5zZXQoMjAsIDYsIC00NSk7XG5cbiAgICAgICAgdGhpcy5zY2VuZS5hZGQobWVzaF9jb24pO1xuXG4gICAgICAgIC8v44OT44OrXG4gICAgICAgIGxldCB4LCB5LCB6O1xuICAgICAgICBsZXQgdGV4dHVyZUluZGV4ID0gMDtcbiAgICAgICAgLy8g44Op44Oz44OA44Og44Gq5YCk44KS55Sf5oiQ44GZ44KL6Zai5pWwXG4gICAgICAgIGZ1bmN0aW9uIGdldFJhbmRvbShtaW4sIG1heCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbiAgICAgICAgfVxuICAgICAgICAvL+ikh+aVsOOBruODhuOCr+OCueODgeODo+KAleiqreOBv+i+vOOBv1xuICAgICAgICBjb25zdCB0ZXh0dXJlX2J1aWxkcyA9IFtcbiAgICAgICAgICAgIHRleHR1cmVMb2FkZXIubG9hZCgnaW1nL2J1aWxkMS5wbmcnKSxcbiAgICAgICAgICAgIHRleHR1cmVMb2FkZXIubG9hZCgnaW1nL2J1aWxkMi5wbmcnKSxcbiAgICAgICAgICAgIHRleHR1cmVMb2FkZXIubG9hZCgnaW1nL2J1aWxkMy5wbmcnKSxcbiAgICAgICAgICAgIHRleHR1cmVMb2FkZXIubG9hZCgnaW1nL2J1aWxkNC5wbmcnKSxcbiAgICAgICAgICAgIHRleHR1cmVMb2FkZXIubG9hZCgnaW1nL2J1aWxkNS5wbmcnKSxcbiAgICAgICAgICAgIHRleHR1cmVMb2FkZXIubG9hZCgnaW1nL2J1aWxkNi5wbmcnKSxcbiAgICAgICAgICAgIHRleHR1cmVMb2FkZXIubG9hZCgnaW1nL2J1aWxkNy5wbmcnKSxcbiAgICAgICAgICAgIHRleHR1cmVMb2FkZXIubG9hZCgnaW1nL2J1aWxkOC5wbmcnKSxcbiAgICAgICAgICAgIHRleHR1cmVMb2FkZXIubG9hZCgnaW1nL2J1aWxkOS5wbmcnKSxcbiAgICAgICAgICAgIHRleHR1cmVMb2FkZXIubG9hZCgnaW1nL2J1aWxkMTAucG5nJyksXG4gICAgICAgICAgICB0ZXh0dXJlTG9hZGVyLmxvYWQoJ2ltZy9idWlsZDExLnBuZycpLFxuICAgICAgICAgICAgdGV4dHVyZUxvYWRlci5sb2FkKCdpbWcvYnVpbGQxMi5wbmcnKVxuICAgICAgICBdO1xuICAgICAgICAvLyDjg5Pjg6vnlJ/miJBcbiAgICAgICAgZm9yIChsZXQgenAgPSAtNjA7IHpwIDw9IDYwOyB6cCArPSAzMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgeHAgPSAtNjA7IHhwIDw9IDYwOyB4cCArPSAzMCkge1xuICAgICAgICAgICAgICAgIHggPSBnZXRSYW5kb20oMjAsIDI1KTtcbiAgICAgICAgICAgICAgICB5ID0gZ2V0UmFuZG9tKDUsIDQwKTtcbiAgICAgICAgICAgICAgICB6ID0geDtcbiAgICAgICAgICAgICAgICBsZXQgZ2VvbWV0cnlfYnVpbGQ7XG4gICAgICAgICAgICAgICAgaWYgKHhwID09IDMwICYmIHpwID09IC0zMCB8fCB4cCA9PSAtMzAgJiYgenAgPT0gMzAgfHwgeHAgPT0gLTYwICYmIHpwID09IC02MCkge1xuICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeV9idWlsZCA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHggLyAyLCB4IC8gMiwgeSwgeik7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBnZW9tZXRyeV9idWlsZCA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh4LCB5LCB6KTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlX2J1aWxkID0gdGV4dHVyZV9idWlsZHNbdGV4dHVyZUluZGV4XTtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRlcmlhbF9idWlsZCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IG1hcDogdGV4dHVyZV9idWlsZCB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBidWlsZCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5X2J1aWxkLCBtYXRlcmlhbF9idWlsZCk7XG4gICAgICAgICAgICAgICAgdGV4dHVyZUluZGV4ID0gKHRleHR1cmVJbmRleCArIDEpICUgdGV4dHVyZV9idWlsZHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmICh4cCA+IDAgJiYgenAgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBidWlsZC5wb3NpdGlvbi5zZXQoeHAsIHkgLyAyLCB6cCk7IC8vIOaJi+WJjeOAgee4puOAgeW3plxuICAgICAgICAgICAgICAgIGlmICgoMCA+IHhwIHx8IHhwID4gMTUpICYmICgwID4genAgfHwgenAgPiAxNSkgJiYgeHAgIT09IDMwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKGJ1aWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL+S6uumWk1xuICAgICAgICBsZXQgaHg6IG51bWJlcltdID0gW1xuICAgICAgICAgICAgLy8rK+ixoemZkFxuICAgICAgICAgICAgNjMsIDUwLCA2NiwgMTAsIDEwLFxuICAgICAgICAgICAgMjAsIDQwLCAzMCwgNTAsIDEwLFxuICAgICAgICAgICAgNywgMTMsIDE1LCA5LCAxMCxcbiAgICAgICAgICAgIDIyLCAyNCwgMjYsIDI4LCAzMCxcbiAgICAgICAgICAgIC8vKy3osaHpmZBcbiAgICAgICAgICAgIDEwLCAxMiwgMjQsIDI4LCAyOSwgNjAsIDYzLFxuICAgICAgICAgICAgLy8tK1xuICAgICAgICAgICAgLTIyLCAtMzAsIC00MCwgLTQxLCAtNjAsIC0yNSwgLTY5LFxuICAgICAgICAgICAgLy8tLeixoemZkFxuICAgICAgICAgICAgLSAxNSwgLTE3LCAtMzAsIC02MCwgLTYwXTtcbiAgICAgICAgbGV0IGh6OiBudW1iZXJbXSA9IFtcbiAgICAgICAgICAgIC8vKyvosaHpmZBcbiAgICAgICAgICAgIDIwLCAyMywgMjAsIDE1LCAxMCxcbiAgICAgICAgICAgIDcwLCAyMCwgMjUsIDIwLCAzMCwvL+ODieODvOODoOWbnuOCilxuICAgICAgICAgICAgNDYsIDQ4LCA0OSwgNDksIDUwLC8v5Lim44Gz6YOo5YmN44Gu5Lq6XG4gICAgICAgICAgICA1MCwgNTAsIDUwLCA1MCwgNTAvL+S4puOCk+OBp+OCi+S6ulxuICAgICAgICAgICAgLy8rLeixoemZkFxuICAgICAgICAgICAgLSAxMCwgLTEyLCAtMjIsIC0yNSwgLTIzLCAtMTAsIC0xMixcbiAgICAgICAgICAgIC8vLStcbiAgICAgICAgICAgIDEyLCA0MiwgNDQsIDQwLCAxMCwgNDUsIDgsXG4gICAgICAgICAgICAvLy0t6LGh6ZmQXG4gICAgICAgICAgICAtIDEwLCAtMTcsIC0xMywgLTEzLCAtOCwgMTBcbiAgICAgICAgXTtcblxuICAgICAgICAvL+mhlFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBoRmFjZV9nZW9tZXRyeSA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxLCAzMiwgMTYpO1xuICAgICAgICAgICAgY29uc3QgaEZhY2VfbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhmZmRhYjkgfSk7XG4gICAgICAgICAgICBjb25zdCBoRmFjZV9zcGhlcmUgPSBuZXcgVEhSRUUuTWVzaChoRmFjZV9nZW9tZXRyeSwgaEZhY2VfbWF0ZXJpYWwpO1xuICAgICAgICAgICAgaEZhY2Vfc3BoZXJlLnBvc2l0aW9uLnNldChoeFtpXSwgMy41LCBoeltpXSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKGhGYWNlX3NwaGVyZSk7XG5cbiAgICAgICAgICAgIC8v5L2TXG4gICAgICAgICAgICBjb25zdCBoQm9keV9nZW9tZXRyeSA9IG5ldyBUSFJFRS5Db25lR2VvbWV0cnkoMSwgMywgMzIpO1xuICAgICAgICAgICAgbGV0IGhCb2R5X21hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4YWRkOGU2IH0pO1xuICAgICAgICAgICAgaWYgKGkgJSAyID09IDApIHtcbiAgICAgICAgICAgICAgICBoQm9keV9tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweGZmYjZjMSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGhCb2R5X2NvbmUgPSBuZXcgVEhSRUUuTWVzaChoQm9keV9nZW9tZXRyeSwgaEJvZHlfbWF0ZXJpYWwpO1xuICAgICAgICAgICAgaEJvZHlfY29uZS5wb3NpdGlvbi5zZXQoaHhbaV0sIDIuNSwgaHpbaV0pO1xuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQoaEJvZHlfY29uZSk7XG5cblxuICAgICAgICAgICAgLy/otrNcbiAgICAgICAgICAgIGNvbnN0IGhMZWdSX2dlb21ldHJ5ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMC4yLCAwLjIsIDEsIDMyKTtcbiAgICAgICAgICAgIGNvbnN0IGhMZWdSX21hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4ZmZkYWI5IH0pO1xuICAgICAgICAgICAgY29uc3QgaFJlZ1JfY3lsaW5kZXIgPSBuZXcgVEhSRUUuTWVzaChoTGVnUl9nZW9tZXRyeSwgaExlZ1JfbWF0ZXJpYWwpO1xuICAgICAgICAgICAgaFJlZ1JfY3lsaW5kZXIucG9zaXRpb24uc2V0KGh4W2ldLCAwLjUsIGh6W2ldICsgMC4yNSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKGhSZWdSX2N5bGluZGVyKTtcblxuICAgICAgICAgICAgY29uc3QgaExlZ0xfZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjIsIDAuMiwgMSwgMzIpO1xuICAgICAgICAgICAgY29uc3QgaExlZ0xfbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhmZmRhYjkgfSk7XG4gICAgICAgICAgICBjb25zdCBoUmVnTF9jeWxpbmRlciA9IG5ldyBUSFJFRS5NZXNoKGhMZWdMX2dlb21ldHJ5LCBoTGVnTF9tYXRlcmlhbCk7XG4gICAgICAgICAgICBoUmVnTF9jeWxpbmRlci5wb3NpdGlvbi5zZXQoaHhbaV0sIDAuNSwgaHpbaV0gLSAwLjI1KTtcbiAgICAgICAgICAgIHRoaXMuc2NlbmUuYWRkKGhSZWdMX2N5bGluZGVyKTtcblxuXG4gICAgICAgICAgICAvL+iFlVxuICAgICAgICAgICAgY29uc3QgaEFybVJfZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgwLjIsIDAuMiwgMSwgMzIpO1xuICAgICAgICAgICAgY29uc3QgaEFybVJfbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhmZmRhYjkgfSk7XG4gICAgICAgICAgICBjb25zdCBoQXJtUl9jeWxpbmRlciA9IG5ldyBUSFJFRS5NZXNoKGhBcm1SX2dlb21ldHJ5LCBoQXJtUl9tYXRlcmlhbCk7XG4gICAgICAgICAgICBoQXJtUl9jeWxpbmRlci5wb3NpdGlvbi5zZXQoaHhbaV0sIDEuOCwgaHpbaV0gKyAxKTtcbiAgICAgICAgICAgIGhBcm1SX2N5bGluZGVyLnJvdGF0ZVgoLU1hdGguUEkgLyA0KTtcblxuICAgICAgICAgICAgdGhpcy5zY2VuZS5hZGQoaEFybVJfY3lsaW5kZXIpO1xuXG4gICAgICAgICAgICBjb25zdCBoQXJtTF9nZW9tZXRyeSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDAuMiwgMC4yLCAxLCAzMik7XG4gICAgICAgICAgICBjb25zdCBoQXJtTF9tYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IGNvbG9yOiAweGZmZGFiOSB9KTtcbiAgICAgICAgICAgIGNvbnN0IGhBcm1MX2N5bGluZGVyID0gbmV3IFRIUkVFLk1lc2goaEFybUxfZ2VvbWV0cnksIGhBcm1MX21hdGVyaWFsKTtcbiAgICAgICAgICAgIGhBcm1MX2N5bGluZGVyLnBvc2l0aW9uLnNldChoeFtpXSwgMS44LCBoeltpXSAtIDEpO1xuICAgICAgICAgICAgaEFybUxfY3lsaW5kZXIucm90YXRlWChNYXRoLlBJIC8gNCk7XG4gICAgICAgICAgICB0aGlzLnNjZW5lLmFkZChoQXJtTF9jeWxpbmRlcik7XG5cbiAgICAgICAgfVxuXG5cblxuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGxldCB1cGRhdGU6IEZyYW1lUmVxdWVzdENhbGxiYWNrID0gKHRpbWUpID0+IHtcbiAgICAgICAgICAgIC8v54mp55CG5ryU566X44KS5a6f6KGMXG5cbiAgICAgICAgICAgIHdvcmxkLmZpeGVkU3RlcCgpO1xuXG4gICAgICAgICAgICAvL+OCreODvOODnOODvOODieOBp+OBrui7iuOBruaTjeS9nFxuICAgICAgICAgICAgLy/ou4rkvZNcbiAgICAgICAgICAgIGJveE1lc2gucG9zaXRpb24uc2V0KGNhckJvZHkucG9zaXRpb24ueCwgY2FyQm9keS5wb3NpdGlvbi55LCBjYXJCb2R5LnBvc2l0aW9uLnopO1xuICAgICAgICAgICAgYm94TWVzaC5xdWF0ZXJuaW9uLnNldChjYXJCb2R5LnF1YXRlcm5pb24ueCwgY2FyQm9keS5xdWF0ZXJuaW9uLnksIGNhckJvZHkucXVhdGVybmlvbi56LCBjYXJCb2R5LnF1YXRlcm5pb24udyk7XG4gICAgICAgICAgICAvL+OCv+OCpOODpFxuICAgICAgICAgICAgZnJvbnRMZWZ0TWVzaDEucG9zaXRpb24uc2V0KGZyb250TGVmdFdoZWVsQm9keS5wb3NpdGlvbi54LCBmcm9udExlZnRXaGVlbEJvZHkucG9zaXRpb24ueSwgZnJvbnRMZWZ0V2hlZWxCb2R5LnBvc2l0aW9uLnopO1xuICAgICAgICAgICAgZnJvbnRMZWZ0TWVzaDEucXVhdGVybmlvbi5zZXQoZnJvbnRMZWZ0V2hlZWxCb2R5LnF1YXRlcm5pb24ueCwgZnJvbnRMZWZ0V2hlZWxCb2R5LnF1YXRlcm5pb24ueSwgZnJvbnRMZWZ0V2hlZWxCb2R5LnF1YXRlcm5pb24ueiwgZnJvbnRMZWZ0V2hlZWxCb2R5LnF1YXRlcm5pb24udyk7XG4gICAgICAgICAgICBmcm9udExlZnRNZXNoMi5wb3NpdGlvbi5zZXQoZnJvbnRSaWdodFdnZWVsQm9keS5wb3NpdGlvbi54LCBmcm9udFJpZ2h0V2dlZWxCb2R5LnBvc2l0aW9uLnksIGZyb250UmlnaHRXZ2VlbEJvZHkucG9zaXRpb24ueik7XG4gICAgICAgICAgICBmcm9udExlZnRNZXNoMi5xdWF0ZXJuaW9uLnNldChmcm9udFJpZ2h0V2dlZWxCb2R5LnF1YXRlcm5pb24ueCwgZnJvbnRSaWdodFdnZWVsQm9keS5xdWF0ZXJuaW9uLnksIGZyb250UmlnaHRXZ2VlbEJvZHkucXVhdGVybmlvbi56LCBmcm9udFJpZ2h0V2dlZWxCb2R5LnF1YXRlcm5pb24udyk7XG4gICAgICAgICAgICBmcm9udExlZnRNZXNoMy5wb3NpdGlvbi5zZXQoYmFja0xlZnRXaGVlbEJvZHkucG9zaXRpb24ueCwgYmFja0xlZnRXaGVlbEJvZHkucG9zaXRpb24ueSwgYmFja0xlZnRXaGVlbEJvZHkucG9zaXRpb24ueik7XG4gICAgICAgICAgICBmcm9udExlZnRNZXNoMy5xdWF0ZXJuaW9uLnNldChiYWNrTGVmdFdoZWVsQm9keS5xdWF0ZXJuaW9uLngsIGJhY2tMZWZ0V2hlZWxCb2R5LnF1YXRlcm5pb24ueSwgYmFja0xlZnRXaGVlbEJvZHkucXVhdGVybmlvbi56LCBiYWNrTGVmdFdoZWVsQm9keS5xdWF0ZXJuaW9uLncpO1xuICAgICAgICAgICAgZnJvbnRMZWZ0TWVzaDQucG9zaXRpb24uc2V0KGJhY2tSaWdodFdoZWVsQm9keS5wb3NpdGlvbi54LCBiYWNrUmlnaHRXaGVlbEJvZHkucG9zaXRpb24ueSwgYmFja1JpZ2h0V2hlZWxCb2R5LnBvc2l0aW9uLnopO1xuICAgICAgICAgICAgZnJvbnRMZWZ0TWVzaDQucXVhdGVybmlvbi5zZXQoYmFja1JpZ2h0V2hlZWxCb2R5LnF1YXRlcm5pb24ueCwgYmFja1JpZ2h0V2hlZWxCb2R5LnF1YXRlcm5pb24ueSwgYmFja1JpZ2h0V2hlZWxCb2R5LnF1YXRlcm5pb24ueiwgYmFja1JpZ2h0V2hlZWxCb2R5LnF1YXRlcm5pb24udyk7XG5cbiAgICAgICAgICAgIC8v5L+h5Y+35qmf44Gu54K55ruFXG4gICAgICAgICAgICBnZW5lcmF0ZVNwcml0ZShpICUgMTApO1xuICAgICAgICAgICAgaSArPSAwLjA2MjU7XG5cbiAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLmxvb2tBdChcbiAgICAgICAgICAgIC8vICAgICBjYXJCb2R5LnBvc2l0aW9uLnggLSAxMCxcbiAgICAgICAgICAgIC8vICAgICBjYXJCb2R5LnBvc2l0aW9uLnkgKyA1LFxuICAgICAgICAgICAgLy8gICAgIGNhckJvZHkucG9zaXRpb24ueiBcbiAgICAgICAgICAgIC8vIClcbiAgICAgICAgICAgIC8vIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnNldChcbiAgICAgICAgICAgIC8vICAgICBjYXJCb2R5LnBvc2l0aW9uLngrNSAsXG4gICAgICAgICAgICAvLyAgICAgY2FyQm9keS5wb3NpdGlvbi55KzUgLFxuICAgICAgICAgICAgLy8gICAgIDBcbiAgICAgICAgICAgIC8vICk7XG5cbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgICAgICB9XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGUpO1xuICAgIH1cblxufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgbGV0IGNvbnRhaW5lciA9IG5ldyBUaHJlZUpTQ29udGFpbmVyKCk7XG5cbiAgICBsZXQgdmlld3BvcnQgPSBjb250YWluZXIuY3JlYXRlUmVuZGVyZXJET00oNjQwLCA0ODAsIG5ldyBUSFJFRS5WZWN0b3IzKDUsIDUsIDUpLCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh2aWV3cG9ydCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2NncHJlbmRlcmluZ1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjZ3ByZW5kZXJpbmdcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2Nhbm5vbi1lc19kaXN0X2Nhbm5vbi1lc19qcy1ub2RlX21vZHVsZXNfdGhyZWVfZXhhbXBsZXNfanNtX2NvbnRyb2xzX09yYi1lNThiZDJcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=