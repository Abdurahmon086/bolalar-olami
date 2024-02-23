<script setup>
useHead({ title: "Bolalar olami | posts" });
const store = useMediaStore()
</script>
<template>
   <main class="darkMode-body pb-5 bg-white">
        <!-- OUR GALLERY -->
        <section class="container darkMode-body">
            <div class="mediacate">
                <h2 class="mediacate__text darkMode-title">
                    BIZNING GALEREYA
                </h2>
                <div class="mediacate__card">
                    <div class="mediacate__card-box position-relative">
                        <img src="/images/mediacategoryImages/mediaimg1.png" class="img-fluid mediacate__card-img"
                            alt="GALEREYA img">
                        <div class="mediacate__card-posi position-absolute w-100">
                            <div>
                                <h3 class="mediacate__card-posi--title fw-medium text-white">
                                    Ijtimoiy so'rovnoma
                                </h3>
                                <h3 class="mediacate__card-posi--title fw-normal">
                                    5 Videos
                                </h3>
                            </div>
                            <img src="/images/mediacategoryImages/play-icon.svg" class="img-fluid" alt="play-icon">
                        </div>
                    </div>
                    <div class="mediacate__card-box1">
                        <div class="position-relative">
                            <img src="/images/mediacategoryImages/mediaimg2.png" class="img-fluid rounded-0 mediacate__card-box1--img "
                                alt="GALEREYA img">
                                <h2 class="mediacate__card-bottom--title position-absolute">
                                    Barcha pleylistlar
                                </h2>
                                <div class="mediacate__card-bottom position-absolute w-100">
                                    <div>
                                        <p class="mediacate__card-bottom--text">
                                            Ijtimoiy so'rovnoma
                                        </p>
                                        <p class="mediacate__card-bottom--text1 fw-normal">
                                            32 Videos 
                                        </p>
                                    </div>
                                    <img src="/images/mediacategoryImages/play-icon.svg" class="img-fluid" style="width: 40px; height: 40px;" alt="play-icon">
                                </div>

                        </div>
                        <div class="position-relative">
                            <img src="/images/mediacategoryImages/mediaimg3.png" class="img-fluid rounded-0 mediacate__card-box1--img"
                                alt="GALEREYA img">
                                <h2  class="mediacate__card-bottom--title position-absolute">
                                    Barcha fotosuratlar
                                </h2>
                                <div class="mediacate__card-bottom position-absolute w-100">
                                    <div>
                                        <p class="mediacate__card-bottom--text">
                                            Hamma rasmlar
                                        </p>
                                        <p class="mediacate__card-bottom--text1 fw-normal">
                                            65 rasmlar  
                                        </p>
                                    </div>
                                    <div class="mediacate__card-bottom--imgdiv">
                                    <img src="/images/mediacategoryImages/gallery-icon.svg" class="img-fluid mediacate__card-bottom--img" alt="play-icon">
                                    </div>
                                </div>

                        </div>

                    </div>
                </div>
                <div class="mediacate__galle">
                    <div class="position-relative">
                        <img src="/images/mediacategoryImages/imggalleriya.png" class="img-fluid" alt="gallery-img">
                        <img src="/images/mediacategoryImages/group-icon.svg" class="position-absolute mediacate__galle--icon" alt="icon">
                    </div>
                    <div class="position-relative">
                        <img src="/images/mediacategoryImages/imggalleriya1.png" class="img-fluid" alt="gallery-img">
                        <img src="/images/mediacategoryImages/group-icon.svg" class="position-absolute mediacate__galle--icon" alt="icon">
                    </div>
                    <div class="position-relative">
                        <img src="/images/mediacategoryImages/imggalleriya2.png" class="img-fluid" alt="gallery-img">
                        <img src="/images/mediacategoryImages/group-icon.svg" class="position-absolute mediacate__galle--icon" alt="icon">
                    </div>
                    <div class="position-relative">
                        <img src="/images/mediacategoryImages/imggalleriya4.png" class="img-fluid" alt="gallery-img">
                        <img src="/images/mediacategoryImages/group-icon.svg" class="position-absolute mediacate__galle--icon" alt="icon">
                    </div>
                    <div class="position-relative">
                        <img src="/images/mediacategoryImages/imggalleriya6.png" class="img-fluid" alt="gallery-img">
                        <img src="/images/mediacategoryImages/group-icon.svg" class="position-absolute mediacate__galle--icon" alt="icon">
                    </div>
                    <div class="position-relative">
                        <img src="/images/mediacategoryImages/imggalleriya5.png" class="img-fluid" alt="gallery-img">
                        <img src="/images/mediacategoryImages/group-icon.svg" class="position-absolute mediacate__galle--icon" alt="icon">
                    </div>
                </div>
            </div>
        </section>
        <!-- media all -->
        <section class="container">
           <div class="d-flex justify-content-between">
            <h2 class="mediacate__all-text darkMode-title">
                Hammasi
            </h2>
            <button id="myButton" @click="store.$boolFunc()" class="btn btn-danger mediaBtn">ffff</button>
           </div>
            <div class="mediacate__all">
                <div class="position-relative mediacate__all-card w-100 image-container ">
                    <img src="/images/mediacategoryImages/all-img.png" class="img-fluid h-100 rounded-0 card-img" alt="img">
                    <div class="position-absolute mediacate__all-box w-100 card-img-overlay">
                        <div>
                            <p class="mediacate__all-box-text fw-medium text-white">Ijtimoiy so'rovnoma</p>
                            <p class="mediacate__all-box-text fw-normal">5 Videos </p>
                        </div>
                        <img src="/images/mediacategoryImages/play-icon.svg" class=" img-fluid" style="width: 40px; height: 40px;" alt="icon">
                    </div>
                </div>
                <div class="position-relative mediacate__all-card w-100 image-container ">
                    <img src="/images/mediacategoryImages/all-img1.png" class="img-fluid h-100 rounded-0 card-img" alt="img">
                    <div class="position-absolute mediacate__all-box w-100 card-img-overlay">
                        <div>
                            <p class="mediacate__all-box-text fw-medium text-white">Ijtimoiy so'rovnoma</p>
                            <p class="mediacate__all-box-text fw-normal">5 Videos </p>
                        </div>
                        <img src="/images/mediacategoryImages/play-icon.svg" class=" img-fluid" style="width: 40px; height: 40px;" alt="icon">
                    </div>
                </div>
                <div class="position-relative mediacate__all-card w-100 image-container ">
                    <img src="/images/mediacategoryImages/all-img1.png" class="img-fluid h-100 rounded-0 card-img" alt="img">
                    <div class="position-absolute mediacate__all-box w-100 card-img-overlay">
                        <div>
                            <p class="mediacate__all-box-text fw-medium text-white">Ijtimoiy so'rovnoma</p>
                            <p class="mediacate__all-box-text fw-normal">5 Videos </p>
                        </div>
                        <img src="/images/mediacategoryImages/play-icon.svg" class=" img-fluid" style="width: 40px; height: 40px;" alt="icon">
                    </div>
                </div>
                <div class="position-relative mediacate__all-card w-100 image-container ">
                    <img src="/images/mediacategoryImages/all-img1.png" class="img-fluid h-100 rounded-0 card-img" alt="img">
                    <div class="position-absolute mediacate__all-box w-100 card-img-overlay">
                        <div>
                            <p class="mediacate__all-box-text fw-medium text-white">Ijtimoiy so'rovnoma</p>
                            <p class="mediacate__all-box-text fw-normal">5 Videos </p>
                        </div>
                        <img src="/images/mediacategoryImages/play-icon.svg" class=" img-fluid" style="width: 40px; height: 40px;" alt="icon">
                    </div>
                </div>
                <!-- <div class="position-relative mediacate__all-card w-100 image-container ">
                    <img src="/images/mediacategoryImages/all-img2.png" class="img-fluid h-100 rounded-0 card-img" alt="img">
                    <div class="position-absolute mediacate__all-box w-100 card-img-overlay">
                        <div>
                            <p class="mediacate__all-box-text fw-medium text-white">Ijtimoiy so'rovnoma</p>
                            <p class="mediacate__all-box-text fw-normal">5 Videos </p>
                        </div>
                        <img src="/images/mediacategoryImages/play-icon.svg" class=" img-fluid" style="width: 40px; height: 40px;" alt="icon">
                    </div>
                </div>
                <div class="position-relative mediacate__all-card w-100 image-container ">
                    <img src="/images/mediacategoryImages/all-img3.png" class="img-fluid h-100 rounded-0 card-img" alt="img">
                    <div class="position-absolute mediacate__all-box w-100 card-img-overlay">
                        <div>
                            <p class="mediacate__all-box-text fw-medium text-white">Ijtimoiy so'rovnoma</p>
                            <p class="mediacate__all-box-text fw-normal">5 Videos </p>
                        </div>
                        <img src="/images/mediacategoryImages/play-icon.svg" class=" img-fluid" style="width: 40px; height: 40px;" alt="icon">
                    </div>
                </div> -->
                <div class="position-relative mediacate__all-card w-100 image-container classOld myDiv">
                            <img src="/images/mediacategoryImages/all-img3.png" class="img-fluid h-100 rounded-0 card-img"
                                alt="img">
                            <div class="position-absolute mediacate__all-box w-100 card-img-overlay">
                                <div>
                                    <p class="mediacate__all-box-text fw-medium text-white">Ijtimoiy so'rovnoma</p>
                                    <p class="mediacate__all-box-text fw-normal">5 Videos </p>
                                </div>
                                <img src="/images/mediacategoryImages/play-icon.svg" class=" img-fluid"
                                    style="width: 40px; height: 40px;" alt="icon">
                            </div>
                        </div>
                        <div class="position-relative mediacate__all-card w-100 image-container classOld myDiv">
                            <img src="/images/mediacategoryImages/all-img3.png" class="img-fluid h-100 rounded-0 card-img"
                                alt="img">
                            <div class="position-absolute mediacate__all-box w-100 card-img-overlay">
                                <div>
                                    <p class="mediacate__all-box-text fw-medium text-white">Ijtimoiy so'rovnoma</p>
                                    <p class="mediacate__all-box-text fw-normal">5 Videos </p>
                                </div>
                                <img src="/images/mediacategoryImages/play-icon.svg" class=" img-fluid"
                                    style="width: 40px; height: 40px;" alt="icon">
                            </div>
                        </div>
                        <div  class="position-relative mediacate__all-card w-100 image-container classOld myDiv">
                            <img src="/images/mediacategoryImages/all-img3.png" class="img-fluid h-100 rounded-0 card-img"
                                alt="img">
                            <div class="position-absolute mediacate__all-box w-100 card-img-overlay">
                                <div>
                                    <p class="mediacate__all-box-text fw-medium text-white">Ijtimoiy so'rovnoma</p>
                                    <p class="mediacate__all-box-text fw-normal">5 Videos </p>
                                </div>
                                <img src="/images/mediacategoryImages/play-icon.svg" class=" img-fluid"
                                    style="width: 40px; height: 40px;" alt="icon">
                            </div>
                        </div>
            </div>
        </section>
        <section class="container">
            <h2 class="mediacate__all-text darkMode-title">
                Hammasi
            </h2>
            <div class="mediacate__all">
                <div class="position-relative mediacate__all-card w-100 image-container ">
                    <img src="/images/mediacategoryImages/all-img4.png" class="img-fluid h-100 rounded-0 card-img" alt="img">
                    <div class="position-absolute mediacate__all-box w-100 h-100 card-img-overlay">
                        <div>
                            <p class="mediacate__all-box-text fw-medium text-white">Ijtimoiy so'rovnoma</p>
                            <p class="mediacate__all-box-text fw-normal">5 Videos </p>
                        </div>
                        <img src="/images/mediacategoryImages/play-icon.svg" class=" img-fluid" style="width: 40px; height: 40px;" alt="icon">
                    </div>
                </div>
                <div class="position-relative mediacate__all-card w-100 image-container ">
                    <img src="/images/mediacategoryImages/all-img5.png" class="img-fluid h-100 rounded-0 card-img" alt="img">
                    <div class="position-absolute mediacate__all-box w-100 card-img-overlay">
                        <div>
                            <p class="mediacate__all-box-text fw-medium text-white">Ijtimoiy so'rovnoma</p>
                            <p class="mediacate__all-box-text fw-normal">5 Videos </p>
                        </div>
                        <img src="/images/mediacategoryImages/play-icon.svg" class=" img-fluid" style="width: 40px; height: 40px;" alt="icon">
                    </div>
                </div>
                <div class="position-relative mediacate__all-card w-100 image-container ">
                    <img src="/images/mediacategoryImages/all-img6.png" class="img-fluid h-100 rounded-0 card-img" alt="img">
                    <div class="position-absolute mediacate__all-box w-100 card-img-overlay">
                        <div>
                            <p class="mediacate__all-box-text fw-medium text-white">Ijtimoiy so'rovnoma</p>
                            <p class="mediacate__all-box-text fw-normal">5 Videos </p>
                        </div>
                        <img src="/images/mediacategoryImages/play-icon.svg" class=" img-fluid" style="width: 40px; height: 40px;" alt="icon">
                    </div>
                </div>
                <div class="position-relative mediacate__all-card w-100 image-container ">
                    <img src="/images/mediacategoryImages/all-img7.png" class="img-fluid h-100 rounded-0 card-img" alt="img">
                    <div class="position-absolute mediacate__all-box w-100 card-img-overlay">
                        <div>
                            <p class="mediacate__all-box-text fw-medium text-white">Ijtimoiy so'rovnoma</p>
                            <p class="mediacate__all-box-text fw-normal">5 Videos </p>
                        </div>
                        <img src="/images/mediacategoryImages/play-icon.svg" class=" img-fluid" style="width: 40px; height: 40px;" alt="icon">
                    </div>
                </div>
               
            </div>
        </section>

        <section class="slide-option loopScroler mb-0 bg-white darkMode">
            <div id="infinite" class="highway-slider">
                <div class="highway-barrier">
                    <ul class="highway-lane list-unstyled m-0 darkMode">
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>